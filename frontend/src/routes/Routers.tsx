import { memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Welcome } from '../components/Welcome'
import App from '../App';
import { TaskRoutes } from './TaskRoutes';

export const Routers = memo(() => (
  <>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/welcome" element={<Welcome/>} />
      <Route path="/tasks">
        {TaskRoutes().map((route) => (<Route key={route.path} path={route.path} element={route.element}/>))}
      </Route>
    </Routes>
  </>
));
