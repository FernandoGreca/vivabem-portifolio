import { access, readFile, readdir } from 'node:fs/promises';

const html = await readFile('public/index.html', 'utf8');
const requiredAnchors = ['inicio', 'projeto', 'casos', 'documentacao', 'telas', 'relatorio', 'identificacao'];
const requiredPhrases = ['Fernando Barros Greca', '241072139', 'Tiago Ravache', 'Vídeo demonstrativo do VivaBem', '1P8Y8rvv5ZBN371cVei1E6v50RyOKGjny'];
const localAssets = [...html.matchAll(/(?:src|href)="((?:\.\/)?(?:assets|documents)\/[^"#]+)"/g)].map((match) => `public/${match[1].replace(/^\.\//, '')}`);
const externalLinks = [...html.matchAll(/href="https:\/\/[^"#]+"/g)];

for (const id of requiredAnchors) {
  if (!html.includes(`id="${id}"`)) throw new Error(`Seção ausente: ${id}`);
}
for (const phrase of requiredPhrases) {
  if (!html.includes(phrase)) throw new Error(`Conteúdo obrigatório ausente: ${phrase}`);
}
for (const asset of localAssets) await access(asset);
if (externalLinks.length < 15) throw new Error('Quantidade inesperada de links para materiais originais.');
if (html.includes('TODO') || html.includes('Lorem ipsum') || html.includes('placeholder')) throw new Error('Texto provisório localizado.');
if (/\b(?:src|href)="\/(?:assets|documents|styles\.css)/.test(html)) throw new Error('Caminho absoluto incompatível com GitHub Pages localizado.');
if ((await readdir('public/assets/screens')).length < 10) throw new Error('Conjunto de telas incompleto.');
console.log(`Validação aprovada: ${localAssets.length} recursos locais e ${externalLinks.length} links originais.`);
