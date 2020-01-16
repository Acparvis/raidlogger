import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import {deleteConsumable, updateConsumable} from "../../data/actions/state";

const mapStateToProps = state => {
    const {consumables} = state;

    return {
        consumables: consumables
    };
};

const mapDispatchToProps = dispatch => ({
    consumableUpdate: (price, quantity, index, stock) => dispatch(updateConsumable({price, quantity, index, stock})),
    consumableDelete: (id) => dispatch(deleteConsumable(id))
});

class Consumable extends Component {

    render() {
        const { data, index } = this.props;

        const { numberPerRaid, expectedPrice, currentStock, id} = this.props.data;

        return (
            <div>
                <p>{data?.name}</p>
                <label>
                    Number per raid
                    <input type="number" value={data?.numberPerRaid} onChange={(e) => this.props.consumableUpdate(data?.expectedPrice, e.target.value, index, currentStock)}/>
                </label>
                <label>
                    Price per unit (g)
                    <input type="number" value={data?.expectedPrice} onChange={(e) => this.props.consumableUpdate(e.target.value, data?.numberPerRaid, index, currentStock)}/>
                </label>
                {/*<label>*/}
                {/*    Current Stock*/}
                {/*    <input type="number" value={currentStock} onChange={(e) => this.props.consumableUpdate(data?.expectedPrice, numberPerRaid, index, e.target.value)}/>*/}
                {/*</label>*/}
                <label>
                    Price per raid
                    { Math.round(data?.expectedPrice * data?.numberPerRaid) }
                </label>
                <button onClick={() => this.props.consumableDelete(id)}>delete</button>

            </div>
        );
    }
}

Consumable.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(Consumable);