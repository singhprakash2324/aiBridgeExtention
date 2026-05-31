document.getElementById("gemini")
.addEventListener("click", () => {
  transfer("https://gemini.google.com/app");
});

document.getElementById("claude")
.addEventListener("click", () => {
  transfer("https://claude.ai/new");
});

async function transfer(url) {

  const [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true
  });

  chrome.tabs.sendMessage(
    tab.id,
    { type: "GET_CHAT" },
    (response) => {

      if (!response) {
        console.error("No response");
        return;
      }

      const formatted = response
        .map(msg =>
          `${msg.role.toUpperCase()}:\n${msg.text}`
        )
        .join("\n\n");

      chrome.storage.local.set({
        transferredChat: formatted
      }, () => {

        chrome.tabs.create({
          url
        });

      });

    }
  );

}