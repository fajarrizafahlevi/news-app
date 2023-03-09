import { Layout, Menu } from 'antd';
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Detail from './views/Detail';
import Home from './views/Home';
import List from './views/List';
import './App.css';

const { Header, Content, Footer } = Layout;

function App() {
  const [topic, setTopic] = useState<string>('Apple');
  const [pageSize, setPageSize] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const BASE_URL = 'https://newsapi.org/v2/everything?';
  const API_KEY = '048ad9312d7d413bbec398db0a8e9592';

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
        <Footer className="text-center">Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </>
  );
}

export default App;
