import React, { Component } from 'react';
import s from '../../styles/styles.module.css';

export default class Searchbar extends Component {
  state = {
    inputData: '',
  };

  onChangeInput = e => {
    this.setState({ inputData: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputData);
    this.setState({ inputData: '' });
  };

  render() {
    const { inputData } = this.state;

    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm}>
          <button
            type="submit"
            className={s.SearchFormButton}
            onClick={this.handleSubmit}
          >
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            value={inputData}
            onChange={this.onChangeInput}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
