import './App.css';

import GoalsTab from '../Tabs/GoalsTab';
import HomeTab from '../Tabs/HomeTab';
import AboutMeTab from '../Tabs/AboutMeTab';
import TVCTab from '../Tabs/TVCTab';
import BalanceBotTab from '../Tabs/BalanceBotTab';
import SoftwareEngineeringTab from '../Tabs/SoftwareEngineeringTab';




function MainPage() {
  return (
    <div className="App">
      <header className="App-header">
        <HomeTab></HomeTab>
        <AboutMeTab></AboutMeTab>
        <TVCTab></TVCTab>
        <BalanceBotTab></BalanceBotTab>
        <SoftwareEngineeringTab></SoftwareEngineeringTab>
        <GoalsTab></GoalsTab>
      </header>
    </div>
  );
}

export default MainPage;
