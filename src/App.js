import './App.css';
import QueenImg from './Images/queen.png'
import useWebAnimations from "@wellyshen/use-web-animations";
import Grass from './Images/grass.png'
import Tree from './Images/tree3.png'
import Fire from './Images/fire.gif'
import OldTree from './Images/oldtree1.png'
import Pole from './Images/pole1.png'
import Chess1 from './Images/chess1.png'
import Chess2 from './Images/chess2.png'

function App() {

  const Queen = useWebAnimations({
    keyframes:
      [
        { transform: 'translateY(0)' },
        { transform: 'translateY(-100%)' }
      ],
    animationOptions: {
      duration: 600,
      iterations: Infinity,
      direction: "reverse",
      easing: 'steps(7, end)',
    },
    autoPlay: true
  });

  const keyFrameShortCut =
    [
      { transform: 'translateX(100%)' },
      { transform: 'translateX(-100%)' }
    ]
    
  const PoleAnimation = useWebAnimations({
    keyframes: keyFrameShortCut,
    animationOptions: {
      duration: 50000,
      iterations: Infinity,
    },
    autoPlay: true,


  });
  const TreeAnimation = useWebAnimations({
    keyframes:keyFrameShortCut,
    animationOptions: {
      duration: 40000,
      iterations: Infinity,
    },
    autoPlay: true,


  });
  const FireAnimation = useWebAnimations({
    keyframes:keyFrameShortCut,
    animationOptions: {
      duration: 35000,
      iterations: Infinity,

    },
    autoPlay: true,


  });
  const OldTreeAnimation = useWebAnimations({
    keyframes:keyFrameShortCut,
    animationOptions: {
      duration: 25000,
      iterations: Infinity,
    },
    autoPlay: true,


  });


  const StartAnimation = () => {
    if (PoleAnimation.playState === 'paused') {
      PoleAnimation.getAnimation().play()
      TreeAnimation.getAnimation().play()
      FireAnimation.getAnimation().play()
      OldTreeAnimation.getAnimation().play()
      Queen.getAnimation().play()
    }
    else if (PoleAnimation.playState === 'running') {
      PoleAnimation.getAnimation().updatePlaybackRate(PoleAnimation.getAnimation().playbackRate * 1.1)
      FireAnimation.getAnimation().updatePlaybackRate(FireAnimation.getAnimation().playbackRate * 1.1)
      TreeAnimation.getAnimation().updatePlaybackRate(TreeAnimation.getAnimation().playbackRate * 1.1)
      OldTreeAnimation.getAnimation().updatePlaybackRate(OldTreeAnimation.getAnimation().playbackRate * 1.1)
      Queen.getAnimation().updatePlaybackRate(Queen.getAnimation().playbackRate * 1.1)

    }
  }
  setInterval(() => {
    if (PoleAnimation.playState === 'running') {
      if (PoleAnimation.getAnimation().playbackRate > 0.5) {
        PoleAnimation.getAnimation().updatePlaybackRate(PoleAnimation.getAnimation().playbackRate * 0.9)
        FireAnimation.getAnimation().updatePlaybackRate(FireAnimation.getAnimation().playbackRate * 0.9)
        TreeAnimation.getAnimation().updatePlaybackRate(TreeAnimation.getAnimation().playbackRate * 0.9)
        OldTreeAnimation.getAnimation().updatePlaybackRate(OldTreeAnimation.getAnimation().playbackRate * 0.9)
        Queen.getAnimation().updatePlaybackRate(Queen.getAnimation().playbackRate * 0.9)
      }
    }
  }, 3000);



  return (
    <div onClick={StartAnimation} className='main-div'>
      <div className='head-div'>
        <div style={{ position: 'relative' }}>
          Tap on screen to speed up

        </div>
      </div>
      <div className='sky-div'>
      </div>
      <div className='grass-div'>

        <img id='grass1' width='25%' src={Grass} alt='animation' />
        <img id='grass2' width='25%' src={Grass} alt='animation' />
        <img id='grass3' width='25%' src={Grass} alt='animation' />
        <img width='25%' src={Grass} alt='animation' />
      </div>


      <div ref={PoleAnimation.ref} className='animation'>
        <img className='pole' src={Pole} alt='animation' />
        <img className='pole2' src={Pole} alt='animation' />
      </div>
      <div ref={TreeAnimation.ref} className='animation'>
        <img className='tree' src={Tree} alt='animation' />
        <img className='chess1' src={Chess1} alt='animation' />
      </div>
      <div ref={FireAnimation.ref} className='animation'>
        <img className='fire' src={Fire} alt='animation' />
        <img className='chess2' src={Chess2} alt='animation' />
      </div>
      <div className="wrapper">
        <div id="red-queen_and_alice">
          <img ref={Queen.ref} id="red-queen_and_alice_sprite"
            src={QueenImg}
            alt="Alice and the Red Queen running to stay in place." />
        </div>
      </div>
      <div ref={OldTreeAnimation.ref} className='animation'>
        <img className='old-tree' src={OldTree} alt='animation' />
      </div>

    </div>
  );
}

export default App;
