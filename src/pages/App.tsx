import NavigationBar from '@/components/NavigationBar/NavigationBar';
import Home from '@/pages/Home/Home';
import { Route, Routes } from 'react-router';
import { Projects } from './Projects/Projects';

const App = () => {
  return (
    <main>
      <NavigationBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </main>
  );
};

export default App;
