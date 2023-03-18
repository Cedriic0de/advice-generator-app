const shuffleAdvice = document.getElementById("btn-shuffle");
const adviceSpace = document.getElementById("advice");
const adviceID = document.getElementById("number");

shuffleAdvice.addEventListener('click', function generateAdvice(){
    shuffleAdvice.classList.add("btn-show-text");
    
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        adviceID.innerHTML = `${data.slip.id}`
        adviceSpace.innerHTML = `"${data.slip.advice}"`
    })
    .catch(error => {
        console.log("Request failed");
        adviceSpace.innerHTML = "An error occurred please try again later";
    });

});
setTimeout(function() {
    shuffleAdvice.classList.remove("btn-show-text");
}, 3000);