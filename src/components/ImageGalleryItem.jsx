import React from "react";
import styles from "./ImageGalleryItem.module.scss";

const ImageGalleryItem = ({ image, onImageClick }) => {
  return (
    <li
      className={styles.galleryItem}
      id="modal-root"
      onClick={() => onImageClick(image.largeImageURL)}>
      <img
        src={image.webformatURL}
        alt=""
        className={styles.galleryItemImage}
      />
    </li>
  );
};

export default ImageGalleryItem;
