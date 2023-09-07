import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import News from "../components/News";
import axios from "axios";

const SearchPage = ({ input, setInput }) => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [currentsearch, setCurrentSearch] = useState(null);
  const auth = "dae872a7c5524b53821837ded0eb1608";

  console.log("剛進入input = " + input);
  const searchUrl =
    `https://newsapi.org/v2/everything?q=${input}&page=1&pageSize=15&apiKey=` +
    auth;

  const search = async (url) => {
    let result = await axios.get(url);
    setData(result.data.articles);
    setCurrentSearch(input);
    await setInput(null);
  };

  const moreNews = async () => {
    let newUrl;
    setPage(page + 1);

    newUrl =
      `https://newsapi.org/v2/everything?q=${currentsearch}&page=${
        page + 1
      }&pageSize=15&apiKey=` + auth;

    let result = await axios.get(newUrl);
    setData(data.concat(result.data.articles));
  };

  useEffect(() => {
    search(searchUrl);
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          search(searchUrl);
        }}
        setInput={setInput}
      />
      <h2 style={{ margin: "0rem 3rem" }}>{currentsearch}搜尋結果</h2>
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

export default SearchPage;
