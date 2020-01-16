import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

const mapStateToProps = state => {
    let raidsPerWeek = state.raidsPerWeek;
    let consumables = state.consumables;

    return {
        raidsPerWeek: raidsPerWeek,
        consumables: consumables,
    }
};


class GoldDataDisplay extends Component {

    pricePerRaid = () => {

        //totals up all consumable prices for one raid
        let total = 0;

        //reduce works out the cost per raid
        return this.props.consumables.reduce(this.getCost, 0)

    }

    getCost = (total, consumable) => {
        return total + Math.round(consumable.numberPerRaid * consumable.expectedPrice);
    }

    render() {
        const {raidsPerWeek} = this.props;

        return (
            <div>
                Gold data goes here

                <p>Price per raid: {this.pricePerRaid()}</p>

                <p>Price per week: {this.pricePerRaid() * raidsPerWeek }</p>

                <p>Gold Per Month: {this.pricePerRaid() * raidsPerWeek * 4}</p>

            </div>
        );
    }
}

GoldDataDisplay.propTypes = {};

export default connect(mapStateToProps)(GoldDataDisplay);