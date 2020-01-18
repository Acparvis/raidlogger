import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

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
        return total + Math.round((consumable.numberPerRaid - consumable.currentStock) * consumable.expectedPrice);
    }

    render() {
        const {raidsPerWeek} = this.props;


        return (
            <div className="flex flex-row justify-center mt-16">
                <div className="p-2">
                    <div
                        className="inline-flex items-center bg-white leading-none text-pink-600 rounded-full p-2 shadow text-teal text-sm">
                        <span className="inline-flex px-2">Gold per raid:</span>
                        <span
                            className="inline-flex bg-pink-600 text-white rounded-full h-6 px-3 justify-center items-center">{this.pricePerRaid()} g</span>

                    </div>
                </div>

                <div className="p-2">
                    <div
                        className="inline-flex items-center bg-white leading-none text-purple-600 rounded-full p-2 shadow text-sm">
                        <span
                            className="inline-flex px-2">Gold per week:</span>
                        <span
                            className="inline-flex bg-purple-600 text-white rounded-full h-6 px-3 justify-center items-center text-">{this.pricePerRaid() * raidsPerWeek } g</span>

                    </div>
                </div>

                <div className="p-2">
                    <div
                        className="inline-flex items-center bg-white leading-none text-purple-600 rounded-full p-2 shadow text-teal text-sm">
                        <span className="inline-flex px-2">Gold per month:</span>
                        <span
                            className="inline-flex bg-indigo-600 text-white rounded-full h-6 px-3 justify-center items-center">{this.pricePerRaid() * raidsPerWeek * 4} g</span>
                    </div>
                </div>
            </div>

        );
    }
}

GoldDataDisplay.propTypes = {};

export default connect(mapStateToProps)(GoldDataDisplay);