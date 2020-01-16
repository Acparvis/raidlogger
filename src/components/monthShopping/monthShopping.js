import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

const mapStateToProps = state => {
    const {consumables, raidsPerWeek} = state;

    return {
        consumables: consumables,
        raidsPerWeek: raidsPerWeek
    };
};

class MonthShopping extends Component {
    getMonthlyList = () => {
        const {consumables, month, raidsPerWeek} = this.props;



        let results = [];

        consumables.map((con) => results.push({ name: con.name, number: (con.numberPerRaid * month * 4 * raidsPerWeek)}))

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