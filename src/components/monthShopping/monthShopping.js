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
        const { month } = this.props;

        return (
            <div className="shopping-month">
                {/*<h3 style={{textAlign: "left"}}>{month} month</h3>*/}
                <List >
                    <ListSubheader>
                        <h3 style={{ textAlign: "left"}}>{month} month</h3>
                    </ListSubheader>
                    {this.getMonthlyList().map((item) => {
                        return (
                            <ListItem>
                                {item.name} x {item.number}
                            </ListItem>
                        )
                    })}
                </List>
            </div>
        );
    }
}


export default connect(mapStateToProps)(MonthShopping);