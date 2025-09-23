import { useEffect, useState } from 'react';
import './HomeTab.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import homeBackground from "../images/homeBackground.png"
import shadow from "../images/shadow.png"
import fire from "../images/fire.png"
import spaceShip from "../images/spaceShip.png"
import CloudsImg from "../images/Clouds.png"



function HomeTab() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const { scrollYProgress } = useScroll();

  const rocketY = useTransform(scrollYProgress, [0, 1], ['5%', '-3000%']);
  const rocketY2 = useTransform(scrollYProgress, [0, 1], ['5%', '-4500%']);

  const shadowX = useTransform(scrollYProgress, [0, 1], ['0%', '-3000%']);
  const shadowY = useTransform(scrollYProgress, [0, 1], ['0%', '2000%']);



  return (
    <div className="homeTab">
      <img className="homeBackground" src={homeBackground} alt=""></img>
      <div className="cloudDiv">
        <img className="clouds" src={CloudsImg} alt="" />
      </div>
      <div className='shadowClipDiv'>
          <motion.img
          className="shadow"
          src={shadow}
          alt=""
          style={{
            translateX: shadowX,
            translateY: shadowY,
          }}
          animate={
            isAtTop ? {
              x: ['0%', '0.5%', '0%', '-0.5%', '0%'], 
              y: ['0%', '0.5%', '0%', '0.5%', '0%'],
              rotate: [0, 1, 0, -1, 0],
                }
              : { x: 0, y: 0, rotate: 0 }
          }
          transition={{
            duration: 0.1,
            repeat: isAtTop ? Infinity : 0,
            repeatType: 'loop',
            ease: 'linear',
          }}
        />
      </div>
      <motion.img
        className="movingFire"
        src={fire}
        alt=""
        style={{
          translateY: rocketY,
          visibility: isAtTop ? 'hidden': 'visible'
        }}
        transition={{
          duration: 0.1,
          repeat: isAtTop ? Infinity : 0,
          repeatType: 'loop',
          ease: 'linear',
        }}
      />
      <motion.img
        className="movingFire2"
        src={fire}
        alt=""
        style={{
          translateY: rocketY2,
          visibility: isAtTop ? 'hidden': 'visible'
        }}
        transition={{
          duration: 0.1,
          repeat: isAtTop ? Infinity : 0,
          repeatType: 'loop',
          ease: 'linear',
        }}
      />
      <motion.img
        className="movingFire3"
        src={fire}
        alt=""
        style={{
          translateY: rocketY2,
          visibility: isAtTop ? 'hidden': 'visible'
        }}
        transition={{
          duration: 0.1,
          repeat: isAtTop ? Infinity : 0,
          repeatType: 'loop',
          ease: 'linear',
        }}
      />
      <motion.img
        className="spaceShip"
        src={spaceShip}
        alt=""
        style={{
          translateY: rocketY,
        }}
        animate={
          isAtTop ? {
            x: ['0%', '0.5%', '0%', '-0.5%', '0%'], 
            y: ['0%', '0.5%', '0%', '0.5%', '0%'],
            rotate: [0, 1, 0, -1, 0],
              }
            : { x: 0, y: 0, rotate: 0 }
        }
        transition={{
          duration: 0.1,
          repeat: isAtTop ? Infinity : 0,
          repeatType: 'loop',
          ease: 'linear',
        }}
      />
      <div className="borderUnderline">
        <div className="name">
        <div className="borderUnderline">
        <div className="name">Isidore Mones</div>
      </div>
        </div>
      </div>
    </div>
  );
}

export default HomeTab;
