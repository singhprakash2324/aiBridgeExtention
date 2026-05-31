console.log("Gemini loaded");

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
          ".ql-editor.textarea"
        );

      if (!editor) {
        console.log("Editor not found");
        return;
      }

      console.log("Editor found");

      editor.focus();

      editor.innerHTML = "";

      const textNode = document.createTextNode(
        data.transferredChat
      );

      editor.appendChild(textNode);

      editor.dispatchEvent(
        new InputEvent("input", {
          bubbles: true,
          cancelable: true
        })
      );

      console.log("Inserted");

      clearInterval(interval);

    }, 1000);

  }
);