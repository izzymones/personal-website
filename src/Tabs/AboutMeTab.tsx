import { useEffect, useRef } from 'react';
import './AboutMeTab.css';
import BunnyImg from '../images/IzzyAvatarV5.jpeg';
import CowImg from '../images/tinyCow.png';
import StripesImg from '../images/stripes.png';


function AboutMeTab() {
  const spaceShipEl = useRef<HTMLImageElement>(null);
  const shadowEl = useRef<HTMLImageElement>(null);
  const fireEl = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // const spaceShip = spaceShipEl.current;
    // const shadow = shadowEl.current;
    // const fire = fireEl.current;
    // if (!spaceShip || !shadow || !fire) return;

    // spaceShip.classList.add('shaking');
    // shadow.classList.add('shaking');

    function handleScroll() {
      if (window.scrollY > 0) {
        // spaceShip!.classList.remove('shaking');
        // shadow!.classList.remove('shaking');
        // shadow!.classList.add('shadowTakeOff');
        // spaceShip!.classList.add('takeOff');
        // fire!.classList.add('fireTakeOff');
      } else {
        // shadow!.classList.remove('shadowTakeOff');
        // shadow!.classList.add('shaking');
        // spaceShip!.classList.remove('takeOff');
        // fire!.classList.remove('fireTakeOff');
        // spaceShip!.classList.add('shaking');
      }
    }

    // window.addEventListener('scroll', handleScroll, { passive: true });
    // handleScroll();

    // return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="aboutMeTab">
      <div className="row">
        <div className="bunnyPicDiv">
          <img className="BunnyImg" src={BunnyImg} alt="bunny" />

        </div>
        <div className="textHolder">
          <div className='stripesDiv'>
            <img className="stripes" src={StripesImg} alt="stripes" />
          </div>
          <h1 className='header' >About Me</h1>
          <p className='body'>
          Hi! My name is Isidore Mones. I’m a Mechanical and Aerospace Engineering double major at UC Davis, fascinated by making complex systems balance, fly, and operate autonomously. From building a thrust-vector-controlled drone with nonlinear MPC to tackling tough dynamics and control problems, I enjoy solving challenges with persistence, creativity, and independence. I’m especially excited about guidance, navigation, and control for rockets, spacecraft, and autonomous vehicles.          </p>
          <div className='cowDiv'>
            <img className="CowImg" src={CowImg} alt="cow" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeTab;