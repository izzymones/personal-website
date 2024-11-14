import './App.css';
import EducationTab from '../Tabs/EducationTab';
import FavoritesTab from '../Tabs/FavoritesTab';
import GoalsTab from '../Tabs/GoalsTab';
import HomeTab from '../Tabs/HomeTab';
import LandingTab from '../Tabs/LandingTab';
import OriginTab from '../Tabs/OriginTab';
import ProjectsTab from '../Tabs/ProjectsTab';
import WorkTab from '../Tabs/WorkTab';

function MainPage() {
  return (
    <div className="App">
      <header className="App-header">
        <HomeTab></HomeTab>
        <EducationTab></EducationTab>
        <GoalsTab></GoalsTab>
        <WorkTab></WorkTab>
        <ProjectsTab></ProjectsTab>
        <OriginTab></OriginTab>
        <FavoritesTab></FavoritesTab>
        <LandingTab></LandingTab>
      </header>
    </div>
  );
}

export default MainPage;
