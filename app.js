const shuffleAdvice = document.getElementById("btn-shuffle");
const adviceSpace = document.getElementById("advice");
const adviceID = document.getElementById("number");

shuffleAdvice.addEventListener('click', generateAdvice)

function generateAdvice(){
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        adviceID.innerHTML = `${data.slip.id}`
        adviceSpace.innerHTML = `"${data.slip.advice}"`
    })
}