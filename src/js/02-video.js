import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player('vimeo-player');

player.on('timeupdate', throttle(function(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000));

const currentTime = localStorage.getItem("videoplayer-current-time");
if (currentTime !== null) {
  player.setCurrentTime(JSON.parse(currentTime));
}