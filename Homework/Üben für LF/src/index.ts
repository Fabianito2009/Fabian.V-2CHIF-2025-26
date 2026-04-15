import { Hund, Katze } from './tier';

const result = document.getElementById("ausgabe") as HTMLParagraphElement;
const hundBtn = document.getElementById("hundBtn") as HTMLButtonElement;
const katzeBtn = document.getElementById("katzeBtn") as HTMLButtonElement;
const resetBtn = document.getElementById("resetBtn") as HTMLButtonElement;

// Hund-Klick
hundBtn.addEventListener("click", () => {
    const sound = new Hund();
    result.innerHTML += sound.sprich() + '<br>'
});

// Katze-Klick
katzeBtn.addEventListener("click", () => {
    const sound = new Katze();
    result.innerHTML += sound.sprich() + "<br>";
});

// Reset-Klick
resetBtn.addEventListener("click", () => {
    result.innerHTML = "";
});
