import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class VehicleList extends React.Component {

createList(vehicle) {
    return (
        <ListGroup.Item>
            { vehicle.manufacturer } { vehicle.model }
        </ListGroup.Item>
    )
}

    render() {
        return (
            <ListGroup>
                {this.props.vehicles.map((v) => this.createList(v))}
            </ListGroup>
        )
    }
}

export default VehicleList;