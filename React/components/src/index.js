import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from './commentDetail';
import ApprovalCard from "./approvalCard";

const App = () => {
  return (
    <div className="container ui comment" style={{marginTop:'20px'}}>
      < ApprovalCard>
        < CommentDetail author="Bank" avatar={Faker.image.avatar()} content="comment One" />
      </ ApprovalCard>
      < ApprovalCard>
        < CommentDetail author="Pan" avatar={Faker.image.avatar()} content="comment Tow" />
      </ ApprovalCard>
      < ApprovalCard>
        <div>
          <h4>Hello</h4>
          <p>Are you commit?</p>
        </div>
      </ ApprovalCard>
    </div>
  );
};

const doc = document.querySelector("#root");
ReactDOM.render(<App />, doc);
