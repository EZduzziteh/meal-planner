document.addEventListener("DOMContentLoaded", ()=>{
    let main = document.getElementById("main_content");

    let contentCard = document.createElement("div");
    contentCard.classList.add("content-card");

    let contentTitle = document.createElement("h1");
    contentTitle.innerText = "Recipes";
    contentCard.appendChild(contentTitle);

    let contentText = document.createElement("p");
    contentText.innerText = "This is where you can browse and select reipes"
    contentCard.appendChild(contentText);

    main.appendChild(contentCard);
})