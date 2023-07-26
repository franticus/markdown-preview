const container = document.getElementById('container');
const source = document.getElementById('source');
const preview = document.getElementById('preview');
const devider = document.getElementById('devider');

source.addEventListener('keyup', () => {
  const newText = marked.parse(source.value);
  preview.innerHTML = newText;
});

const onMouseMove = (event) => {
  const { left, width } = container.getBoundingClientRect();
  const { clientX } = event;
  source.style.width = `${clientX - left}px`;
  preview.style.width = `${left + width - clientX}px`;
};

const onMouseUp = () => {
  document.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('mouseup', onMouseUp);
};

const onMouseDown = () => {
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
};

devider.addEventListener('mousedown', onMouseDown);
