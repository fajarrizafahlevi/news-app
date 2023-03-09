import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Breadcrumb, Spin, theme } from 'antd';
import axios from 'axios';

interface Article {
  title: string;
  content: string | React.ReactNode;
}

interface DetailProps {
  url: string;
  topic: string;
}

function Detail(props: DetailProps) {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState<Article | undefined>(undefined);

  const { url, topic } = props;
  const { title } = useParams();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  async function getArticle() {
    try {
      const response = await axios.get(url);
      const articles = response.data.articles;
      const foundArticle = articles.find((article: Article) => article.title === title);
      setArticle(foundArticle);
      setLoading(false);
    } catch (error) {
      setError(`No article found with title: ${title}`);
      setLoading(false);
    }
  }

  useEffect(() => {
    getArticle();
  }, [title]);

  if (loading) {
    return <Spin style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }} />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Breadcrumb
        style={{ margin: '16px 0' }}
        items={[
          {
            title: <Link to="/">Home</Link>,
          },
          {
            title: <Link to="/articles">{topic}</Link>,
          },
          {
            title: <span>{article?.title}</span>,
          },
        ]}
      />

      <div style={{ padding: '32px', background: colorBgContainer }}>
        <h2>{article?.title}</h2>
        <p>{article?.content}</p>
      </div>
    </div>
  );
}

export default Detail;
