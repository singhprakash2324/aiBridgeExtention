console.log("Claude loaded");

chrome.storage.local.get(
  ["transferredChat"],
  (data) => {

    console.log("Retrieved:", data);

    if (!data.transferredChat) {
      console.log("No chat found");
      return;
    }

    const interval = setInterval(() => {

      const editor =
        document.querySelector(
          '[contenteditable="true"]'
        );

      if (!editor) {
        console.log("Editor not found");
        return;
      }

      console.log("Editor found");

      editor.focus();

      editor.textContent =
        data.transferredChat;

      editor.dispatchEvent(
        new InputEvent("input", {
          bubbles: true
        })
      );

      console.log("Inserted");

      clearInterval(interval);

    }, 1000);

  }
);