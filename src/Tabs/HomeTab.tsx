import { useEffect, useRef } from 'react';
import './HomeTab.css';

function HomeTab() {
  const spaceShipRef = useRef<HTMLImageElement>(null);
  const shadowRef = useRef<HTMLImageElement>(null);
  const fireRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const spaceShip = spaceShipRef.current;
    const shadow = shadowRef.current;
    const fire = fireRef.current;
    if (!spaceShip || !shadow || !fire) {
      return;
    }

    spaceShip.classList.add('shaking');

    function handleScroll() {
      if (spaceShip && shadow && fire && window.scrollY > 0) {
        spaceShip.classList.remove('shaking');
        shadow.classList.remove('shaking');
        shadow.classList.add('shadowTakeOff');
        spaceShip.classList.add('takeOff');
        fire.classList.add('fireTakeOff');
      } else if (spaceShip && shadow && fire && window.scrollY === 0) {
        shadow.classList.remove('shadowTakeOff');
        shadow.classList.add('shaking');
        spaceShip.classList.remove('takeOff');
        fire.classList.remove('fireTakeOff');
        spaceShip.classList.add('shaking');
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="homeTab">
      <img className="homeBackground" src="homeBackground.png
      " alt=""></img>
      <img className="homeBackground" src="earth.png" alt=""></img>
      <div className='shadowClipDiv'>
        <img ref={shadowRef}className="shadow" src="shadow.png" alt=""></img>
      </div>
      <img className="sun" src="sun.png" alt=""></img>
      <img className="moon" src="moon.png" alt=""></img>
      <img ref={fireRef} className="movingFire" src="fire.png" alt=""></img>
      <img ref={spaceShipRef} className="spaceShip" src="spaceShip.png" alt=""></img>
      <div className="borderUnderline">
        <div className="name">Isidore Mones.</div>
      </div>
      <div className="header">Engineering and Computer Science</div>
      <div className="homeBorderDiv">
        <img className="homeBorder" src="seafoamborder.png" alt=""></img>
      </div>
    </div>
  );
}

export default HomeTab;