var audio;
var delay = 15;
var para_delay = 1000;
var speed = 25;
var type_music = "typing.mp3";
var enter_sound = "enter.mp3";
var pop_sound = "pop.mp3";

/* content */
passage1_term = "[abhinand@arch]$ cat message | typewriter"
passage1 = "Welcome back, Mr. Pinata"

passage2 = "We are glad that you were able to come to terms with our agreement. Being such a skilled individual, we knew that you would see sense the behind our bargain.";

passage3 = "Oh, do not worry. Your family is safe in our hands. As soon as you complete your task, they will be released and you shall receive your compensation. Although we may be considered shady by many, we value our pride and honour. So you may trust our word."

passage4 = "Now I will be giving you the details of your task. You must track down this person and bring him to us at the earliest... Alive."

let passage5_details = ["Abhinand D Manoj", "3rd year student at Cochin University of Science and Technology, Ernakulam", "Backend Systems, Web Development, Data Structures and System Administration."]
let passage5 = ["Your target is ", ". He is a ", ". He specializes in "]
let passage5_elem = ["passage-5-1-1", "passage-5-2-1", "passage-5-1-2", "passage-5-2-2", "passage-5-1-3", "passage-5-2-3"]

let passage6 = "He is known to be quick on his feet and has experience with code to solve various problems. This makes things difficult as he is less susceptible to faults."

let passage7 = "Be careful not to catch his attention while tracking him. We have provided some details regarding his skills and projects. The rest is all up to you. Good Luck"

let passage8 = "[abhinand@arch]$ ls"

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeWriter(passage, element) {
    let i = 0;
    while (i < passage.length) {
        element.innerHTML += passage.charAt(i);
        i++;
        await sleep(delay);
    }
}

function playsound_noloop(file) {
    sound = new Audio(file);
    sound.play();
}

function playsound(file) {
    audio = new Audio(file);
    audio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    audio.play();
}

function stopsound() {
    audio.pause();
    audio.currentTime = 0;
}

async function start() {
    document.getElementById("main-content").addEventListener("click", ()=>{});
    let passage_1_term_elem = document.getElementById("passage-1-1");
    let passage_1_elem = document.getElementById("passage-1-2");
    let passage_2_elem = document.getElementById("passage-2");
    let passage_3_elem = document.getElementById("passage-3");
    let passage_4_elem = document.getElementById("passage-4");
    let passage_6_elem = document.getElementById("passage-6");
    let passage_7_elem = document.getElementById("passage-7");
    let passage_8_term_elem = document.getElementById("passage-8");

    playsound(type_music);
    await typeWriter(passage1_term, passage_1_term_elem);
    stopsound();
    playsound_noloop(enter_sound);
    await sleep(para_delay);

    playsound(type_music);
    await typeWriter(passage1, passage_1_elem);
    stopsound();
    await sleep(para_delay);

    playsound(type_music);
    await typeWriter(passage2, passage_2_elem);
    stopsound();
    sleep(para_delay);

    playsound(type_music);
    await typeWriter(passage3, passage_3_elem);
    stopsound();
    await sleep(para_delay);

    playsound(type_music);
    await typeWriter(passage4, passage_4_elem);
    stopsound();
    await sleep(para_delay);

    let elem_index = 0;
    let passage_elem;
    for (let j=0; j<passage5_details.length; j++) {
        passage_5_elem = document.getElementById(passage5_elem[elem_index]);
        playsound(type_music);
        await typeWriter(passage5[j], passage_5_elem);
        elem_index++;
        passage_5_elem = document.getElementById(passage5_elem[elem_index]);
        await typeWriter(passage5_details[j], passage_5_elem);
        elem_index++;
        stopsound();
    }

    playsound(type_music);
    await typeWriter(passage6, passage_6_elem);
    stopsound();
    sleep(delay);
    await sleep(para_delay);

    playsound(type_music);
    await typeWriter(passage7, passage_7_elem);
    stopsound();
    sleep(para_delay);

    playsound(type_music);
    await typeWriter(passage8, passage_8_term_elem);
    stopsound();
    playsound_noloop(enter_sound);
    await sleep(para_delay);

    playsound_noloop(pop_sound);
    document.getElementById("projects").style.display = "block";
    document.getElementById("socials").style.display = "block";
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("click-to-continue").addEventListener("click", () => {
        document.getElementById("click-to-continue").style.display = "none";
        start();
    })
});
