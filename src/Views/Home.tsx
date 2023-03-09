import { Button, Layout } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const { Content } = Layout;

interface HomeProps {
  changeTopic: (text: string) => void;
}

function Home({ changeTopic }: HomeProps) {
  const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.value;
    changeTopic(value);
  };

  return (
    <div>
      <Link to="/articles">
        <Button
          role="button"
          onMouseDown={handleMouseDown}
          value="React JS"
        >
          React
        </Button>
        <Button
          role="button"
          onMouseDown={handleMouseDown}
          value="Apple"
        >
          Apple
        </Button>
      </Link>
    </div>
  );
}

export default Home;
