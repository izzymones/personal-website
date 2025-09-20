import { useEffect, useRef, Suspense } from 'react';
import './BalanceBotTab.css';
import { OrbitControls, useGLTF, Center } from '@react-three/drei';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import WavyBorder from '../images/wavyBorder.png';
import botTestImg from '../images/BalanceBotTempImg.jpg';
import LeftGraphImg from '../images/leftGraph.png';
import RightGraphImg from '../images/rightGraph.png';



function BotModel() {
  const base = process.env.PUBLIC_URL || '';
  const { scene } = useGLTF(`${base}/Assembly_2.glb`);

  scene.rotation.set(-Math.PI / 2, 0, Math.PI);

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
        const edgeGeo = new THREE.EdgesGeometry(mesh.geometry, 30);
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

function BalanceBotTab() {


  useEffect(() => {
  }, []);

  return (
    <div className="BalanceBotTab">
      <div className='wavyBorderDiv'>
        <img className="wavyBorder" src={WavyBorder} alt="wavy" />
      </div>
      <div className='leftGraphDiv'>
        <img className="leftGraph" src={LeftGraphImg} alt="leftGraph" />
      </div>
      <div className='rightGraphDiv'>
        <img className="rightGraph" src={RightGraphImg} alt="rightGraph" />
      </div>
      <div className='wavyBorderDiv'>
        <img className="wavyBorder" src={WavyBorder} alt="wavy" />
      </div>
      <div className='botTitle'>
        Floppy-Armed Balancing Bot
      </div>
      <div className='botSubtitle'>
        Linear Quadratic Gaussian(LQG) Balancing Robot with Extended Kalman Filter (EKF)
      </div>

      <div className='botRow1'>
      <div className="botTextBox">
          <div className="botTextBoxTitle">Design Process</div>
          <div className="botTextBoxBody">
            I built a two-wheeled balancing robot on a Raspberry Pi and experimented with three separate control systems to keep it upright: a PID controller, an LQR regulator, and an LQG controller with an Extended Kalman Filter. The project combined complex circuit building, programming, and software engineering with control system design, as well as mechanical design and custom CAD-modeled parts.
          </div>
        <div className='botTextBoxBody2'>
          Check out the code for this control project
            <a href="https://github.com/izzymones/balancing-robot-rasppi" target="_blank" rel="noopener noreferrer"> HERE!</a>
        </div>
        </div>
        <div className='bot3d'>
          <Canvas
            camera={{ position: [0, 0, 2], fov: 45 }}
            shadows
            gl={{
              antialias: true,
              alpha: true,
              outputColorSpace: THREE.SRGBColorSpace,
              toneMapping: THREE.AgXToneMapping,
              toneMappingExposure: 1.95,
            }}
            style={{ background: 'transparent', width: '100%', height: 600, display: 'block' }}
          >
            <ambientLight intensity={0.7} />
            <directionalLight
              position={[5, 8, 5]}
              intensity={1}
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
                <BotModel />
              </Center>
            </Suspense>

            <OrbitControls
              target={[0, 0, 0]}
              enablePan={false}
              enableZoom={false}
              enableRotate={true}
              autoRotate
              autoRotateSpeed={2}
              minDistance={0.48}
              maxDistance={0.48}
              enableDamping
              dampingFactor={0.05}
            />
          </Canvas>
        </div>
      </div>
      <div className='botRow2'>
        <div className='botTestDiv'>
          <img className="botTest" src={botTestImg} alt="botTest" />
        </div>
      </div>
    </div>
  );
}

export default BalanceBotTab;