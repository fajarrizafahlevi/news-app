import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from 'antd';
import axios from 'axios';

const { Content } = Layout;

interface Article {
  id: string;
  title: string;
  content: string;
}

function Detail() {
  const url =
    'https://newsapi.org/v2/everything?q=reactjs&pageSize=20&apiKey=048ad9312d7d413bbec398db0a8e9592';

  const [article, setArticle] = useState<Article | undefined>(undefined);

  const { title } = useParams();

  async function getArticle() {
    await axios.get(url).then((res) => {
      setArticle(res.data.articles.find((article: Article) => article.title === title));
    });
  }

  useEffect(() => {
    getArticle();
  }, [title]);

  return (
    <Layout>
      <Content>
        <div>
          <h1>{article?.title}</h1>
          <p>{article?.content}</p>
        </div>
      </Content>
    </Layout>
  );
}

export default Detail;
