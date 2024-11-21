import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import Notfound from './components/screens/Notfound.jsx';
import ScrollToTopButton  from "./components/screens/scrollTop.jsx";

function App() {
  return (
    <Router>
      <ScrollToTopButton smooth />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
    </Router>
  );
}

export default App;