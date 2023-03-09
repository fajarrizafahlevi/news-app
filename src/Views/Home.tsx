import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface HomeProps {
  changeTopic: (text: string) => void;
}

function Home({ changeTopic }: HomeProps) {
  const [keyword, setKeyword] = useState<string>('');

  const handleKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.value;
    changeTopic(value);
  };

  return (
    <div className="text-center">
      <div className="flex column">
        <h2>Find your news</h2>
        <div>
          <Form
            className="flex"
            style={{ gap: '8px' }}
          >
            <Input
              placeholder="Type the topic here..."
              value={keyword}
              onChange={handleKeywordChange}
            />
            <Link to="/articles">
              <Button
                role="button"
                htmlType="submit"
                onClick={() => changeTopic(keyword)}
              >
                Search
              </Button>
            </Link>
          </Form>
        </div>
      </div>

      <p>or</p>

      <div>
        <p>Pick a topic</p>
        <Link
          to="/articles"
          className="flex center"
          style={{ gap: '8px' }}
        >
          <Button
            role="button"
            onMouseDown={handleMouseDown}
            value="Technology"
          >
            Technology
          </Button>
          <Button
            role="button"
            onMouseDown={handleMouseDown}
            value="Gaming"
          >
            Gaming
          </Button>
          <Button
            role="button"
            onMouseDown={handleMouseDown}
            value="Health"
          >
            Health
          </Button>
          <Button
            role="button"
            onMouseDown={handleMouseDown}
            value="Environment"
          >
            Environment
          </Button>
          <Button
            role="button"
            onMouseDown={handleMouseDown}
            value="Education"
          >
            Education
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
