// import React from 'react';
// import Adapter from 'enzyme-adapter-react-16';
// import { Provider } from 'react-redux';
// import { configure as configureEnzyme, mount } from 'enzyme';
// import configureStore from 'redux-mock-store';
// import Dashboard from '../components/dashboard/dashboard';


// configureEnzyme({ adapter: new Adapter() });

// describe('#Dashboard', () => {
//   const testState = {
//     parcels: [
//       {
//         firstName: 'Joa',
//         id: '0.123',
//         lastName: 'bebe',
//         address: '78 avenue',
        
//       }, {
//         firstName: 'kazik',
//         id: '0.123',
//         lastName: 'kowal',
//         address: '56 street',
//       },
//     ],
//     labels: [],
//   };

//   test('Testing dashboard interactions with the store', () => {
//     const mockStore = configureStore([]);

//     const mountedDashboard = mount(<Provider store={mockStore(testState)}>
//     <Dashboard/></Provider>);
//     expect(mountedDashboard.find('ParcelForm')).toBeTruthy();
//   });
// });
