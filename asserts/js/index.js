// const music= document.querySelector("audio");
// const play = document.getElementById("play");
// let isplaying = false;

// const playmusic = () =>{
//     isplaying=true;
//     music.play();
//  document.getElementById("play").classList.replace("fa-play", "fa-pause");
// }
// const pausemusic = () =>{
//     isplaying=false;
//     music.pause();
//  document.getElementById("play").classList.replace( "fa-pause","fa-play");
// }

// function playing(){


//     if(isplaying){
//         pausemusic();
//     }
//     else
//     {
//         playmusic();
//     }
// }


const music = document.querySelector("audio");
const play = document.getElementById("play");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const image = document.getElementById("img");
// const next = document.getElementById("forward");
// const previous = document.getElementById("back");

function playing() {
    if (music.paused) {
        music.play();
        document.getElementById("play").classList.replace("fa-play", "fa-pause");
        document.getElementById("img").classList.add("animate");
    } else {
        music.pause();
        document.getElementById("play").classList.replace("fa-pause", "fa-play");
        document.getElementById("img").classList.remove("animate")

    }
}

const songs = [
    {
        name: "music1",
        title: "Lotu lane1",
        artist: "Autom1",

    },
    {
        name: "music2",
        title: "Lotu lane2",
        artist: "Autom2",

    },
    {
        name: "music3",
        title: "Lotu lane3",
        artist: "Autom3",

    },
];


const songload = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = `asserts/musics/${songs.name}.mp3`;
    image.src = `asserts/images/${songs.name}.jpg`;
}


songindex = 0;
function nextsong() {
   
    songindex = (songindex + 1) % songs.length;
    songload(songs[songindex]);
    music.play();
    document.getElementById("play").classList.replace("fa-play", "fa-pause");
    document.getElementById("img").classList.add("animate");
}
function previoussong() {
   
    songindex = (songindex - 1 + songs.length)% songs.length;
    songload(songs[songindex]);
    music.play();
    document.getElementById("play").classList.replace("fa-play", "fa-pause");
    document.getElementById("img").classList.add("animate");

}














// document.getElementById("forward").addEventListener('click', nextsong);
// previous.addEventListener('click', previoussong);