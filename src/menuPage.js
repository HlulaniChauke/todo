export function generateMenuContent() {
    const menuDiv = document.getElementById("content");
    const menu = document.createElement("div");
    menu.classList.add("menu");

    menuDiv.innerHTML = "";
    menuDiv.style.backgroundImage = "";

    const menuItem1 = document.createElement("div");
    const menuItem2 = document.createElement("div");
    const menuItem3 = document.createElement("div");
    const menuItem4 = document.createElement("div");
    const menuItem5 = document.createElement("div");
    const menuItem6 = document.createElement("div");

    const imgItem1 = document.createElement("img");
    const imgItem2 = document.createElement("img");
    const imgItem3 = document.createElement("img");
    const imgItem4 = document.createElement("img");
    const imgItem5 = document.createElement("img");
    const imgItem6 = document.createElement("img");

    imgItem1.src = "./images/pexels-cup-of-couple-8472641.jpg";
    imgItem2.src = "./images/pexels-horizon-content-3763816.jpg";
    imgItem3.src = "./images/pexels-lara-wehbe-10760635.jpg";
    imgItem4.src = "./images/pexels-pixabay-248444.jpg";
    imgItem5.src = "./images/pexels-pixabay-357756.jpg";
    imgItem6.src = "./images/pexels-rajesh-tp-2098085.jpg";


    const item1 = document.createElement("h3");
    const item2 = document.createElement("h3");
    const item3 = document.createElement("h3");
    const item4 = document.createElement("h3");
    const item5 = document.createElement("h3");
    const item6 = document.createElement("h3");

    item1.textContent ="A picture speaks a thousand words";
    item2.textContent ="A picture speaks a thousand words";
    item3.textContent ="A picture speaks a thousand words";
    item4.textContent ="A picture speaks a thousand words";
    item5.textContent ="A picture speaks a thousand words";
    item6.textContent ="A picture speaks a thousand words";

    menuItem1.appendChild(imgItem1);
    menuItem1.appendChild(item1);

    menuItem2.appendChild(imgItem2);
    menuItem2.appendChild(item2);

    menuItem3.appendChild(imgItem3);
    menuItem3.appendChild(item3);

    menuItem4.appendChild(imgItem4);
    menuItem4.appendChild(item4);

    menuItem5.appendChild(imgItem5);
    menuItem5.appendChild(item5);

    menuItem6.appendChild(imgItem6);
    menuItem6.appendChild(item6);

    menu.appendChild(menuItem1);
    menu.appendChild(menuItem2);
    menu.appendChild(menuItem3);
    menu.appendChild(menuItem4);
    menu.appendChild(menuItem5);
    menu.appendChild(menuItem6);

    menuDiv.appendChild(menu);
};