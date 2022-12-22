import { useCallback, useEffect, useState } from "react";
import sentiment from "sentiment-zh_cn_web";
import Chinese from "chinese-s2t";

function NewAnalyzer() {
  const [textarea_content, set__textarea_content] = useState("");
  const [sentimentScore, set__sentimentScore] = useState("");
  const [generalSentiment, set__generalSentiment] = useState("");
  const reader = new FileReader();

  const handleFileLoading = (event) => {
    if (event.target.files) {
      const [file] = event.target.files;
      reader.readAsText(file);
      reader.onload = () => {
        set__textarea_content(reader.result);
      };
    }
  };

  const findSentiment = useCallback((textarea_content) => {
    const s2tResult = Chinese.t2s(textarea_content);
    const result = sentiment(s2tResult);
    set__sentimentScore(result.score);
    if (result.score < 0) 
      set__generalSentiment("森氣氣or桑心😰🤯😱");
    else if (result.score > 0) 
      set__generalSentiment("不錯不錯🥰🥳🤭");
    else {
      if (textarea_content === '') 
        set__generalSentiment('');
      else
        set__generalSentiment("還...ok🤔😌😶‍🌫️");
    }
  }, []);

  useEffect(() => {
    findSentiment(textarea_content);
  }, [findSentiment, textarea_content]);

  return (
    <div>
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h2>話中有話｜他心情如何🥰</h2>
        <p>請貼上你想分析的一句對話紀錄</p>
        <input
          type="file"
          onChange={handleFileLoading}
          style={{ marginBottom: 20 }}
        />
        <textarea
          cols="30"
          rows="20"
          value={textarea_content}
          onChange={(event) => {
            set__textarea_content(event.target.value);
          }}
        />
        <p>開心指數: {sentimentScore}</p>
        <p>{generalSentiment !== '' ? "他覺得: " : ""}{generalSentiment}</p>
      </div>
    </div>
  );
}

export default NewAnalyzer;
