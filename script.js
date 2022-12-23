const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
    } else{
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

const countDate = new Date("Jan 10 2022 14:30:55").getTime();

var x = setInterval(function(){
    let now = new Date().getTime();

    let distance = countDate - now;

    var d = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.floor((distance % (1000 * 60 * 60)) / 1000);

    document.getElementById('timer').innerHTML  = d + "d" + hrs + "h" + min + 
    "m" + sec + "s";

    if(distance < 0){
        clearInterval(x);
        document.getElementById('timer').innerHTML = "Time's Up"
    }

})


var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        
    }
}
