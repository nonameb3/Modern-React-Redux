import React from 'react';

const CommentDetail = (props) => {
    return (
        <div className="ui container comments">
            <div className="comment">
            <a className="avatar" href="/">
                <img src={props.avatar} alt="avatar" />
            </a>
            <div className="content">
                <a href="/" className="author">
                 {props.author}
                </a>
                <div className="metadata">
                    <span className="date">Today at 21.30 OC</span>
                </div>
                <div className="text">{props.content}</div>
            </div>
            </div>
        </div>
    );
};

export default CommentDetail;