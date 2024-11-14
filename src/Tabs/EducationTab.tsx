import './EducationTab.css';

function EducationTab() {
  return (
    <div className="educationTab">
      <div className="educationBorder">
        <div className="titleDiv">
          <div className='wordHolder'>
            <div className="educationTitle">Education</div>
          </div>          
          <div className="circles">
            <img id="image" className="tinyCow" src="tinyCow.png" alt=""></img>
            <div className="educationCircle"></div>
            <div className="educationCircle"></div>
            <div className="educationCircle"></div>
            <div className="educationCircle"></div>
            <div className="rightEducationCircle"></div>
          </div>
        </div>
      </div>
      <div className="horizFlex">
        <div className="educationTextBox">
          <div className="paragraph">I am a second year student at UC Davis double majoring in Aerospace Engineering and Mechanical Engineering.</div>
        </div>
        <div className = "imageDiv">
          <img id="image" className="tower" src="tower.jpg" alt=""></img>
          <img id="image" className="egghead" src="egghead.jpg" alt=""></img>
          <img id="image" className="cow" src="cow.jpg" alt=""></img>
        </div>
      </div>
      <div className="borderDiv">
        <img className="border" src="purpleborder.png" alt=""></img>
      </div>
    </div>  
    );
}

export default EducationTab;