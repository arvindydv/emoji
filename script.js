 
 const emojeeContainer = document.querySelector(".emojee-container");

 const searchEmoji = ()=>{
   const inputValue = document.getElementById("search").value;
  //  console.log(inputValue);
  displayData(inputValue);
  return false;
 }


  const displayData = (seacrhQuery="") =>{

    const filteredData = emojiList.filter((e)=>{
       
      if(e.description.indexOf(seacrhQuery) !== -1){
        return true;
      }

      if(e.tags.some(e=>e.startsWith(seacrhQuery))){
        return true;
      }

      if(e.aliases.some(e=>e.startsWith(seacrhQuery))){
        return true;
      }

    })
    emojeeContainer.innerHTML = ""
    filteredData.forEach((items)=>{

      let emojiDiv = document.createElement("div");
      emojiDiv.setAttribute("class", "emoji");
  
      emojiDiv.innerHTML = `
      <h2> ${items.emoji} </h2>
       <p class="cat"> ${items.category } </p>
      <p class="des"> ${items.description } </p>
     
      `;
  
      emojeeContainer.appendChild(emojiDiv);
  })

}
 
document.getElementById('search').addEventListener("keyup", searchEmoji);

document.addEventListener('DOMContentLoaded',displayData());
    
 
   
    

