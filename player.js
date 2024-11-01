
const tracks = [
    {
        audio: './assets/mp3/System Of A Down – BYOB.mp3',
        image: './assets/img/System-of-a-Down.jpeg',
        description: 'Первый сингл с альбома System of a Down - Mezmerize, посвящён войне в Ираке.',
    },
    {
        audio: './assets/mp3/nizkiz-povorachivajj.mp3',
        image: './assets/img/nizkiz.jpg',
        description: 'Трек вышедшего в 2015 году альбома "Лирика", посвящен герою Беларуси',
    },
    {
        audio: './assets/mp3/Creepy Nuts - Bling-Bang-Bang-Born.mp3',
        image: './assets/img/nuts.webp',
        description: 'Сингл вышедший в Январе 2025 года. Ставшая популярной благадаря аниме Mashle: Magic and Muscles',
    }
];

const audioElement = document.getElementById('audio');
const artistPhoto = document.getElementById('artist-photo');
const trackDescription = document.getElementById('track-description');
const playPauseButton = document.getElementById('play-pause-btn');
const timeline = document.getElementById('timeline');
const volumeControl = document.getElementById('volume-control');

document.querySelectorAll('.track').forEach(button => {
    button.addEventListener('click', () => {
        const trackIndex = button.getAttribute('data-index');
        const selectedTrack = tracks[trackIndex];

        audioElement.src = selectedTrack.audio;
        audioElement.play();

        artistPhoto.src = selectedTrack.image;
        artistPhoto.style.display = 'block';
        
        trackDescription.textContent = selectedTrack.description;

    });
});
playPauseButton.addEventListener('click', () => {
    if (audioElement.paused) {
        audioElement.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audioElement.pause();
        playPauseButton.textContent = 'Play';
    }
});


audio.addEventListener('timeupdate', () => {
    const progress = (audioElement.currentTime / audioElement.duration) * 100;
    timeline.value = progress || 0; 
});


timeline.addEventListener('input', () => {
    const seekTime = (timeline.value / 100) * audioElement.duration;
    audioElement.currentTime = seekTime;
});

volumeControl.addEventListener('input', () => {
    audioElement.volume = volumeControl.value;
});