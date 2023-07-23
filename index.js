const starsEl = document.querySelectorAll(".fa-star");
const emojisEl = document.querySelectorAll(".far");
const colorsarray = ["#d62828", "#ff5400","#8338ec","#70d6ff","#29bf12"];

updateRating(0);

starsEl.forEach((starEl,index) => {
  starEl.addEventListener("click", ()=> {
    // console.log("clicked",index);
    updateRating(index);
  });
});

function updateRating(index){
  starsEl.forEach((starEl, idx) =>{
    if (idx < index + 1){
      starEl.classList.add('active');
    }else{
      starEl.classList.remove('active');
    }
  });

  emojisEl.forEach((emojiEl) => {
    emojiEl.style.transform = `translateX(-${index * 50}px)`;
    emojiEl.style.color = colorsarray[index];
  });

  
}