import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Consumable from "../consumable/consumable";
import {addConsumable, changeRaids} from "../../data/actions/state";

class ConsumableList extends Component {
    constructor(props) {
        super(props);
        this.state = {consumableName: ""};
    }


    submitNewConsumable = () => {
        this.props.consumableAdd(this.state.consumableName)
        this.setState({consumableName: ""});
    }

    render() {
        const {consumables, raidsPerWeek} = this.props;

        return (
            <>
            <div className="topbar-container">
                <div>
                    Raids per week
                    <input type="number" value={raidsPerWeek} onChange={(e) => this.props.changeRaidNumber(e.target.value)}/>
                </div>
                <div>
                <input
                    type="text" value={this.state.consumableName}
                    onChange={(e) => this.setState({consumableName: e.target.value})}
                />
                <button onClick={() => this.submitNewConsumable()}>Add consumable</button>
                </div>
            </div>
                {consumables.map((consumable, index) => <Consumable key={index + consumable.id} data={consumable}
                                                                    index={index}/>)}
                </>
        );
    }
}

ConsumableList.propTypes = {};

function mapStateToProps(state) {

    return {
        consumables: state.consumables,
        raidsPerWeek: state.raidsPerWeek
    }
}

const mapDispatchToProps = dispatch => ({
    consumableAdd: (name) => dispatch(addConsumable({name: name, expectedPrice: 0, numberPerRaid: 0})),
    changeRaidNumber: (number) => dispatch(changeRaids(number))
});

export default connect(mapStateToProps, mapDispatchToProps)(ConsumableList);