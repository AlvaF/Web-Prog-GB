import { Howl, Howler } from 'howler';

let timerId,
    sound = new Howl({
        src: ['sound.mp3']
    });
sound.loop = false;
Howler.volume(0.5);

export function setTimer(time, el) {
    timerId = setInterval(function () {
        time--;
        el.value = time;
        if (time == 0) {
            clearInterval(timerId);
            sound.play();
        }
    }, 1000);
}
export function stopTimer() {
    clearInterval(timerId);
}



export function startTimer() {
    const seconds = document.getElementById('seconds')
    console.log(seconds)
    setTimer(seconds.value, seconds)
}