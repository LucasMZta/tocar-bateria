document.body.addEventListener('keyup',(event)=>{
    playSound(event.code.toLowerCase());
});
document.querySelector('.composer button').addEventListener('click',()=>{
    let song = document.querySelector('#input').value;

    if(song !== '') {
        let songArray = song.split('');
        playComposition(songArray);
    }

});

function playSound(sound) {
    let audioEl = document.querySelector(`#s_${sound}`);
    let keyEl = document.querySelector(`div[data-key="${sound}"]`);

    if(audioEl) { //caso o audio exista
        audioEl.currentTime = 0;
        audioEl.play();
    }
    if(keyEl) {
        keyEl.classList.add('active');

        setTimeout(()=>{
            keyEl.classList.remove('active');
        }, 500);
    }
}
function playComposition(songArray) {
    let wait = 0;

    songArray.forEach((song)=>{
        setTimeout(()=>{
            playSound(`key${song}`);
        }, wait);
        wait += 300;
    });
}