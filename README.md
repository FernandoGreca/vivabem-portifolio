# Portfólio acadêmico VivaBem

Site estático, sem dependências externas de build. Os recursos visuais usados pelo site foram copiados das evidências reais do Google Drive para `public/assets/`; os cartões de documentação conservam links para os arquivos originais.

## Desenvolvimento e publicação

```bash
npm run lint
npm test
npm run build
npm run dev
```

O build é gerado em `dist/`. Publique esse diretório em Netlify, Vercel, GitHub Pages ou Cloudflare Pages. Configure o comando de build como `npm run build` e o diretório de publicação como `dist`.

Para validar localmente o caminho usado pelo GitHub Pages, execute `npm run build` e `SITE_ROOT=dist npm run dev:pages`; abra `http://localhost:4173/vivabem-portifolio/`.

## Matriz de requisitos e fontes

| Requisito do enunciado | Fontes verificadas | Aplicação no portfólio |
| --- | --- | --- |
| Página inicial | `visao.docx`, `plano_de_estagio_completo.docx`, `Relatório de Estágio.docx` | Nome, objetivo e descrição do VivaBem. |
| Sobre o projeto | `visao.docx`, `especificacao_suplementar.docx`, `Relatório de Estágio.docx` | Problema, tecnologias e arquitetura em camadas. |
| Casos de uso e cronograma | Quatro especificações de caso de uso, `Relatório de Estágio.docx`, `cronograma.xlsx` | Cinco casos de uso previstos e status real consolidado. |
| Documentação | Diagramas de caso de uso, classes, DER, implantação, sequência, estado e workflow AS-IS | Prévias locais e links para os arquivos originais. |
| Telas e vídeo | `3 Bimestre/telas` (dashboard, alimentação, sono, notificação, evacuação e `demonstrativo-vivabem.mp4`) | Capturas agrupadas por módulo e vídeo incorporado do Drive. |
| Relatório de estágio | `3 Bimestre/Relatório de Estágio.docx` | PDF gerado localmente sem modificar o DOCX. |
| Identificação | `Termo de Compromisso Obrigatório UniFil 2026.docx`, `Relatório de Estágio.docx` | Nome, matrícula e orientador do relatório mais recente. |

## Situação documentada

O relatório atualizado registra alimentação, evacuação, sono e notificações como implementados. O gerenciamento de relatórios permanece como trabalho futuro; por isso, não foi apresentado como concluído mesmo havendo uma previsão inicial de agosto de 2026 no planejamento.
