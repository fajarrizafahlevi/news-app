import { Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from './Views/Detail';
import List from './Views/List';

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<List />}
        ></Route>
        <Route
          path="articles/:title"
          element={<Detail />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
