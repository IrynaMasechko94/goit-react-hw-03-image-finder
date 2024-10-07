import React, { Component } from 'react';
import s from '../../styles/styles.module.css';

export default class Button extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <>
        <button type="button" className={s.Button} onClick={onClick}>
          Load More
        </button>
      </>
    );
  }
}
