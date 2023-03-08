import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from './Views/Detail';
import List from './Views/List';

function App() {
  const url =
    'https://newsapi.org/v2/everything?q=reactjs&pageSize=20&apiKey=048ad9312d7d413bbec398db0a8e9592';

  const [articles, setArticles] = useState([]);

  async function getNews() {
    await axios.get(url).then((res) => setArticles(res.data.articles));
  }

  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<List articles={articles} />}
        ></Route>
        <Route
          path="articles/:title"
          element={<Detail articles={articles} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
