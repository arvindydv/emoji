 
 const emojeeContainer = document.querySelector(".emojee-container");

document.addEventListener("DOMContentLoaded", ()=>{

  emojiList.forEach((items)=>{

    let emojiDiv = document.createElement("div");
    emojiDiv.setAttribute("class", "emoji");

    emojiDiv.innerHTML = `
    <h2> ${items.emoji} </h2>
    <p class="cat"> ${items.aliases } </p>
    <p class="des"> ${items.description } </p>
   
    `;

    emojeeContainer.appendChild(emojiDiv);
    
  })
  
   
    


})