import { useEffect, useRef } from 'react';
import './AboutMeTab.css';
import BunnyImg from '../images/IzzyAvatarV5.jpeg';
import CowImg from '../images/tinyCow.png';
import StripesImg from '../images/stripes.png';
import { motion, useScroll, useTransform } from 'framer-motion';
import TVCDroneCartoonImg from '../images/TVCDroneCartoon.png';




function AboutMeTab() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const botX = useTransform(scrollYProgress, [0, 1], ['-150%', '0%']);
  const botY = useTransform(scrollYProgress, [0, 1], ['300%', '-500%']);
  const botScale = useTransform(scrollYProgress, [0, 1], ['50%', '200%']);




  useEffect(() => {
  }, []);

  return (
    <div ref={containerRef}  className="aboutMeTab">
      <div className='droneClipDiv'>
      <motion.img
        className="TVCDroneCartoon"
        src={TVCDroneCartoonImg}
        alt=""
        style={{
          translateX: botX,
          translateY: botY,
          scale: botScale,
        }}
      />
      </div>
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
          <div className='cowDiv'>
            <img className="CowImg" src={CowImg} alt="cow" />
          </div>
          <div className="linksDiv">
              <span className="linkPair">
                <a className="linkObject" href={`${process.env.PUBLIC_URL}/Resume.pdf`} target="_blank" rel="noopener noreferrer">Resume (PDF)</a>
                <span className="sep" aria-hidden="true"></span>
                <a className="linkObject" href="https://github.com/izzymones" target="_blank" rel="noopener noreferrer">GitHub</a>
              </span>
              <a className="linkObject" href={`${process.env.PUBLIC_URL}/Technical_Report.pdf`} target="_blank" rel="noopener noreferrer">Comparison of Direct Methods for NMPC Applied to a Thrust Vector Drone (PDF)</a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeTab;