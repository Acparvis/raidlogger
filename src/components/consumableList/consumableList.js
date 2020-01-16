import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import Consumable from "../consumable/consumable";
import {addConsumable} from "../../data/actions/state";

class ConsumableList extends Component {
    constructor(props) {
        super(props);
        this.state = {consumableName: ""};
    }


    submitNewConsumable = () => {
        this.props.consumableAdd(this.state.consumableName)
    }

    render() {
        const {consumables} = this.props;

        return (
            <div>
                <input type="text" value={this.state.consumableName} onChange={(e) => this.setState({consumableName: e.target.value})}/>
                <button onClick={() => this.submitNewConsumable()}>Add consumable</button>
                {consumables.map((consumable, index) => <Consumable key={index + consumable.id} data={consumable} index={index}/>)}
            </div>
        );
    }
}

ConsumableList.propTypes = {};

function mapStateToProps(state) {

        return {
        consumables: state.consumables,
    }
}

const mapDispatchToProps = dispatch => ({
    consumableAdd: (name) => dispatch(addConsumable({name: name, expectedPrice: 0, numberPerRaid: 0}))
});

export default connect(mapStateToProps, mapDispatchToProps)(ConsumableList);