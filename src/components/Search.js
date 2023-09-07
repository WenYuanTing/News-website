import React from "react";
import { Link } from "react-router-dom";

const Search = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="search">
      <input onChange={inputHandler} type="text" />
      <img
        src="a href='httpszh.pngtree.comfreepngsearch-icon_3569522.html'png 圖片來源於 zh.pngtree.coma.jpg"
        alt="搜尋圖片"
        onClick={search}
      />

      <div className="classification">
        <Link to={"/sports"}>運動</Link>
        <Link to={"/worldwide"}>全球</Link>
        <Link to={"/society"}>社會</Link>
        <Link to={"/stockMarket"}>股市</Link>
        <Link to={"/life"}>生活</Link>
        <Link to={"/healthy"}>健康</Link>
        <Link to={"/scienceAndTechnology"}>科技</Link>
        <Link to={"/travel"}>旅遊</Link>
      </div>
    </div>
  );
};

export default Search;
