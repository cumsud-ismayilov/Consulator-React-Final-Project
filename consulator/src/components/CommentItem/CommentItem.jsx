import React from "react";
import { useEffect, useState } from "react";
import "../CommentItem/CommentItem.scss";

const CommentItem = () => {
  const [comments, setComments] = useState([]);
  const BASE_URL = "http://localhost:3001/";
  useEffect(() => {
    fetch(`${BASE_URL}comments-data`)
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      });
  }, []);

  return (
    <div className="comments-item">
      {comments.length > 0 &&
        comments.map((element, index) => (
          <div key={index} className="comment-cards">
            <img src={element.image} alt="imgs" />
            <div className="commentstext">
              <div className="nameanddate">
                <p>{element.name}</p>
                <h3>{element.date}</h3>
              </div>
              <h4>{element.tittle1}</h4>
              <h5>{element.tittle2}</h5>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CommentItem;
