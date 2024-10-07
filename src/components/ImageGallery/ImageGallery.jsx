import React, { Component } from 'react';
import s from '../../styles/styles.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default class ImageGallery extends Component {
  render() {
    const { images, onImageClick } = this.props;
    return (
      <ul className={s.ImageGallery}>
        {images.map((image, index) => (
          <ImageGalleryItem
            key={index}
            image={image}
            onImageClick={onImageClick}
          />
        ))}
      </ul>
    );
  }
}
