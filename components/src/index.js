import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from './commentDetail';

const App = () => {
  return (
    <div className="container ui comment">
      < CommentDetail author="Bank" avatar={Faker.image.avatar()} content="comment One" />
      < CommentDetail author="Pan" avatar={Faker.image.avatar()} content="comment Tow" />
      < CommentDetail author="Jan" avatar={Faker.image.avatar()} content="comment Three" />
    </div>
  );
};

const doc = document.querySelector("#root");
ReactDOM.render(<App />, doc);
