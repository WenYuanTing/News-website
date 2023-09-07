import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import News from "../components/News";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Healthy = ({ input, setInput }) => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [currentsearch, setCurrentSearch] = useState(null);

  const navigate = useNavigate();
  const auth = "dae872a7c5524b53821837ded0eb1608";

  const initailUrl =
    `https://newsapi.org/v2/everything?q=healthy&page=1&pageSize=15&apiKey=` +
    auth;
  const searchUrl =
    `https://newsapi.org/v2/everything?q=${input}&page=1&pageSize=15&apiKey=` +
    auth;

  const search = async (url) => {
    if (input == null) {
      console.log("進入到search()");

      let result = await axios.get(initailUrl);
      setData(result.data.articles);
    } else {
      console.log("進入到搜尋");
      let result = await axios.get(url);
      setData(result.data.articles);
      await setCurrentSearch(input);
      console.log("傳送前=" + input);
      navigate(`/searchpage`);
    }
  };

  const moreNews = async () => {
    let newUrl;
    setPage(page + 1);
    if (currentsearch == null) {
      newUrl =
        `https://newsapi.org/v2/everything?q=healthy&page=${
          page + 1
        }&pageSize=15&apiKey=` + auth;
    } else {
      console.log("進入到搜尋後更多新聞...");
      console.log("currentsearch=" + currentsearch);
      console.log("page=" + page);
      newUrl =
        `https://newsapi.org/v2/everything?q=${currentsearch}&page=${
          page + 1
        }&pageSize=15&apiKey=` + auth;
    }

    let result = await axios.get(newUrl);
    setData(data.concat(result.data.articles));
  };

  useEffect(() => {
    search(initailUrl);
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          search(searchUrl);
        }}
        setInput={setInput}
      />
      <h2 style={{ margin: "0rem 3rem" }}>精選新聞 - 健康版面</h2>
      <div className="news">
        {data &&
          data.map((d) => {
            return <News data={d} />;
          })}
      </div>
      <div className="moreNews">
        <button onClick={moreNews}>更多新聞</button>
      </div>
    </div>
  );
};

export default Healthy;
