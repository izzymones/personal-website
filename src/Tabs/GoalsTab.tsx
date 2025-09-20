import './GoalsTab.css';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import spaceBackground from "../images/spaceBackground.png";
import Asteroids from "../images/Asteroids.png";
import Glow1 from "../images/Glow1.png";
import Glow2 from "../images/Glow2.png";
import Texture1 from "../images/Texture1.png";
import Texture2 from "../images/Texture2.png";
import Shading from "../images/Shading.png";
import leftBooster from "../images/leftBooster.png";
import rightBooster from "../images/rightBooster.png";
import fire from "../images/fire.png";
import fuelTank from "../images/fuelTank.png";
import rocket from "../images/rocket.png";
import { useMotionValueEvent } from 'framer-motion';


function GoalsTab() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const END = 0.6;
  const fast = useTransform(scrollYProgress, [0, END], [0, 1]);

  const pinkPlanet   = useTransform(fast, [0, 1], ['-20%', '30%']);
  const yellowPlanet = useTransform(fast, [0, 1], ['20%', '-30%']);

  const asteroidScale  = useTransform(fast, [0, 1], ['1.5', '1.8']);
  const asteroidRotate = useTransform(fast, [0, 1], ['-20deg', '-60deg']);

  const moveRocketX = useTransform(
    fast,
    [0.1, .2, .35, .44, .5, .6, .63, .68, .7, .75],
    ['-700%', '-400%', '-240%', '-80%', '-40%', '-40%', '-100%', '-135%', '-90%', '300%']
  );
  const moveRocketY = useTransform(
    fast,
    [0.1, .2, .35, .44, .5, .6, .63, .68, .7, .75],
    ['0%', '-20%', '0%', '60%', '130%', '180%', '240%', '300%', '360%', '500%']
  );
  const rotateRocket = useTransform(
    fast,
    [0.1, .2, .35, .44, .5, .6, .63, .68, .7, .75],
    ['60deg', '80deg', '90deg', '145deg', '180deg', '220deg', '215deg', '180deg', '135deg', '90deg']
  );
  const scaleRocket = useTransform(
    fast,
    [0.1, .2, .35, .44, .55, .6, .63, .68, .7, .75],
    ['1.5', '1.7', '1.75', '1.8', '1.85', '1.9', '1.95', '2.0', '2.05', '2.1']
  );

  const moveLeftBoosterX = useTransform(fast, [0.1, .2, .35, 1], ['-700%', '-400%', '-240%', '300%']);
  const moveLeftBoosterY = useTransform(fast, [0.1, .2, .35, 1], ['0%', '-20%', '0%', '200%']);
  const rotateLeftBooster = useTransform(fast, [0.1, .2, .35, 1], ['60deg', '80deg', '90deg', '270deg']);
  const scaleLeftBooster = useTransform(fast, [0.1, .2, .35, 1], ['1.5', '1.7', '1.75', '0.5']);

  const moveRightBoosterX = useTransform(fast, [0.1, .2, .35, 1], ['-700%', '-400%', '-240%', '100%']);
  const moveRightBoosterY = useTransform(fast, [0.1, .2, .35, 1], ['0%', '-20%', '0%', '500%']);
  const rotateRightBooster = useTransform(fast, [0.1, .2, .35, 1], ['60deg', '80deg', '90deg', '-540deg']);
  const scaleRightBooster = useTransform(fast, [0.1, .2, .35, 1], ['1.5', '1.7', '1.75', '0.9']);

  const moveFuelTankX = useTransform(fast, [0.1, .2, .35, .44, .55, 1], ['-700%', '-400%', '-240%', '-80%', '-40%', '300%']);
  const moveFuelTankY = useTransform(fast, [0.1, .2, .35, .44, .55, 1], ['0%', '-20%', '0%', '60%', '130%', '500%']);
  const rotateFuelTank = useTransform(fast, [0.1, .2, .35, .44, .55, 1], ['60deg', '80deg', '90deg', '145deg', '180deg', '90deg']);
  const scaleFuelTank = useTransform(fast, [0.1, .2, .35, .44, .55, 1], ['1.5', '1.7', '1.75', '1.8', '1.85', '1']);

  return (
    <div ref={containerRef} className="goalsTab">
      <div className='spaceHolder'>
        <img className="spaceBackground" src={spaceBackground} alt="" />
        <div className='OutroDiv'>
          <div className='outro'>
            <div className='thanksDiv'>
              <div className='outroHeader'>Thank You!</div>
              <div className='outroBody'>Your interest in my website is greatly appreciated. <br></br><br></br>I'm looking for Summer 26' Internships, so don't hesitate to get in touch.</div>
            </div>
            <div className='linksDiv'>
              <a href="https://izzymones.github.io/blog-kit/" target="_blank" rel="noopener noreferrer"> Email </a>
              <a href="https://github.com/izzymones/fits-file-processing" target="_blank" rel="noopener noreferrer">Github</a>
              <a href="https://github.com/izzymones/fits-file-processing" target="_blank" rel="noopener noreferrer">Resume</a>
              <a href="https://github.com/izzymones/fits-file-processing" target="_blank" rel="noopener noreferrer">TVC_One_Page</a>
              <a href="https://github.com/izzymones/fits-file-processing" target="_blank" rel="noopener noreferrer">Collocation_Methods_Paper</a>
              <a href="https://github.com/izzymones/fits-file-processing" target="_blank" rel="noopener noreferrer">Music App</a>
              <a href="https://github.com/izzymones/fits-file-processing" target="_blank" rel="noopener noreferrer">JWST Website</a>

            </div>
          </div>
        </div>
      </div>
      <div className='asteroidsClipDiv'>
        <motion.img
          className="asteroids"
          src={Asteroids}
          alt=""
          style={{ scale: asteroidScale, rotate: asteroidRotate }}
        />
      </div>

      <div className="goalsFlex">
        <div className="planetDiv">
          <div className='pinkShadingHolder'>
            <img className='pinkGlow' src={Glow1} alt="" />
          </div>
          <div className='yellowShadingHolder'>
            <img className='yellowGlow' src={Glow2} alt="" />
          </div>
          <div className='pinkClipDiv'>
            <motion.img
              className="pinkPlanet"
              src={Texture1}
              alt=""
              style={{ translateX: pinkPlanet }}
            />
          </div>
          <div className='yellowClipDiv'>
            <motion.img
              className="yellowPlanet"
              src={Texture2}
              alt=""
              style={{ translateX: yellowPlanet }}
            />
          </div>
          <div className='pinkShadingHolder'>
            <img className='pinkShading' src={Shading} alt="" />
          </div>
          <div className='yellowShadingHolder'>
            <img className='yellowShading' src={Shading} alt="" />
          </div>
        </div>
      </div>

      <div className="spaceShipClipDiv">
        <motion.img
          className="leftBooster"
          src={leftBooster}
          alt=""
          style={{ translateX: moveLeftBoosterX, translateY: moveLeftBoosterY, rotate: rotateLeftBooster, scale: scaleLeftBooster }}
        />
        <motion.img
          className="rightBooster"
          src={rightBooster}
          alt=""
          style={{ translateX: moveRightBoosterX, translateY: moveRightBoosterY, rotate: rotateRightBooster, scale: scaleRightBooster }}
        />
        <motion.img
          className="fire"
          src={fire}
          alt=""
          style={{ translateX: moveRocketX, translateY: moveRocketY, rotate: rotateRocket, scale: scaleRocket }}
        />
        <motion.img
          className="fuelTank"
          src={fuelTank}
          alt=""
          style={{ translateX: moveFuelTankX, translateY: moveFuelTankY, rotate: rotateFuelTank, scale: scaleFuelTank }}
        />
        <motion.img
          className="spaceShip2"
          src={rocket}
          alt=""
          style={{ translateX: moveRocketX, translateY: moveRocketY, rotate: rotateRocket, scale: scaleRocket }}
        />
      </div>
    </div>
  );
}

export default GoalsTab;