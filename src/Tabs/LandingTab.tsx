import './LandingTab.css';

function LandingTab() {
  return (
    <div className="landingTab">

      <img className="landingSite" src="landingSite.jpg" alt=""></img>
      <img className="landingShadow" src="shadow.png" alt=""></img>
      <div className='landerClipDiv'>
        <img className="landingRocket" src="rocket.png" alt=""></img>
        <img className="landingFire" src="fire.png" alt=""></img>
      </div>
      <div className="borderDiv">
        <img className="blueBorder2" src="blueborder.png" alt=""></img>
      </div>
    </div>
  )
}

export default LandingTab;