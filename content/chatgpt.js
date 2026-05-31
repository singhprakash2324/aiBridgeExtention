function getConversation() {

    const messages = [];

    document.querySelectorAll("[data-message-author-role]")
    .forEach(msg => {

        messages.push({
            role: msg.getAttribute(
                "data-message-author-role"
            ),
            text: msg.innerText
        });

    });

    return messages;
}

chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {

        if (request.type === "GET_CHAT") {

            sendResponse(
                getConversation()
            );
        }

    }
);