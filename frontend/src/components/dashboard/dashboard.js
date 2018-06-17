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
       plants ? plants.map((plant) => {
          return (
            <div key={plant._id}>
            <h3>{plant.commonName}</h3>
            <h3>{plant.placement}</h3>
            {/* <PlantForm 
              plant={plant}
              onComplete={this.props.doPlantUpdate}
              buttonText='Update plant'/> */}
            {/* <button onClick={() => plantUpdate(plant)}>update</button> */}
            </div>
          );
        })
        : undefined
      }
      </div>
    );
  }
}
Dashboard.propTypes = {
  doCreatePlant: PropTypes.func,
  doPlantUpdate: PropTypes.func,
  pFetchPlant: PropTypes.func,
  plants: PropTypes.array,
};
const mapStateToProps = state => ({
  plants: state.plantProfile,
});

const mapDispatchToProps = dispatch => ({
  pFetchPlant: () => dispatch(plantActions.fetchPlantRequest()), 
  doCreatePlant: plant => dispatch(plantActions.createPlantRequest(plant)),
  doPlantUpdate: plant => dispatch(plantActions.updateRequest(plant)),
  plantDelete: plant => dispatch(plantActions.updateRequest(plant)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

