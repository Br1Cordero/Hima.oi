
function Music(){
    let audio = new Audio("./audio.mp3");
    audio.play();

    const confetti = new JSConfetti();

    confetti.addConfetti();
}