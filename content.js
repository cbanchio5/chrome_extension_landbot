const button = document.createElement('button');
button.innerText = "💬 Landbot Asistant";
button.id = "my-bot-launcher";
document.body.appendChild(button);

button.onclick = () => {
  const existingContainer = document.getElementById('my-bot-container');
  if (existingContainer) {
    existingContainer.remove(); // Toggle off
    return;
  }

  // Container for iframe and close button
  const container = document.createElement('div');
  container.id = 'my-bot-container';

  const iframe = document.createElement('iframe');
  iframe.src = "https://landbot.pro/v3/H-3051155-BJSUBH1E0B9G66J5/index.html"; // Replace with your bot link
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
