import MainPage from './mainPage';
import ControlsPage from '../Projects/ControlsPage';
import MusicPage from '../Projects/MusicPage';
import RoboticsPage from '../Projects/RoboticsPage';
import JWSTPage from '../Projects/JWSTPage';
import BalancePage from '../Projects/BalancePage';
import { Route, Routes } from 'react-router-dom';

export function RoutesElement(
  props: {}) {
  return (
  <Routes>
    <Route path="/">
      <Route path="/" element={<MainPage/>} />
      <Route path="controls" element={<ControlsPage/>} />
      <Route path="music" element={<MusicPage/>} />
      <Route path="robotics" element={<RoboticsPage/>} />
      <Route path="jwst" element={<JWSTPage/>} />
      <Route path="balance" element={<BalancePage/>} />
    </Route>
  </Routes>
  )
}