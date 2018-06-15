import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PlantForm from '../plant-form/plant-form';
import * as plantActions from '../../actions/plant-profile';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.pFetchPlant();
  }
  render() {
    const {
      plants,
    } = this.props;
    return (
      <div className='dashboard'>
      <h2>Welcome</h2>
      <h2> This is your personal dashboard</h2>
      <PlantForm onComplete={this.props.doCreatePlant}/>
      {
        plants.map((plant) => {
          return (
            <div key={plant._id}>
            <h3>{plant.commonName}</h3>
            <h3>{plant.placement}</h3>
            {/* <ParcelForm 
              parcel={parcel}
              onComplete={parcelUpdate}
              buttonText='Update parcel'/>
            <button onClick={() => parcelDelete(parcel)}>delete</button> */}
            </div>
          );
        })
      }
      </div>
    );
  }
}
Dashboard.propTypes = {
  doCreatePlant: PropTypes.func,
  pFetchPlant: PropTypes.object,
};

const mapDispatchToProps = dispatch => ({
  pFetchPlant: () => dispatch(plantActions.fetchPlantRequest()), 
  doCreatePlant: plant => dispatch(plantActions.createPlantRequest(plant)),
});

export default connect(null, mapDispatchToProps)(Dashboard);

