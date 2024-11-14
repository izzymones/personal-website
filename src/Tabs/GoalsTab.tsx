import './GoalsTab.css';

function GoalsTab() {
  return (
    <div className="goalsTab">
      <div className='spaceHolder'>
        <img className="spaceBackground" src="spaceBackground.png" alt=""></img>
        <img className="clouds" src="Clouds.png" alt=""></img>
      </div>
      <div className='asteroidsClipDiv'>
        <img className="asteroids" src="Asteroids.png" alt=""></img>
      </div>
      <div className="goalsFlex">
        <div className="planetDiv">
          <div className='pinkShadingHolder'>
            <img className='pinkGlow' src="Glow1.png" alt=""></img>
          </div>
          <div className='yellowShadingHolder'>
            <img className='yellowGlow' src="Glow2.png" alt=""></img>
          </div>
          <div className='pinkClipDiv'>
            <img className='pinkPlanet' src="Texture1.png" alt=""></img>
          </div>
          <div className='yellowClipDiv'>
            <img className='yellowPlanet' src="Texture2.png" alt=""></img>
          </div>
          <div className='pinkShadingHolder'>
            <img className='pinkShading' src="Shading.png" alt=""></img>
          </div>
          <div className='yellowShadingHolder'>
            <img className='yellowShading' src="Shading.png" alt=""></img>
          </div>
        </div>
        <div className='goalsTextBoxHolder'>
          <div className="goalsTextBox">
            <div className="paragraph">I am a second year student at UC Davis double majoring in Aerospace Engineering and Mechanical Engineering.</div>
          </div>
        </div>
      </div>
      <div className="spaceShipClipDiv">        
        <img className="leftBooster" src="leftBooster.png" alt=""></img>
        <img className="rightBooster" src="rightBooster.png" alt=""></img>
        <img className="fire" src="fire.png" alt=""></img>
        <img className="fuelTank" src="fuelTank.png" alt=""></img>
        <img className="spaceShip2" src="rocket.png" alt=""></img>
      </div>
      <div className="goalsBorderDiv">
        <img className="pinkBorder" src="pinkborder.png" alt=""></img>
      </div>
      <div className="goalsBorder">
        <div className="titleDiv">
          <div className='wordHolder'>
            <div className="goalsTitle">Goals</div>
          </div>
          <div className="circles">
            <img id="image" className="tinyCow" src="tinyCow.png" alt=""></img>
            <img id="image" className="tinyPlanet" src="tinyPlanet.png" alt=""></img>
            <div className="goalsCircle"></div>
            <div className="goalsCircle"></div>
            <div className="goalsCircle"></div>
            <div className="rightGoalsCircle"></div>
          </div>
        </div>
      </div>
    </div>  

    );
}

export default GoalsTab;