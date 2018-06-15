import React from 'react';
import { connect } from 'react-redux'; 
import PropTypes from 'prop-types';

import * as plantActions from '../../actions/plant-profile';
import * as routes from '../../routes';


import autoBind from '../../utils';
import PlantForm from '../plant-form/plant-form';


class Plant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
    autoBind.call(this, Plant);
  }

  // member functions
  // ----------------------
  handleCreate(plant) {
    this.props.plantCreate(plant)
      .then(() => {
        this.props.history.push(routes.PLANT_ROUTE);
        // add .catch
      });
  }

  handleUpdate(plant) {
    this.props.plantUpdate(plant);
    this.setState({ editing: false });
  }
  // life-cycle hooks
  // ----------------------
  render() {
    const {
      plant, profile,
    } = this.props;

    let JSXPlantEditing = null;
    let JSXPlantDisplay = null;
    let JSXPlant = null;

    if (profile && plant) {
      JSXPlantEditing =
      <div>
        <PlantForm plant={plant} onComplete={this.handleUpdate}/>
       
        <button onClick={() => this.setState({ editing: false })}> Cancel</button>
      </div>;

      JSXPlantDisplay = 
      <div>
        <p>{profile.commonName}</p>
        <p>{profile.placement}</p>
        <button onClick={() => this.setState({ editing: true })}>Edit</button>
      </div>;

      JSXPlant = 
      <div>
        <h2>{plant.commonName}</h2>
        <h3>{plant.placement}</h3>
        {this.state.editing ? JSXPlantEditing : JSXPlantDisplay }
      </div>;
    }
    return (
      <div>
        <h1> NEW PLANT </h1>
        {plant ? JSXPlant : 
        <PlantForm onComplete={this.handleCreate}/>}
      </div>
    );
  }
}

Plant.propTypes = {
  pFetchPlant: PropTypes.object,
  plantUpdate: PropTypes.func,
  plantCreate: PropTypes.func,
  history: PropTypes.object, 
};

const mapStateToProps = state => ({
  plant: state.plantProfile,
});

const mapDispatchToProps = dispatch => ({
  plantCreate: plant => dispatch(plantActions.createPlantRequest(plant)),
  plantUpdate: plant => dispatch(plantActions.updatePlantRequest(plant)), 
  // pFetchPlant: () => dispatch(plantActions.fetchPlantRequest()), 
});

export default connect(mapStateToProps, mapDispatchToProps)(Plant); 

