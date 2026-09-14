const dialog = document.querySelector('.image-dialog');
const dialogImage = dialog?.querySelector('.image-dialog-image');
const closeButton = dialog?.querySelector('.image-dialog-close');
const screenImages = document.querySelectorAll('img[src^="assets/screens/"]');

function closeDialog() {
  if (dialog?.open) dialog.close();
}

function openDialog(image) {
  if (!dialog || !dialogImage) return;
  dialogImage.src = image.currentSrc || image.src;
  dialogImage.alt = image.alt;
  dialog.showModal();
}

for (const image of screenImages) {
  image.classList.add('expandable-screen');
  image.tabIndex = 0;
  image.setAttribute('role', 'button');
  image.setAttribute('aria-label', `${image.alt}. Abrir em tamanho ampliado`);
  image.addEventListener('click', () => openDialog(image));
  image.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openDialog(image);
    }
  });
}

closeButton?.addEventListener('click', closeDialog);
dialog?.addEventListener('click', (event) => {
  if (event.target === dialog) closeDialog();
});
