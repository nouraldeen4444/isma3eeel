
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const togg = document.querySelector(".togg");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
const arLeft = document.querySelector(".ar-left");
const arRight = document.querySelector(".ar-right");
const slider = document.querySelectorAll(".card-format");




// toggle
navToggle.addEventListener('click', function(){
    
    links.classList.toggle("show-links");
    togg.classList.toggle("togg");
});




// countDown
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureDate = new Date(tempYear,tempMonth,tempDay +12,10,30,0);

const futureTime = futureDate.getTime();
// console.log(futureTime);

    function getRemainingTime() {
    const today = new Date().getTime();
    const t = futureTime - today;
    
  
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;
  
    let days = t / oneDay;
    console.log(days);
    
    days = Math.floor(days);
    
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);
  
  
    const values = [days ,hours ,minutes ,seconds];
  
    function format(item) {
      if (item < 10) {
        return (item = `0${item}`)
      }
      return item;
    }
  
  
    items.forEach(function(item, index) {
      item.innerHTML = format(values[index]);
    });
  
    if(t<0){
      clearInterval(countdown);
      deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`
    }
  }
  let countdown = setInterval(getRemainingTime, 1000);
  getRemainingTime();


  // slider

  // let current = 3 
  // function setDefult(){
  //   slider[current].style.display = "flex";
  // }
  // setDefult();

  // arRight.onclick = function(){
  //   slider[current].style.display = "none";
  //   current = current + 1 ;
  //   slider[current].style.display = "flex";
  // }
  // arLeft.onclick = function(){
  //   slider[current].style.display = "none";
  //   current = current - 1 ;
  //   slider[current].style.display = "flex";
  // }











  // $('.slick_slide').slick({
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  // });



