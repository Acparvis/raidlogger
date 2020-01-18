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
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                            Raids per week
                        </label>
                        <input
                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="rpw"
                            type="number"
                            value={raidsPerWeek}
                            onChange={(e) => this.props.changeRaidNumber(e.target.value)}
                        />
                    </div>


                    <div>
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                            Add Consumable
                        </label>
                        <input
                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="rpw"
                            type="text"
                            value={this.state.consumableName}
                            onChange={(e) => this.setState({consumableName: e.target.value})}
                        />


                        <button
                            className="bg-white text-gray-800 rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                            onClick={() => this.submitNewConsumable()} >
                            <span className="text-sm">Add</span>
                        </button>
                    </div>
                </div>
                <div className="list-feed-container">
                    {consumables.map((consumable, index) => <Consumable key={index + consumable.id} data={consumable}
                                                                        index={index}/>)}
                </div>
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