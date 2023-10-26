const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const chatbottoggler = document.querySelector(".chatbot-toggler");
const closeChatBtn = document.getElementById("close-chat-btn"); 

let userMessage;
const apiBox = document.querySelector("#apiId")
const apiInput = document.querySelector("#apiId input")
const apiButton = document.querySelector("#apiId button")


apiButton.addEventListener("click",()=>{
  apikey=apiInput.value;
  apiBox.style.display="none";
})
const createChatLi = (message, className) => {
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  let chatContent = className === "outgoing" ? `<p>${message}</p>` : ` <span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
  chatLi.innerHTML = chatContent;
  return chatLi;
};

const generateResponse = (incomingChatLi) => {
  const apiurl = "https://api.openai.com/v1/chat/completions";
  const messageElement = incomingChatLi.querySelector("p");
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apikey}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userMessage }]
    })
  };
  fetch(apiurl, requestOptions)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      messageElement.textContent = data.choices[0].message.content.trim();
    })
    .catch((error) => {
      messageElement.classList.add("error");
      messageElement.textContent = "Oops, something went wrong";
      console.log(error);
    })
    .finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
};

const handleChat = () => {
  userMessage = chatInput.value.trim();
  if (!userMessage) return;
  chatbox.appendChild(createChatLi(userMessage, "outgoing"));
  chatbox.scrollTo(0, chatbox.scrollHeight);
  console.log(userMessage);
  chatInput.value = "";
  setTimeout(() => {
    const incomingChatLi = createChatLi("Thinking ... Please Wait!", "incoming");
    chatbox.appendChild(incomingChatLi);
    chatbox.scrollTo(0, chatbox.scrollHeight);
    generateResponse(incomingChatLi);
  }, 600);
};

chatbottoggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
sendChatBtn.addEventListener("click", handleChat);

