const button = document.createElement('button');
button.innerText = "💬 Landbot Assistant";
button.id = "my-bot-launcher";
document.body.appendChild(button);

let isDragging = false;
let offsetX, offsetY;

button.addEventListener('mousedown', (e) => {
  isDragging = true;

  const rect = button.getBoundingClientRect();

  // Switch from bottom/right CSS positioning to left/top inline styles for dragging
  button.style.left = rect.left + 'px';
  button.style.top = rect.top + 'px';
  button.style.right = 'auto';
  button.style.bottom = 'auto';

  offsetX = e.clientX - rect.left;
  offsetY = e.clientY - rect.top;

  e.preventDefault(); // prevent text selection while dragging
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  let left = e.clientX - offsetX;
  let top = e.clientY - offsetY;

  // Keep the button inside the viewport
  const maxLeft = window.innerWidth - button.offsetWidth;
  const maxTop = window.innerHeight - button.offsetHeight;

  if (left < 0) left = 0;
  else if (left > maxLeft) left = maxLeft;

  if (top < 0) top = 0;
  else if (top > maxTop) top = maxTop;

  button.style.left = left + 'px';
  button.style.top = top + 'px';
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

button.onclick = () => {
  const existingContainer = document.getElementById('my-bot-container');
  if (existingContainer) {
    existingContainer.remove(); // toggle off
    return;
  }

  const container = document.createElement('div');
  container.id = 'my-bot-container';

  const iframe = document.createElement('iframe');
  iframe.src = "https://landbot.pro/v3/H-3051155-BJSUBH1E0B9G66J5/index.html";
  iframe.id = "my-bot-frame";

  const closeBtn = document.createElement('button');
  closeBtn.id = 'my-bot-close';
  closeBtn.innerText = '✖';

  closeBtn.onclick = () => {
    container.remove();
  };

  container.appendChild(closeBtn);
  container.appendChild(iframe);
  document.body.appendChild(container);
};
