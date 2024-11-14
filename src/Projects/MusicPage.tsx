import { Link } from "react-router-dom";

function MusicPage() {
  return (
    <div className="projectDiv">
      <Link className='homeButton' to="/"><div className="homeButtonTitle">HOME</div></Link>
      <div className="horizDiv">
        <div className="vertDiv">
          <div className="projectTitle">Music App</div>
          <div className="projectParagraph">This is my MUSIC MUSICMSUCISMUCIS MICUSIMUSICUSICMUSICMSIUC
          </div>
        </div>
        <div className="imageHolder">
          <img id="image" className="musicImage" src="music.jpg" alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default MusicPage;
