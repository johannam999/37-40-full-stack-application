import React from 'react';
import { connect } from 'react-redux'; // its a big object and we only want to extact and import small part connect
import PropTypes from 'prop-types';

import * as clientProfileActions from '../../actions/client-profile';
import * as routes from '../../routes';


import autoBind from '../../utils';
import ProfileForm from '../profile-form/profile-form';


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    }; // this is UI state bc its not coming directly from the store
    autoBind.call(this, Profile);
  }

  // member functions
  // ----------------------
  handleCreate(profile) {
    this.props.profileCreate(profile)
      .then(() => {
        // the profile has been created we inform/interact with the user
        this.props.history.push(routes.DASHBOARD_ROUTE);
        // add .catch
      });
  }

  handleUpdate(profile) {
    this.props.profileUpdate(profile);
    this.setState({ editing: false });
  }
  // life-cycle hooks
  // ----------------------
  render() {
    const {
      profile,
    } = this.props;

    let JSXEditing = null;
    let JSXDisplay = null;
    let JSXProfile = null;

    if (profile) {
      JSXEditing =
      <div>
        <ProfileForm profile={profile} onComplete={this.handleUpdate}/>
       
        <button onClick={() => this.setState({ editing: false })}> Cancel</button>
      </div>;

      JSXDisplay = 
      <div>
        <p>{profile.firstName}</p>
        <p>{profile.location}</p>
        <button onClick={() => this.setState({ editing: false })}>Edit</button>
      </div>;
      JSXProfile = 
      <div>
        <h2>{profile.firstName}</h2>
        <h3>{profile.location}</h3>
        {this.state.editing ? JSXEditing : JSXDisplay }
      </div>;
    }
    return (
      <div>
        <h1> PROFILE</h1>
        {profile ? JSXProfile : <ProfileForm onComplete={this.handleCreate}/>}
      </div>
    );
  }
}

Profile.propTypes = {
  profileFetch: PropTypes.object,
  profileUpdate: PropTypes.func,
  profileCreate: PropTypes.func,
  history: PropTypes.object, // this is a class object
};

const mapStateToProps = state => ({
  profile: state.clientProfile,
});

const mapDispatchToProps = dispatch => ({
  profileCreate: profile => dispatch(clientProfileActions.createRequest(profile)),
  profileUpdate: profile => dispatch(clientProfileActions.updateRequest(profile)), 
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile); 
// connecting to the store,  since connect returns a function, we send it with profile component
