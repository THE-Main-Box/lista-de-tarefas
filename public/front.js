const closeMessage = document.querySelector("#close-message");
const message = document.querySelector(".message");

setTimeout(()=>{
    message.style.display = "none"
},7000)

closeMessage.addEventListener("click", () => {
    message.style.display = "none"
});
