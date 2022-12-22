import React from "react";
import { useState } from "react";
import "../Uploads/uploads.css";
import "../App.css";

function FileUpload() {
  const [textarea_content, set__textarea_content] = useState("");

  const handleFileLoading = event => {
    const reader = new FileReader();
    let [file] = event.target.files;

    reader.addEventListener(
      "load",
      () => {
        set__textarea_content(reader.result);
      },
      false
    );

    if (file) {
      reader.readAsText(file);
    }

    reader.onerror = (e) => alert(e.target.error.name);

    reader.readAsText(file);
    set__textarea_content(reader.result);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <input
          type="file"
          onChange={handleFileLoading}
          style={{ marginBottom: 20 }}
        />
        <textarea cols="30" rows="20" value={textarea_content}></textarea>
      </div>
    </div>
  );
}

export default FileUpload;
