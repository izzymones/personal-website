import './FavoritesTab.css';

function scrollFunction(event: any) {
  const carousel = document.getElementById('favoriteScroller');
  if (carousel) {
    console.log(event.deltaY)
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

function FavoritesTab() {
  return (
    <div className="favoritesTab">
      <div className="favoritesBorder">
        <div className="titleDiv">
          <div className='wordHolder'>
            <div className="favoritesTitle">My Favorite Things</div>
          </div>          
          <div className="circles">
            <img id="image" className="tinyCow" src="tinyCow.png" alt=""></img>
            <img id="image" className="tinyPlanet" src="tinyPlanet.png" alt=""></img>
            <img id="image" className="tinyLaptop" src="tinyLaptop.png" alt=""></img>
            <img id="image" className="tinyRabbit" src="tinyRabbit.png" alt=""></img>
            <img id="image" className="tinyBear" src="tinyBear.png" alt=""></img>
            <img id="image" className="tinyRock" src="tinyRock.png" alt=""></img>
          </div>
        </div>
      </div>
      <div id={'favoriteScroller'} className='favoriteScroller' onMouseEnter={disableScroll} onWheel={scrollFunction} onMouseLeave={enableScroll}>
        <div className='favorite'>
          <img id="image" className="underwater" src="underwater.png" alt=""></img>
        </div>        
        <div className='favorite'>
          <img id="image" className="climbing" src="climbing.jpg" alt=""></img>
        </div>         
        <div className='favorite'>
          <img id="image" className="bunny" src="bunny.jpg" alt=""></img>
        </div>         
        <div className='favorite'>Sewing</div>
        <div className='favorite'>Guitar/Piano</div>
      </div>
    </div>  );
}

export default FavoritesTab;