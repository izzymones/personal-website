import './WorkTab.css';

function WorkTab() {
  return (
    <div className="workTab">
      <div className="workBorder">
        <div className="titleDiv">
          <div className='wordHolder'>
            <div className="workTitle">Work</div>
          </div>          
          <div className="circles">
            <img id="image" className="tinyCow" src="tinyCow.png" alt=""></img>
            <img id="image" className="tinyPlanet" src="tinyPlanet.png" alt=""></img>
            <img id="image" className="tinyLaptop" src="tinyLaptop.png" alt=""></img>
            <div className="workCircle"></div>
            <div className="workCircle"></div>
            <div className="rightWorkCircle"></div>
          </div>
        </div>
      </div>
      <div className="horizFlex">
        <div className="workTextBox">
          <div className="paragraph">I am a second year student at UC Davis double majoring in Aerospace Engineering and Mechanical Engineering.</div>
        </div>
        <img id="image" className="pipeworks" src="Pipeworks_Studios.png" alt=""></img>
      </div>
    </div>  );
}

export default WorkTab;