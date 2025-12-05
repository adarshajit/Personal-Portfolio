import React, { useState } from "react";
import { Footer, Modal } from "@components";
import Gallery from "./gallery";

const Art = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <Gallery setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      <Footer />
    </>
  );
};

export default Art;
