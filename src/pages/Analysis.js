import { useState } from "react";
import sentiment from "sentiment-zh_cn_web";
import Chinese from "chinese-s2t";


function NewAnalyzer() {
  const [sentimentScore, set__sentimentScore] = useState(null);
  const [generalSentiment, set__generalSentiment] = useState(null);

  const findSentiment = (event) => {
    const s2tResult = Chinese.t2s(event.target.value);
    const result = sentiment(s2tResult);
    set__sentimentScore(result.score);
    if (result.score < 0) 
      set__generalSentiment("森氣氣or桑心😰🤯😱");
    else if (result.score > 0) 
      set__generalSentiment("不錯不錯🥰🥳🤭");
    else 
      set__generalSentiment("還...ok🤔😌😶‍🌫️");
  };

  return (
    <div className="App">
      <h2>話中有話｜他心情如何🥰</h2>
      <p>請貼上你想分析的一句對話紀錄</p>
      <textarea onChange={findSentiment} />
      <p>開心指數: {sentimentScore}</p>
      <p>他覺得: {generalSentiment}</p>
    </div>
  );
}

export default NewAnalyzer;
