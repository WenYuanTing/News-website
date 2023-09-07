import React from "react";

const News = ({ data }) => {
  let truncatedDescription = null;

  if (data.description != null) {
    truncatedDescription =
      data.description.length > 100
        ? data.description.slice(0, 100) + "..." // 截断文本并添加...
        : data.description;
  }

  return (
    <div className="new">
      <div className="picContainer">
        <img className="newPic" src={data.urlToImage} alt="新聞照片" />
      </div>
      <div className="newInfo">
        <p>標題 : {data.title}</p>

        <p>
          簡介 : {truncatedDescription}
          <a target="_blank" href={data.url}>
            更多內容
          </a>
        </p>
      </div>
    </div>
  );
};

export default News;
