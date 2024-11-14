import './OriginTab.css';

function OriginTab() {
  return (
    <div className="originTab">
      <img className="oregon" src="oregon.jpg" alt=""></img>
      <img className="blackbear" src="blackbear.png" alt=""></img>
      <div className='asteroidsClipDiv'>
        <img className="originRocket" src="rocket.png" alt=""></img>
        <img className="originRocket" src="fire.png" alt=""></img>
      </div>
      <div className="borderDiv">
        <img className="blueBorder" src="blueborder.png" alt=""></img>
      </div>
      <div className="borderDiv">
        <img className="yellowBorder" src="yellowborder.png" alt=""></img>
      </div>
      <div className="originBorder">
        <div className="titleDiv">
        <div className='wordHolder'>
            <div className="originTitle">Home</div>
          </div>
          <div className="circles">
            <img id="image" className="tinyCow" src="tinyCow.png" alt=""></img>
            <img id="image" className="tinyPlanet" src="tinyPlanet.png" alt=""></img>
            <img id="image" className="tinyLaptop" src="tinyLaptop.png" alt=""></img>
            <img id="image" className="tinyRabbit" src="tinyRabbit.png" alt=""></img>
            <img id="image" className="tinyBear" src="tinyBear.png" alt=""></img>
            <div className="rightOriginCircle"></div>
          </div>
        </div>
      </div>
      <div className="originFlex">
        <div className="originTextBox">
          <div className="paragraph">I am a second year student at UC Davis double majoring in Aerospace Engineering and Mechanical Engineering.</div>
        </div>
      </div>
    </div>  
    );
}

export default OriginTab;