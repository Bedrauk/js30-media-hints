
const tracks = [
    {
        audio: './assets/mp3/System Of A Down – BYOB.mp3',
        image: './assets/img/System-of-a-Down.jpeg',
        description: 'Первый сингл с альбома System of a Down - Mezmerize, посвящён войне в Ираке.',
    },
    {
        audio: './assets/mp3/nizkiz-povorachivajj.mp3',
        image: './assets/img/nizkiz.jpg',
        description: 'Chop Suey — одна из самых известных песен System of a Down.',
    },
    {
        audio: './assets/mp3/Creepy Nuts - Bling-Bang-Bang-Born.mp3',
        image: './assets/img/nuts.webp',
        description: 'Toxicity — заглавный трек альбома Toxicity, вышедшего в 2001 году.',
    }
];

const audioElement = document.getElementById('audio');
const artistPhoto = document.getElementById('artist-photo');
const trackDescription = document.getElementById('track-description');

document.querySelectorAll('.track').forEach(button => {
    button.addEventListener('click', () => {
        const trackIndex = button.getAttribute('data-index');
        const selectedTrack = tracks[trackIndex];

        audioElement.src = selectedTrack.audio;
        audioElement.play();

        artistPhoto.src = selectedTrack.image;
        
        trackDescription.textContent = selectedTrack.description;

    });
});
