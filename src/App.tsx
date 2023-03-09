import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import Detail from './views/Detail';
import Home from './views/Home';
import List from './views/List';
import './App.css';
import { API } from './utils/api';

const { Header, Content, Footer } = Layout;

function App() {
  const [topic, setTopic] = useState<string>('Technology');
  const [pageSize, setPageSize] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { BASE_URL, API_KEY } = API;

  const url = `${BASE_URL}q=${topic}&language=en&pageSize=${pageSize}&page=${currentPage}&apiKey=${API_KEY}`;

  function handleChangeTopic(topic: string) {
    setTopic(topic);
  }

  function handleChangeCurrentPage(page: number) {
    setCurrentPage(page);
  }

  function handleChangePageSize(pageSize: number) {
    setPageSize(pageSize);
  }

  return (
    <>
      <Layout className="layout">
        <Header className="flex middle w-full">
          <h1 style={{ color: 'white' }}>News</h1>
        </Header>

        <Content className="flex column content middle">
          <Routes>
            <Route
              path="/"
              element={<Home changeTopic={handleChangeTopic} />}
            ></Route>

            <Route
              path="/articles"
              element={
                <List
                  url={url}
                  topic={topic}
                  currentPage={currentPage}
                  pageSize={pageSize}
                  changeCurrentPage={handleChangeCurrentPage}
                  changePageSize={handleChangePageSize}
                />
              }
            ></Route>

            <Route
              path="/articles/:title"
              element={
                <Detail
                  url={url}
                  topic={topic}
                />
              }
            ></Route>
          </Routes>
        </Content>

        <Footer className="text-center">©2023</Footer>
      </Layout>
    </>
  );
}

export default App;
