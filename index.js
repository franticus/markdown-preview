const container = document.getElementById('container');
const source = document.getElementById('source');
const preview = document.getElementById('preview');
const devider = document.getElementById('devider');

source.addEventListener('keyup', () => {
  const newText = marked.parse(source.value);
  preview.innerHTML = newText;
});