import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class VehicleList extends React.Component {

createList(vehicle, i) {
    return (
        <ListGroup.Item key={i} action active={this.props.selected === vehicle} onClick={this.props.currentSelection.bind(this, vehicle)}>
            { vehicle.manufacturer } { vehicle.model }
        </ListGroup.Item>
    )
}

    render() {
        return (
            <ListGroup>
                {this.props.vehicles.map((v, i) => this.createList(v, i))}
            </ListGroup>
        )
    }
}

export default VehicleList;