import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import { updateConsumable } from "../../data/actions/state";

const mapStateToProps = state => {
    const {consumables} = state;

    return {
        consumables: consumables
    };
};

const mapDispatchToProps = dispatch => ({
    consumableUpdate: (price, quantity, index) => dispatch(updateConsumable({price, quantity, index}))
});

class Consumable extends Component {
    render() {
        const { data, index } = this.props;

        return (
            <div>
                <p>{data?.name}</p>
                <label>
                    Number per raid
                    <input type="number" value={data?.expectedPrice} onChange={(e) => this.props.consumableUpdate(e.target.value, data?.numberPerRaid, index)}/>
                </label>
                <label>
                    Price per unit (g)
                    <input type="number" value={data?.numberPerRaid} onChange={(e) => this.props.consumableUpdate(data?.expectedPrice, e.target.value, index)}/>
                </label>
                <label>
                    Price per raid
                    { Math.round(data?.expectedPrice * data?.numberPerRaid) }
                </label>

            </div>
        );
    }
}

Consumable.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(Consumable);