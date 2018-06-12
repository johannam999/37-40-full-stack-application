import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils';

const emptyState = {
  firstName: '',
  location: '',
};


class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.profile ? props.profile : emptyState;
    autoBind.call(this, ProfileForm);
  }
  
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state);
  }
 
  render() {
    return (
      <form
        className='profile-form'
        onSubmit={this.handleSubmit}>

        <textarea
          name='firstName'
          value={this.state.firstName}
          onChange={this.handleChange}
        />
        <textarea
          name='location'
          value={this.state.location}
          onChange={this.handleChange}
        />

        <button type='submit'> {this.props.profile ? 'update' : 'create'} profile </button>
      </form>
    );
  }
}

ProfileForm.propTypes = {
  onComplete: PropTypes.func,
  profile: PropTypes.object,
};

export default ProfileForm;
