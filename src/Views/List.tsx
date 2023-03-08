import { Layout } from 'antd';
import NewsItem from '../Components/NewsItem';

const { Content } = Layout;

interface Article {
  id: string;
  title: string;
}

interface ListProps {
  articles: Article[];
}

function List(props: ListProps) {
  return (
    <Layout>
      <Content>
        {props.articles.map((article: any) => (
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
