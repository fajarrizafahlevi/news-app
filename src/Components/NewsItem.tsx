import { Card } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

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
      <Meta
        title={<Link to={`/articles/${props.article.title}`}>{props.article.title}</Link>}
        description={props.article.description}
      />
    </Card>
  );
}

export default NewsItem;
