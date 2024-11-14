import './ProjectsTab.css';
import { Link } from "react-router-dom";

function scrollFunction(event: any) {
  const carousel = document.getElementById('projectScroller');
  if (carousel) {
    carousel.scrollLeft += event.deltaY;
    if (1.25*carousel.scrollLeft === carousel.clientWidth || carousel.scrollLeft === 0) {
      enableScroll()
    } else {
      disableScroll()
    }
  }
}

function disableScroll() {
  const body = document.body;
  body.classList.add('noScroll');
}

function enableScroll() {
  const body = document.body;
  body.classList.remove('noScroll');
}

function ProjectsTab() {
  return (
    <div className="projectsTab">
      <div className="borderDiv">
        <img className="border" src="pinkborder2.png" alt=""></img>
      </div>
      <div className="projectsBorder">
        <div className="titleDiv">
          <div className='wordHolder'>
            <div className="projectsTitle">Projects</div>
          </div>          
          <div className="circles">
            <img id="image" className="tinyCow" src="tinyCow.png" alt=""></img>
            <img id="image" className="tinyPlanet" src="tinyPlanet.png" alt=""></img>
            <img id="image" className="tinyLaptop" src="tinyLaptop.png" alt=""></img>
            <img id="image" className="tinyRabbit" src="tinyRabbit.png" alt=""></img>
            <div className="projectsCircle"></div>
            <div className="rightProjectsCircle"></div>
          </div>
        </div>
      </div>
      <div id={"projectScroller"} className='projectScroller' onMouseEnter={disableScroll} onWheel={scrollFunction} onMouseLeave={enableScroll}>
            <Link className='project' to="/robotics"><img id="image" className="gif" src="highresshortvid.gif" alt="" onMouseDown={enableScroll}></img></Link>
            <Link className='project' to="/music"><img id="image" className="music" src="music.jpg" alt="" onMouseDown={enableScroll}></img></Link>
            <Link className='project' to="/controls" onMouseDown={enableScroll}><div>APRL</div></Link>
            <Link className='project' to="/jwst" onMouseDown={enableScroll}><div>JWST</div></Link>
            <Link className='project' to="/balance" onMouseDown={enableScroll}><div>BALANCING ROBOT</div></Link>
      </div>
    </div>  );
}

export default ProjectsTab;