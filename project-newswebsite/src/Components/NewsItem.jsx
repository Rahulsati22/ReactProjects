import React from "react";

const NewsItem = ({ title, description, imgUrl, newsUrl, author, date }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={imgUrl} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <p className="card-text"><small className="text-muted">By {author} on {date}</small></p>
        <a href={newsUrl} target="_blank" className="btn btn-primary btn-sm">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
