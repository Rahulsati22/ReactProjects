import React, { useState } from "react";
import NewsItem from "./NewsItem";
import { useEffect } from "react";
import Spinner from "./Spinner";
const News = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const pageSize = 6;
  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    fetchNews();
  }, [page]);

  useEffect(() => {
    fetchNews();
    document.title = `NewsMonkey-${category.slice(0,1).toUpperCase()+category.slice(1,category.length)} news`
  }, [category]);

  const handleNextClick = () => {
    setPage(page + 1);
    return;
  };

  const handlePrevClick = () => {
    setPage(page - 1);
    return;
  };
  function fetchNews() {
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=3d1949c8eb014edaaa5224381b59e264&page=${page}&pageSize=6`;
    let val = false;
    let data = fetch(url)
      .then((data) => data.json())
      .then((data) => {
        setArticles(data.articles);
        setTotalResults(data.totalResults);
        setLoading(false);
      });
  }
  return (
    <div className="container my-3">
      <h2
        className="text-center"
        style={{ fontWeight: "400", margin: "35px 0px" }}
      >
        NewsMonkey-Top Headlines
      </h2>
      <div className="row">
        {articles.map((article) => {
          return (
            <div className="col-md-4 mb-4" key={article.url}>
              <NewsItem
                title={article.title ? article.title.slice(0, 45) : ""}
                description={
                  article.description ? article.description.slice(0, 88) : ""
                }
                imgUrl={
                  article.urlToImage
                    ? article.urlToImage
                    : "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
                }
                newsUrl={article.url ? article.url : "unknown"}
                author={article.author?article.author:""}
                date={article.publishedAt ? new Date(article.publishedAt).toGMTString():""}
              />
            </div>
          );
        })}
      </div>
      <div className="container d-flex justify-content-between">
        {!loading ? (
          <>
            <button
              className="btn btn-success"
              disabled={page <= 1 ? true : false}
              style={{ cursor: "pointer" }}
              onClick={handlePrevClick}
            >
              &larr; prev
            </button>
            <button
              className="btn btn-success"
              disabled={page * pageSize >= totalResults ? true : false}
              style={{ cursor: "pointer" }}
              onClick={handleNextClick}
            >
              next &rarr;
            </button>
          </>
        ) : (
          <div style={{ marginLeft: "50%" }}>
            <Spinner />
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
