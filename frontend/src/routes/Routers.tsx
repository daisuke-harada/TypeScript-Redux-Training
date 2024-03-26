import { memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Welcome } from '../components/Welcome'
import App from '../App';

export const Routers = memo(() => (
  <>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/welcome" element={<Welcome/>} />
    </Routes>
  </>
));
