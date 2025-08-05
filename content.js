const button = document.createElement('button');
button.innerText = "💬 Chat with Bot";
button.id = "my-bot-launcher";
document.body.appendChild(button);

button.onclick = () => {
  const existingFrame = document.getElementById('my-bot-frame');
  if (existingFrame) {
    existingFrame.remove(); // Toggle off if already open
    return;
  }

  const iframe = document.createElement('iframe');
  iframe.src = "https://landbot.pro/v3/H-3051155-BJSUBH1E0B9G66J5/index.html"; // Replace with your bot link
  iframe.id = "my-bot-frame";
  document.body.appendChild(iframe);
};
