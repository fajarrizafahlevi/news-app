import { Layout } from 'antd';
import NewsItem from '../Components/NewsItem';
import axios from 'axios';
import { useEffect, useState } from 'react';

const { Content } = Layout;

function List() {
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
    <Layout>
      <Content>
        {articles.map((article: any) => (
          <NewsItem
            key={article.title}
            article={article}
          />
        ))}
      </Content>
    </Layout>
  );
}

export default List;
