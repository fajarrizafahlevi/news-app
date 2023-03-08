import { Card } from 'antd';
import { Link } from 'react-router-dom';

interface Article {
  id: string;
  title: string;
  description: string;
}

interface NewsItemProps {
  article: Article;
}

function NewsItem(props: NewsItemProps) {
  return (
    <Card>
      <h3>
        <Link to={`/articles/${props.article.title}`}>{props.article.title}</Link>
      </h3>
      <p>{props.article.description}</p>
    </Card>
  );
}

export default NewsItem;
