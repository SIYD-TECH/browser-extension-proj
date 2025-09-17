const toggleBtn = document.querySelectorAll(".toggBtn");
const toggBg = document.querySelectorAll(".toggbg");
const navBar = document.querySelectorAll(".nav");
const blocks = document.querySelectorAll(".blocks");
const container = document.querySelectorAll(".contain");
let blocksCount = document.querySelector('.extensions-count');


let browserHtml = "";

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



// fetch('data.json')
//   .then(res => res.json())
//   .then(blocks => {
//     blocks.forEach(block =>{
//       // console.log(block.name)
//       browserHtml += `
//          <div class="flex flex-col bg-white p-5 rounded-[20px] shadow-md blocks active dark:bg-gray-800">
//           <div class="flex gap-5">
//             <div class="w-1/2">
//             <img src="${block.logo}">
//             </div>
//             <div>
//               <h1 class="text-[1.3rem] font-bold dark:text-white">${block.name}</h1>
//               <p class="text-gray-500 text-[0.95rem] dark:text-white">${block.description}</p>
//             </div>
//           </div>
//           <div class=" flex mt-5 items-center justify-between">
//             <button class="border border-gray-400 py-1 px-3 rounded-full dark:text-white">Remove</button>
//             <label class="relative inline-flex items-center cursor-pointer contain">
//                 <!-- <input type="checkbox" class="sr-only-peer"> -->
//                 <div class="w-11 h-6 bg-red-500 bg-gray-300 rounded-full transition-colors toggbg">
//                 </div>
//                 <div class="w-4 h-4 rounded-full bg-white absolute top-1 right-1 transition-transform toggBtn">
//                 </div>
//             </label>
//           </div>
//       </div>
//       `
//      console.log(browserHtml);
//     })
//     document.getElementById('display').innerHTML =  browserHtml;
//   })
//   .catch(error => {
//     console.log(`Error ${error}`)
//   });

