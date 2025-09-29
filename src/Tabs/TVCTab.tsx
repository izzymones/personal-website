import { useEffect, useRef, Suspense } from 'react';
import './TVCTab.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Center } from '@react-three/drei';
import * as THREE from 'three';
import SpiralImg from '../images/Spiral.png';
import LaptopImg from '../images/tinyLaptop.png';
import CircuitImg from '../images/uglyCircuit.jpeg';
import DroneImg from '../images/drone.jpeg';
import TestingImg from '../images/hopYwithStartingRot.gif';
import GimbalImg from '../images/gimbalTest.gif';
import GimbalTestImg from '../images/gimbal_test.gif';


function DroneModel() {
  const base = process.env.PUBLIC_URL || '';
  const { scene } = useGLTF(`${base}/Assembly_1.glb`);

  scene.rotation.set(-Math.PI / 2, 0, 0);

  scene.traverse((o) => {
    if ((o as any).isMesh) {
      const mesh = o as THREE.Mesh;
      const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      mats.forEach((m: any) => {
        if (m && m.color) {
          m.color.offsetHSL(+0.4, +0.1, +0.4);
        }
      });
    }
  });

  scene.traverse((o) => {
    if ((o as any).isMesh) {
      const mesh = o as THREE.Mesh;
      if (!mesh.userData.__edgesAdded) {
        const edgeGeo = new THREE.EdgesGeometry(mesh.geometry, 30); // show edges > 30° sharpness
        const edgeMat = new THREE.LineBasicMaterial({
          color: 'black',
          depthTest: true,
          depthWrite: false,
        });
        const edges = new THREE.LineSegments(edgeGeo, edgeMat);
        edges.renderOrder = 2;
        mesh.add(edges);
        mesh.userData.__edgesAdded = true;
      }
    }
  });

  return <primitive object={scene} />;
}

useGLTF.preload(`${process.env.PUBLIC_URL || ''}/Assembly_1.glb`);

export default function TVCTab() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const spiralRotate = useTransform(scrollYProgress, [0, 1], ['-90deg', '90deg']);


  useEffect(() => {
  }, []);

  return (
    <div ref={containerRef} className="TVCTab">
      <div className="ticker" role="marquee" aria-label="GUIDANCE NAVIGATION CONTROL">
        <div className="ticker__track">
          <span className="ticker__item">GUIDANCE // NAVIGATION // CONTROL //</span>
          <span className="ticker__item" aria-hidden="true">GUIDANCE // NAVIGATION // CONTROL //</span>
        </div>
      </div>

      <div className="title">Thrust-Vector-Controlled Rocket Prototype</div>
      <div className="subtitle">
        Practicing vertical takeoff and landing (VTOL) with thrust vector control and nonlinear model predictive control (NMPC).
      </div>

      <div className="row1">
        <div className="textBox">
          <div className="textBoxTitle">Project Outline</div>
          <div className="textBoxBody">
            This project is a thrust-vector-controlled rocket prototype built to practice vertical takeoff and vertical landing (VTVL)—the same core technique demonstrated by NASA’s Lunar Landing Research Vehicle (LLRV), McDonnell Douglas’s DC-X (Delta Clipper), and SpaceX’s Falcon 9 and Starship.           At a smaller scale, it combines dual brushless motors on a servo-driven gimbal, a Pixhawk flight controller, and a Raspberry Pi running advanced guidance and control. Stabilized with a nonlinear model predictive controller (NMPC), it recreates many of the challenges of controlling a real rocket.          </div>
        </div>
        <div className="NMPC">NMPC</div>
        <div className="number1">001</div>
        <div className="droneDiv" style={{ flex: '1 1 45%'}}>
          <Canvas
            camera={{ position: [0, 2, 3], fov: 45 }}
            shadows
            gl={{
              antialias: true,
              alpha: true,
              outputColorSpace: THREE.SRGBColorSpace,
              toneMapping: THREE.AgXToneMapping,
              toneMappingExposure: 0.95,
            }}
            style={{ background: 'transparent', width: '100%', height: 1000, display: 'block' }}
          >
            <ambientLight intensity={0.3} />
            <directionalLight
              position={[5, 8, 5]}
              intensity={1.5}
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-near={0.1}
              shadow-camera-far={20}
              shadow-camera-left={-10}
              shadow-camera-right={10}
              shadow-camera-top={10}
              shadow-camera-bottom={-10}
            />

            <Suspense fallback={null}>
              <Center>
                <DroneModel />
              </Center>
            </Suspense>

            <OrbitControls
              target={[0, 0, 0]}
              enablePan={false}
              enableZoom={false}
              minDistance={1}
              maxDistance={1}
            />
          </Canvas>
        </div>
      </div>
      <div className="spiral">
        <motion.img
          className="spiralImg"
          src={SpiralImg}
          alt=""
          style={{rotate: spiralRotate }}
        />
      </div>
      <div className="row2">
        <div className='laptopDiv'>
          <img className="laptopImg" src={LaptopImg} alt="laptop" />
        </div>
        <div className="textBox">
            <div className="textBoxTitle">Design Process</div>
            <div className="textBoxBody">
              I designed and built the vehicle from the ground up with an emphasis on a modular, lightweight, and inexpensive design. I made detailed CAD models for the gimbal and frame, and fit them together with models of the actuators and avionics. The thrust comes from two brushless motors on a servo-driven gimbal, that rotate opposite directions to counteract induced torques about the body axis. On the electronics side, I selected which components to use and sketched out my circuit plan for delivering power to the actuators and integrating a Pixhawk flight controller with a Raspberry Pi running ROS 2. The result is a hands-on platform that combines mechanical design, avionics, and software integration for affordable, adaptable development.            </div>
        </div>
        <div className="number2">002</div>
      </div>
      <div className="row3">
        <div className='circuitDiv'>
          <img className="circuitImg" src={CircuitImg} alt="circuit" />
        </div>
        <div className="textBox">
            <div className="textBoxTitle">Control Algorithm</div>
            <div className="textBoxBody">
              The rocket’s guidance and control software is built around a 6-DOF physics model of the system, implemented in Python with CasADi and do-mpc. I developed and tested three separate nonlinear model predictive control (NMPC) frameworks: one using orthogonal collocation via do-mpc, another with a custom Runge–Kutta multiple-shooting approach, and a third custom system based on Chebyshev pseudospectral collocation. Building multiple control systems allowed me to compare the accuracy, computational efficiency, and robustness of different numerical methods. The project gave me experience in optimal control and collocation methods, and let me experiment with advanced numerical techniques, all tracked and managed with GitHub and GitHub Flow for version control and collaborative workflow.             </div>
        </div>
        <div className="number3">003</div>
      </div>
      <div className="row4">
        <div className='droneImgDiv'>
          <img className="droneImg" src={DroneImg} alt="drone" />
        </div>
        <div className="textBox">
            <div className="textBoxTitle">Managing Complexity</div>
            <div className="textBoxBody">
            This project involves managing significant complexity: tracking multiple data streams within a precise timing grid while running iterative, recursive control algorithms that can produce unpredictable or emergent behaviors. To address this, I emphasized modular design and rigorous testing. I built testing suites, data logging pipelines, and visualization tools to evaluate performance, diagnose instability, and refine controller behavior. This structured approach made sense of the rocket’s dynamics and ensured reliability in a highly nonlinear environment.
          </div>
          <div className='textBoxBody2'>
            Check out the code for this exciting ongoing project
              <a href="https://github.com/izzymones/hop" target="_blank" rel="noopener noreferrer"> HERE!</a><br></br><br></br>
              If you're interested in learning more check out my 
              <a href={`${process.env.PUBLIC_URL}/Technical_Report.pdf`} target="_blank" rel="noopener noreferrer"> Technical Report (PDF) </a>
            on the effect of different numerical methods on NMPC control.

          </div>
          <div className='textBoxBody2'>
          </div>
        </div>
        <div className="number4">004</div>
      </div>
      <div className="row5">
        <div className='testingDiv'>
          <img className="testingImg" src={GimbalImg} alt="test" />
          <div className='caption'>
            Early actuator control testing
          </div>
        </div>
        <div className='testingDiv'>
          <img className="testingImg" src={TestingImg} alt="test" />
          <div className='caption'>
            NMPC system stabilizing from a 15 degree attitude tilt and repositioning one meter along the y axis.
          </div>
        </div>
        <div className='testingDiv'>
          <img className="testingImg2" src={GimbalTestImg} alt="test" />
          <div className='caption'>
          </div>
        </div>
      </div>
    </div>
  );
}
