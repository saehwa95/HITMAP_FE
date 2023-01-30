import { useState } from "react";

const useInputProfilimage = () => {
  const [fileimage, setFileImage] = useState();

  //이미지 formData에 넣기
  const saveFileImage = (e) => {
    // formData.append("image", fileimage);
    const reader = new FileReader();
    reader.onload = () => {
      setFileImage(e.target.files[0]);
      if (reader.readyState === 2) {
        setFileImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return { fileimage, saveFileImage };
};

export default useInputProfilimage;
