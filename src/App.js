import React from 'react';
import { faker } from '@faker-js/faker';
import Stack from 'react-bootstrap/Stack';
import VehicleList from './VehicleList';
import Vehicle from './Vehicle';

class App extends React.Component {

constructor(props) {
  super(props);
  this.state = { vehicles: this.createCar(), selected: null };
  this.selectedCar = this.selectedCar.bind(this);
}

createCar() {
  let vehicles = [];
  for (let i = 0; i < 10; i++) {
    vehicles.push({
      manufacturer: faker.vehicle.manufacturer(),
      model: faker.vehicle.model(),
      type: faker.vehicle.type(),
      fuel: faker.vehicle.fuel(),
      vin: faker.vehicle.vin(),
      color: faker.vehicle.color()
    })
  }
  return vehicles;
}

selectedCar(vehicle) {
  this.setState({ selected: vehicle});
}

  render() {
    return (
      <Stack gap={3} direction="horizontal" className="p-5 col-md-10 offset-md-1">
        <VehicleList vehicles={this.state.vehicles} currentSelection={this.selectedCar} selected={this.state.selected}/>
        <Vehicle selected={this.state.selected} />
      </Stack>
    )
  }
}

export default App;
