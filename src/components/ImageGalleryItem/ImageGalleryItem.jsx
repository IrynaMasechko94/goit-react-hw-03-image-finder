import React, { Component } from 'react';
import s from '../../styles/styles.module.css';

export default class ImageGalleryItem extends Component {
  render() {
    const { image, onImageClick } = this.props;
    return (
      <li className={s.ImageGalleryItem} id={image.id} onClick={onImageClick}>
        <img
          src={image.webformatURL}
          alt={image.tags}
          name={image.largeImageURL}
          className={s.ImageGalleryItemImage}
        />
      </li>
    );
  }
}
