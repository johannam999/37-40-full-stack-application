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

    let JSXEditing = null;
    let JSXDisplay = null;
    let JSXPlant = null;

    if (profile && plant) {
      JSXEditing =
      <div>
        <PlantForm plant={plant} onComplete={this.handleUpdate}/>
       
        <button onClick={() => this.setState({ editing: false })}> Cancel</button>
      </div>;

      JSXDisplay = 
      <div>
        <p>{profile.firstName}</p>
       
const mapDispatchToProps = dispatch => ({
  plantCreate: plant => dispatch(plantActions.createPlantRequest(plant)),
  plantUpdate: plant => dispatch(plantActions.updatePlantRequest(plant)), 
});

export default connect(mapStateToProps, mapDispatchToProps)(Plant); 

