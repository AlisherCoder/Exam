import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layout/main';
import Phones from './pages/Phones/Phones';
import Colors from './pages/Colors/Colors';
import Create from './pages/Create/Create';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/phones" element={<Phones />} />
          <Route path="/colors" element={<Colors />} />
          <Route path="/" element={<Create />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
