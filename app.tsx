import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/homePage';
import ReadyPage from './components/readyPage';
import QuestionPage from './components/questionPage';
import FinalPage from './components/finalPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ready" element={<ReadyPage />} />
        <Route path="/question" element={<QuestionPage />} />
        <Route path="/finale" element={<FinalPage />} />
      </Routes>
    </BrowserRouter>
  );
}
