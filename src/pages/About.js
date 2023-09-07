import React from "react";

const About = () => {
  return (
    <div>
      <h2 style={{ margin: "1rem" }}>關於網站</h2>
      <p style={{ margin: "1.5rem" }}>
        此網站透過NewsAPI讀取到上面的新聞資源，再用固定的樣子將它顯示出來，還可以透過search按鍵去搜尋相關的資料，因為是免費使用該API，所以每天抓取資料的次數只有100次。
      </p>
    </div>
  );
};

export default About;
