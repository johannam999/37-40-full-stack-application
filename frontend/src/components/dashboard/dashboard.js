import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PlantForm from '../plant-form/plant-form';
import * as plantActions from '../../actions/plant-profile';

class Dashboard extends React.Component {
  render() {
    return (
      <div className='dashboard'>
      <h2>Welcome</h2>
      <h2> This is your personal dashboard</h2>
      <PlantForm onComplete={this.props.doCreatePlant}/>
      </div>
    );
  }
}
Dashboard.propTypes = {
  doCreatePlant: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  doCreatePlant: plant => dispatch(plantActions.createPlantRequest(plant)),
});

export default connect(null, mapDispatchToProps)(Dashboard);

