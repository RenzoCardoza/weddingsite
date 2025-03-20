// Set date to wedding day
const countDownDate = new Date("Apr 19, 2025 09:00:00").getTime();

const clockFunction = setInterval(function(){

    //get today time
    let now = new Date().getTime();

    // find difference between the times
    const distance = countDownDate - now;

    //time calculations
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // display calculations
    // document.getElementById("clock").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;


    // if the coun down is finished, write some text
    if (distance < 0) {
        clearInterval(clockFunction);
        document.getElementById("clock").innerHTML = "Ya nos Casamos!";
    }
}, 1000);

//container of the card
let card = document.querySelector('.flip-card');

//get button for changing cards
const presentbtn = document.getElementById("bankingBtn").addEventListener("click", () =>{
    card.classList.toggle("flipped");
})

//turn back the card
const returnBtn = document.querySelector("#okBtn").addEventListener("click", () =>{
    card.classList.toggle("flipped");
})