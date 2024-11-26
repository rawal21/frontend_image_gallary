let scrollContainer = document.querySelector(".gallery");
let backbtn = document.getElementById("backbtn");
let nextkbtn = document.getElementById("nextbtn");
  scrollContainer.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft+=evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
  })

  nextkbtn.addEventListener("click",(evt)=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft+=900;;
  })
  
  backbtn.addEventListener("click",(evt)=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft-=900;;
  })
  
