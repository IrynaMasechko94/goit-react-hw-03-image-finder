import React, { Component } from 'react';
import s from '../../styles/styles.module.css';

export default class Modal extends Component {
  render() {
    const { src, alt, handleClose } = this.props;
    return (
      <div className={s.Overlay} onClick={handleClose}>
        <div className={s.Modal}>
          <img src={src} alt={alt} />
        </div>
      </div>
    );
  }
}
