
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Layouts
import Layout from './pages/Layout';
// Pages
import Home from './pages/Home';
import About from './pages/About';
import Vision from './pages/Vision';
import Events from './pages/Events';
import NoPage from './pages/NoPage';
// Components
import Event from './components/Event';
import Article from './components/Article';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vision" element={<Vision />} />
          <Route path="events/data-structures" element={<Events />} />
          <Route path="events/pair-programming" element={<Event />} />
          <Route path="events/book-club" element={<Event />} />
          <Route path="blog/article" element={<Article />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
