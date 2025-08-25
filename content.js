// Create the floating launcher button
const button = document.createElement('button');
button.innerText = "💬 Landbot Assistant";
button.id = "my-bot-launcher";
document.body.appendChild(button);

// Dragging logic for the launcher button
let isDragging = false;
let offsetX, offsetY;

button.addEventListener('mousedown', (e) => {
  isDragging = true;
  const rect = button.getBoundingClientRect();
  button.style.left = rect.left + 'px';
  button.style.top = rect.top + 'px';
  button.style.right = 'auto';
  button.style.bottom = 'auto';
  offsetX = e.clientX - rect.left;
  offsetY = e.clientY - rect.top;
  e.preventDefault();
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  let left = e.clientX - offsetX;
  let top = e.clientY - offsetY;
  const maxLeft = window.innerWidth - button.offsetWidth;
  const maxTop = window.innerHeight - button.offsetHeight;
  button.style.left = Math.min(Math.max(0, left), maxLeft) + 'px';
  button.style.top = Math.min(Math.max(0, top), maxTop) + 'px';
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

// Define available bots and their URLs
const bots = {
  "Support Bot": "https://landbot.pro/v3/H-3059291-O8QGQIXHJZW58XX0/index.html",
  "Sales Bot": "https://landbot.pro/v3/YOUR_SALES_BOT_ID/index.html",
  "Feedback Bot": "https://landbot.pro/v3/YOUR_FEEDBACK_BOT_ID/index.html"
};

// On launcher button click
button.onclick = () => {
  const existingContainer = document.getElementById('my-bot-container');
  if (existingContainer) {
    existingContainer.remove();
    return;
  }

  const container = document.createElement('div');
  container.id = 'my-bot-container';
  container.classList.add('bot-menu');
  document.body.appendChild(container);

  // Bot selection screen
  const showBotSelection = () => {
    container.className = 'bot-menu';
    container.innerHTML = '';

    const title = document.createElement('div');
    title.innerText = 'Choose a Bot';
    title.className = 'bot-menu-title';
    container.appendChild(title);

    const botList = document.createElement('div');
    botList.className = 'bot-list';

    Object.entries(bots).forEach(([botName, botUrl]) => {
      const botBtn = document.createElement('button');
      botBtn.innerText = botName;
      botBtn.className = 'bot-button';
      botBtn.onclick = () => loadBot(botName, botUrl);
      botList.appendChild(botBtn);
    });

    const closeBtn = document.createElement('button');
    closeBtn.innerText = '✖ Close';
    closeBtn.className = 'close-button';
    closeBtn.onclick = () => container.remove();

    container.appendChild(botList);
    container.appendChild(closeBtn);
  };

  // Bot iframe view
  const loadBot = (botName, botUrl) => {
    container.className = 'bot-chat';
    container.innerHTML = '';

    const topBar = document.createElement('div');
    topBar.className = 'bot-topbar';

    const backBtn = document.createElement('button');
    backBtn.innerText = '← Back';
    backBtn.className = 'back-button';
    backBtn.onclick = showBotSelection;

    const title = document.createElement('span');
    title.innerText = botName;
    title.style.fontWeight = 'bold';

    const closeBtn = document.createElement('button');
    closeBtn.innerText = '✖';
    closeBtn.className = 'close-inline-button';
    closeBtn.onclick = () => container.remove();

    topBar.appendChild(backBtn);
    topBar.appendChild(title);
    topBar.appendChild(closeBtn);

    const iframe = document.createElement('iframe');
    iframe.src = botUrl;
    iframe.style.flex = '1';
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '100%';

    container.appendChild(topBar);
    container.appendChild(iframe);
  };

  // Load menu view initially
  showBotSelection();
};



<script SameSite="None; Secure"  type="module" src="https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs"></script>
<script type="module">
  var myLandbot = new Landbot.Livechat({
    configUrl: '',
  });
</script>