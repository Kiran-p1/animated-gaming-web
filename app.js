const nxtButton = document.querySelector('.nxt-btn');
const heroVideo = document.querySelector('.hero-video');

const movieList = [
  'videos/hero-1 (1).mp4',
  'videos/hero-2.mp4',
  'videos/hero-3.mp4',
  'videos/hero-4.mp4'
];

let index = 0;

nxtButton.addEventListener('click', function () {
  index +=1;
  heroVideo.src = movieList[index];
  if(index ===3){
    index = -1;
  }

});
