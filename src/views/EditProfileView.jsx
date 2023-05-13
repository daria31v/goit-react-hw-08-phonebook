/* eslint-disable no-unused-vars */
import { useState } from 'react';

const EditProfileView = () => {
  const [file, setFile] = useState(null);
  const upload = event => {
    setFile(event.target.files[0]);
  };
  const sendFile = () => {};
  return (
    <>
      <input type="file" onChange={upload} />
      <button type="submit" onClick={sendFile}>
        Upload
      </button>
    </>
  );
};

export default EditProfileView;
