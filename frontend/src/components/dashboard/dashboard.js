import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ParcelForm from './../parcel-form/parcel-form';
import * as parcelActions from '../../actions/parcel-actions';


class Dashboard extends React.Component {
  componentDidMount() {
    this.props.parcelsFetch();
  }
  render() {
    const {
      parcels, parcelCreate, parcelUpdate, parcelDelete,
    } = this.props;
    return (
      <div className='dashboard'>
      <h2>Parcel shipping App</h2>
      <ParcelForm 
      onComplete={parcelCreate}
      buttonText='Create parcel'/>
      {
        parcels.map((parcel) => {
          return (
            <div key={parcel._id}>
            <h3>{parcel.firstName}</h3>
            <h3>{parcel.lastName}</h3>
            <h4>{parcel.address}</h4>
            <ParcelForm 
              parcel={parcel}
              onComplete={parcelUpdate}
              buttonText='Update parcel'/>
            <button onClick={() => parcelDelete(parcel)}>delete</button>
            </div>
          );
        })
      }
      </div>
    );
  }
}
Dashboard.propTypes = {
  parcelsFetch: PropTypes.func,
  parcelCreate: PropTypes.func,
  parcelUpdate: PropTypes.func,
  parcelDelete: PropTypes.func,
  parcels: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    parcels: state.parcels,
  };
};

const mapDispatchToProps = dispatch => ({
  parcelsFetch: () => dispatch(parcelActions.parcelsFetchRequest()),
  parcelCreate: parcel => dispatch(parcelActions.parcelCreateRequest(parcel)),
  parcelUpdate: parcel => dispatch(parcelActions.parcelUpdateRequest(parcel)),
  parcelDelete: parcel => dispatch(parcelActions.parcelDeleteRequest(parcel)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
