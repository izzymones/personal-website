import MainPage from './mainPage';

import { Route, Routes } from 'react-router-dom';

export function RoutesElement(
  props: {}) {
  return (
  <Routes>
    <Route path="/">
      <Route path="/" element={<MainPage/>} />
    </Route>
  </Routes>
  )
}