import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils';

const emptyState = {
  commonName: '',
  placement: '',
};


class PlantForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.plant ? props.plant : emptyState;
    autoBind.call(this, PlantForm);
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
        className='plant-form'
        onSubmit={this.handleSubmit}>

        <textarea
          name='commonName'
          value={this.state.commonName}
          onChange={this.handleChange}
        />
        <textarea
          name='placement'
          value={this.state.placement}
          onChange={this.handleChange}
        />

        <button type='submit'> {this.props.plant ? 'update' : 'create'} plant </button>
      </form>
    );
  }
}

PlantForm.propTypes = {
  onComplete: PropTypes.func,
  plant: PropTypes.object,
};

export default PlantForm;
