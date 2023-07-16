
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let song_audio = document.getElementById("song");
let image = document.querySelector("img");
let song_name = document.getElementById("song_name");
let singer_name = document.getElementById("singer_name");


// PLAY AND PASUE BUTTON

$(".fa-play").click(function () {
    $("img").addClass("animation")
    $(".fa-play").hide();
    $(".fa-pause").show();
    $("#song").get(0).play();

    $(".fa-pause").click(function () {
        $("img").removeClass("animation")
        $(".fa-play").show();
        $(".fa-pause").hide();
        $("#song").get(0).pause();
    })
})
// ARRAY 
let songs = [{
    name: "kho gaye hum kaha",
    song_name: "Kho Gaye Hum Kaha",
    singer_name: "jasleen royal",
    image_name: "music_player_theme-1",
},
{
    name: "tu aake dekh le",
    song_name: "Tu Aake Dekh Le",
    singer_name: "King",
    image_name: "music_player_theme-2",

}];

//NEXT
const load_song = (songs) => {
    song_name.textContent = songs.song_name;
    singer_name.textContent = "Singer:" + songs.singer_name;
    song_audio.src = "./music/" + songs.name + ".mp3";
    image.src = "./images/" + songs.image_name + ".jpg"
}
let song_index = 0;
const next_song = () => {
    $("img").removeClass("animation")
    $(".fa-play").show();
    $(".fa-pause").hide();
    song_index = (song_index + 1) % songs.length;
    load_song(songs[song_index]);
}
const previous_song = () => {
    $("img").removeClass("animation")
    $(".fa-play").show();
    $(".fa-pause").hide();
    song_index = (song_index - 1 + songs.length) % songs.length;
    load_song(songs[song_index]);
}
next.addEventListener('click', next_song);
previous.addEventListener('click', previous_song);