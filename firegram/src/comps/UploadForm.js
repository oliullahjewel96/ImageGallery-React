import React, { useState } from "react";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [err, setErr] = useState(null);

  const types = ["imagepng", "image/jpeg"];
  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setErr("");
    } else {
      setFile(null);
      setErr("Please select an image type(png or jpeg)");
    }
  };
  return (
    <div>
      <form>
        <input type="file" onChange={changeHandler} />

        <div className="output">
          {err && <div className="error">{err}</div>}
          {file && <div>{file.name}</div>}
        </div>
      </form>
    </div>
  );
};

export default UploadForm;
