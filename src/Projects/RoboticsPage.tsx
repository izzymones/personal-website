import { Link } from "react-router-dom";

function RoboticsPage() {
  return (
    <div className="projectDiv">
      <Link className='homeButton' to="/"><div className="homeButtonTitle">HOME</div></Link>
      <div className="horizDiv">
        <div className="vertDiv">
          <div className="projectTitle">Robotics</div>
          <div className="projectParagraph">This is my AAAAAAAAAAA
          </div>
        </div>
        <div className="imageHolder">
        <img id="image" className="mekaTankImage" src="highresshortvid.gif" alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default RoboticsPage;
