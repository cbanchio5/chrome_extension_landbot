# Landbot Assistant Chrome Extension

A simple Chrome extension that adds a draggable button to your browser window. Clicking the button toggles a Landbot chat assistant iframe.

---

## Features

- Draggable launcher button fixed on the page
- Toggleable embedded Landbot chatbot
- Close button to hide the chatbot iframe
- Keeps button inside viewport while dragging

---

## Installation

1. Clone or download this repository.
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable **Developer mode** (top right toggle).
4. Click **Load unpacked** and select the extension folder.
5. The extension will add a draggable Landbot Assistant button on all pages.

---

## Usage

- Click the 💬 button to open or close the chatbot.
- Click and drag the button to reposition it anywhere on the screen.
- Click the ✖ button inside the chatbot container to close the chat window.

---

## Files

- `content.js` — Injects the draggable button and chat iframe logic.
- `style.css` — Styles for the launcher button and chatbot container.
- `manifest.json` — Chrome extension configuration file.

---

## Customization

- Replace the iframe URL in `content.js` to use your own Landbot chatbot link:

  ```js
  iframe.src = "https://landbot.pro/v3/H-3051155-BJSUBH1E0B9G66J5/index.html";
