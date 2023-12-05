export function generateContactContent() {
    const contactMsg = document.createElement("h1");
    const contactContent = document.getElementById("content");
    contactContent.innerHTML = "";
    contactContent.style.backgroundImage = "";
    contactContent.style.backgroundImage = 'url("./images/pexels-rajesh-tp-2098143.jpg")';
    contactContent.style.backgroundSize = 'cover';
    contactContent.style.color = 'white';

    contactMsg.innerHTML = "Do you really need to contact us?";
    
    contactContent.appendChild(contactMsg);

};
