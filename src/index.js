import './index.css';
import lottie from 'lottie-web';
import animationData from './animation.json';
import './js/hamburgerMenu';


const heroAnimation = lottie.loadAnimation({
  container: document.getElementById('anim'),
  renderer: 'svg',
  animationData
});

heroAnimation.goToAndPlay(0, true);

{

  const init = () => {

  };



  init();
}
