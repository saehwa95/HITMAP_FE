import { useState, useRef } from "react";

const UseInputProfilimage = () => {
  const [fileimage, setFileImage] = useState();
  const [visible, setVisible] = useState(false);
  const imgRef = useRef();
  const saveFileImage = (e) => {
    setFileImage(e.target.files[0]);
    e.target.value = "";
    setVisible(true);
  };

  // 프리뷰 이미지 삭제
  const deleteFileImage = () => {
    setFileImage("");
    setVisible(false);
  };

  // 프리뷰 이미지
  const imageInput = imgRef;

  const onClickImageUpload = () => {
    imageInput.current.click();
    setFileImage();
  };
  return {
    fileimage,
    visible,
    imageInput,
    saveFileImage,
    deleteFileImage,
    onClickImageUpload,
  };
};

export default UseInputProfilimage;
