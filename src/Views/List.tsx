import { Breadcrumb, Layout, Pagination, Spin } from 'antd';
import NewsItem from '../components/NewsItem';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const { Content } = Layout;

interface ListProps {
  url: string;
  topic: string;
  currentPage: number;
  pageSize: number;
  changeCurrentPage: any;
  changePageSize: any;
}

interface Page {
  page: number;
  pageSize: number;
}

function List(props: ListProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [articles, setArticles] = useState([]);

  const { url, topic, currentPage, pageSize, changeCurrentPage, changePageSize } = props;

  async function getNews() {
    try {
      const res = await axios.get(url);
      setArticles(res.data.articles);
      setLoading(false);
    } catch (error) {
      setError('An error occurred while fetching the data');
      setLoading(false);
    }
  }
  useEffect(() => {
    getNews();
  }, [url, currentPage, pageSize]);

  function handlePageChange({ page, pageSize }: Page) {
    changeCurrentPage(page);
    changePageSize(pageSize);
    window.scrollTo(0, 0);
  }

  if (loading) {
    return <Spin />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Breadcrumb
        style={{ margin: '16px 0' }}
        items={[
          {
            title: <Link to="/">Home</Link>,
          },
          {
            title: <span>{topic}</span>,
          },
        ]}
      />
      <Content style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {articles.map((article: any) => (
          <NewsItem
            key={article.title}
            article={article}
          />
        ))}
      </Content>
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={100}
        showSizeChanger
        onChange={(page, pageSize) => handlePageChange({ page, pageSize })}
        onShowSizeChange={(page, pageSize) => handlePageChange({ page, pageSize })}
        style={{ margin: '16px' }}
      />
    </>
  );
}

export default List;
