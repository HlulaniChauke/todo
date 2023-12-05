export function generateHomePageContent(){
    const homeMsg = document.createElement("h1");
    const homeContent = document.getElementById("content");
    homeContent.innerHTML = "";
    homeContent.style.backgroundImage = "";
    
    homeContent.style.backgroundImage = 'url("./images/andraz-lazic-iy_MT2ifklc-unsplash.jpg")';
    homeContent.style.backgroundSize = 'cover';
    homeContent.style.backgroundAttachment = 'fixed';
    
    homeMsg.innerHTML = "The most awesome sushi ever!";
    
    homeContent.appendChild(homeMsg);
};
