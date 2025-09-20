import { useEffect, useRef, Suspense } from 'react';
import './SoftwareEngineeringTab.css';
import { OrbitControls, useGLTF, Center } from '@react-three/drei';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import CosmicCliffs1 from '../images/CosmicCliffs1.png';
import CosmicCliffs2 from '../images/CosmicCliffs2.png';
import CosmicCliffs3 from '../images/CosmicCliffs3.png';
import SouthernRingNebula from '../images/SouthernRingNebula.png';
import PhantomGalaxy from '../images/PhantomGalaxy.png';
import PipeworksImg from '../images/Pipeworks_Studios.png';
import MusicApp1Img from '../images/MusicApp1.jpg';
import MusicApp2Img from '../images/MusicApp2.jpg';
import StarBunnyImg from '../images/StarBunny.png';
import MekatankTestImg from '../images/highresshortvid.gif';


function MekaModel() {
  const base = process.env.PUBLIC_URL || '';
  const { scene } = useGLTF(`${base}/Assembly_3.glb`);

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




function SoftwareEngineeringTab() {

  useEffect(() => {
  }, []);
  return (
    <div className="SoftwareEngineeringTab">
      <div className="SEticker" role="marquee" aria-label="GUIDANCE NAVIGATION CONTROL">
        <div className="SEticker__track">
          <span className="SEticker__item">SOFTWARE // ENGINEERING //</span>
          <span className="SEticker__item" aria-hidden="true">SOFTWARE // ENGINEERING //</span>
        </div>
      </div>
      <div>
        <div className="SEgrid">
          <div className='SEtextDiv'>
            <div className='SEtitle'>
              JWST Data Visualization
            </div>
            <div className='SEbody'>
              I built a web app that displays telescope data from the James Webb Space Telescope's NIRCam instrument. You can change the color assignments for each filter to create your own unique image of the Carina Nebula’s Cosmic Cliffs, the Southern Ring Nebula or Messier 74 (also known as the Phantom Galaxy). 
            </div>
          </div>
          <div className='SEimageDiv'>
            <img className="CosmicCliffs" src={CosmicCliffs2} alt="CosmicCliffs2" />
          </div>
          <div className='SEimageDiv'>
            <img className="CosmicCliffs" src={CosmicCliffs1} alt="CosmicCliffs1" />
          </div>          
          <div className='SEtextDiv'>
            I downloaded the original FITS files from the MAST archive and used the astropy and reproject python libraries to reduce the size of the files so they can be downloaded to your browser more quickly. The app displays the FITS files directly so what you are seeing is the actual data from the telescope, not a jpeg or some other image format. <br></br><br></br>
            <a href="https://izzymones.github.io/blog-kit/" target="_blank" rel="noopener noreferrer"> Try the app here </a>
              or
              <a href="https://github.com/izzymones/fits-file-processing" target="_blank" rel="noopener noreferrer"> see the code on GitHub.</a>

          </div>
          <div className='SEimageDiv2'>
            <img className="SouthernRingNebula" src={SouthernRingNebula} alt="SouthernRingNebula" />
            <img className="PhantomGalaxy" src={PhantomGalaxy} alt="PhantomGalaxy" />
          </div>
          <div className='SEimageDiv'>
            <img className="CosmicCliffs" src={CosmicCliffs3} alt="CosmicCliffs3" />
          </div>
        </div>
        <div className="SErow1">
          <div className='SEtextDiv2'>
            <div className='pipeworksTitle'>
              Pipeworks Studios
            </div>
            <div className='SEbody2'>
              During my summer internship at Pipeworks Studios, I had the opportunity to work on the development of an internal application for tracking game development projects. I gained experience building full-stack features in React with TypeScript and implemented a comprehensive Jest testing suite. The role gave me exposure to industry-standard software engineering practices, including version control workflows, structured bug tracking, and rigorous testing processes, while collaborating within a professional development environment.            </div>
          </div>
          <div className='pipeworksDiv'>
            <img className="pipeworks" src={PipeworksImg} alt="pipeworks" />
          </div>
        </div>
        <div className="SErow2">
          <div className='SErow2Left'>
            <div className='musicTitle'>
              New Music App
            </div>
            <div className='musicImgDiv'>
              <img className="MusicApp2" src={MusicApp2Img} alt="MusicApp2" />
              <img className="MusicApp1" src={MusicApp1Img} alt="MusicApp1" />
            </div>
          </div>
          <div className='musicFlexDiv'>
            <div className='starBunnyDiv'>
              <img className="starBunny" src={StarBunnyImg} alt="starBunny" />
            </div>
            <div className='musicBody'>
              I love listening to music, so I built a TypeScript React app that helps me keep up with new releases from my favorite artists. The app connects to Spotify’s Web API to check for the latest tracks and albums so I never miss a new release.<br></br><br></br>
              <a href="https://izzymones.github.io/newmusic/" target="_blank" rel="noopener noreferrer"> Try the app here </a>
              or
              <a href="https://github.com/izzymones/newmusic" target="_blank" rel="noopener noreferrer"> see the code on GitHub.</a>
            </div>
          </div>
        </div>
        <div className="SErow3">
          <div className='mekaColumn'>
            <div className='mekaTitle'>
                Mecanum Robot
            </div>
            <div className='mekaTankDiv'>
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
              <ambientLight intensity={0.3} />
              <directionalLight
                position={[5, 8, 5]}
                intensity={0.5}
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
                  <MekaModel />
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
            <div className='mekaBody'>
              One of my earliest projects was a robot with custom 3D-printed Mecanum wheels. Designing the wheels required a process of iterating the design until they worked reliably. The final product  was powered by four NEMA 17 stepper motors, driven by an Arduino Uno, and could drive in any direct easily.
            </div>
          </div>
          <div className='SEimageDiv3'>
              <img className="MekatankTestImg" src={MekatankTestImg} alt="MekatankTestImg" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default SoftwareEngineeringTab;