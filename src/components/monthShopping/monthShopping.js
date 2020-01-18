import React, {Component} from 'react';
import {connect} from "react-redux";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

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
        return results;
    }

    render() {
        const { month, styling } = this.props;

        return (
            <div className="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2">
                <div className={`${styling} border rounded shadow p-2`}>
                    <div className="flex flex-row items-center">
                        <div className="flex-shrink pl-1 pr-4"><i
                            className="fa fa-wallet fa-2x fa-fw fa-inverse"></i></div>
                        <div className="flex-1 text-right">
                            <h5 className="text-white text-3xl">Month {month}</h5>


                                {this.getMonthlyList().map((item) => {
                                                    return (

                                                        <h3 className="text-white">{item.name} x {item.number}<span className="text-green-400"><i
                                                            className="fas fa-caret-down"></i></span></h3>


                                                    )
                                                })}

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default connect(mapStateToProps)(MonthShopping);