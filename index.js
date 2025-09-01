const toggleBtn = document.querySelectorAll(".toggBtn");
const toggBg = document.querySelectorAll(".toggbg");
const navBar = document.querySelectorAll(".nav");
const blocks = document.querySelectorAll(".blocks");
const container = document.querySelectorAll(".contain");
let blocksCount = document.querySelector('.extensions-count');

let currentFilter = "all";

for(let i = 0 ; i < container.length ; i++){
    container[i].addEventListener("click", function () {
    toggleBtn[i].classList.toggle("-translate-x-5");
    toggBg[i].classList.toggle("bg-red-500");
    blocks[i].classList.toggle("active")
    updateBlocks()
  });
};


function updateBlocks() {
     blocks.forEach(block => {
      const isActive = block.classList.contains("active");
    //   const isInactive = block.classList.contains("inactive");

      block.classList.add("hidden")
      
    if (currentFilter === "all") {
          block.classList.remove("hidden");
        } else if (currentFilter === "active" && isActive) {
          block.classList.remove("hidden");
        } else if (currentFilter === "inactive" && !isActive) {
          block.classList.remove("hidden");
        }
      });

      countBlocks()

}

updateBlocks()

for(let i = 0 ; i < navBar.length ; i++){
    navBar[i].addEventListener("click", function (){
      currentFilter = this.innerHTML.toLowerCase();
        updateBlocks();

      
       
        
        for(let j = 0 ; j < navBar.length ; j++){
            navBar[j].classList.remove("bg-red-800", "text-white","dark:bg-slate-700");
            navBar[j].classList.add("bg-white");
        };
        this.classList.add("text-white", "bg-red-800");
        this.classList.remove("bg-white");
      });
};

const darkMode = document.querySelector(".dark");
const html = document.documentElement
// console.log(darkMode.src.includes('icon-moon.svg'))

darkMode.addEventListener('click',() => {
  html.classList.toggle('dark')
  changeImage()
});

function changeImage(){
  if(darkMode.src.includes('icon-moon.svg')){
    darkMode.src='./assets/images/icon-sun.svg';
  }else{
    darkMode.src='./assets/images/icon-moon.svg';
  };
};

function countBlocks(){
  let numberOfBlocks = 0;
  blocks.forEach((block) =>{
    if(!block.classList.contains('hidden')){
      numberOfBlocks++;
    };
  });
  blocksCount.innerText = `${numberOfBlocks} extensions`;
  // console.log(blocksCount)
};



