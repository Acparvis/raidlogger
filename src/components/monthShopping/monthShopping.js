import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

const mapStateToProps = state => {
    const {consumables} = state;

    return {
        consumables: consumables
    };
};

class MonthShopping extends Component {
    getMonthlyList = () => {
        const {consumables, month} = this.props;



        let results = [];

        consumables.map((con) => results.push({ name: con.name, number: (con.numberPerRaid * month )}))

        console.log(results);
        return results;
    }

    render() {
        const { month } = this.props;

        return (
            <div>
                <h3>{month} month</h3>
                <ul>
                    {this.getMonthlyList().map((item) => {
                        return (
                            <li>
                                {item.name} x {item.number}
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

MonthShopping.propTypes = {};

export default connect(mapStateToProps)(MonthShopping);