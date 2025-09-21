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
            Hi! I’m Isidore Mones, a Mechanical & Aerospace Engineering double major at UC Davis. I am extremely passionate about control theory for aerospace applications, especially GNC for rockets, spacecrafts, and autonomous vehicles. I love problem solving and I am excellent at independent research and implementation. I am hardworking and resilient in the face of challenges and failures.
          </p>
          <div className="linksDiv">
              <span className="linkPair">
                <a className="linkObject" href={`${process.env.PUBLIC_URL}/Resume.pdf`} target="_blank" rel="noopener noreferrer">Resume (PDF)</a>
                <span className="sep" aria-hidden="true"></span>
                <a className="linkObject" href="https://github.com/izzymones/fits-file-processing" target="_blank" rel="noopener noreferrer">TVC One Page</a>
              </span>
              <a className="linkObject" href="https://github.com/izzymones/fits-file-processing" target="_blank" rel="noopener noreferrer">Comparison of Direct Methods for NMPC Applied to a Thrust Vector Drone</a>
            </div>
          <div className='cowDiv'>
            <img className="CowImg" src={CowImg} alt="cow" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeTab;