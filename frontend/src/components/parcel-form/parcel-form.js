import React from 'react';
import PropTypes from 'prop-types';
import autoBind from './../../utils';

const defaultState = {
  firstName: '', 
  lastName: '', 
  address: '',
  error: null, 
};

export default class ParcelForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.parcel ? props.parcel : defaultState;
    autoBind.call(this, ParcelForm);
  }
  componentDidUpdate(previousProps) { 
    if (previousProps.parcel !== this.props.parcel) { 
      this.setState(this.props.parcel);
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    const { onComplete } = this.props;
    const result = onComplete(this.state);
    if (result instanceof Promise) {
      result
        .then(() => {
          this.setState(defaultState);
        })
        .catch((error) => {
          this.setState({ error });
        });
    }
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form
      onSubmit={this.handleSubmit} className='parcel-form'>
      <input
      name='firstName'
      type='text'
      placeholder='enter first name'
      value={this.state.firstName}
      onChange={this.handleChange}
      />
      <input
      name='lastName'
      type='text'
      placeholder='enter last name'
      value={this.state.lastName}
      onChange={this.handleChange}
      />
      <input
      name='address'
      type='text'
      placeholder='enter address'
      value={this.state.address}
      onChange={this.handleChange}
      />
      <button type='submit'>{this.props.buttonText}</button>
      </form>
    );
  }
}

ParcelForm.propTypes = {
  onComplete: PropTypes.func,
  parcel: PropTypes.object,
  buttonText: PropTypes.string,
};
