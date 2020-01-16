import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import Consumable from "../consumable/consumable";

const mapStateToProps = state => {
    let consumables = state.consumables;

    return {
        consumables: consumables,
    }
};

class ConsumableList extends Component {
    render() {

        const {consumables} = this.props;

        return (
            <div>
                {JSON.stringify(consumables)}

                {consumables.map((consumable, index) => <Consumable data={consumable} index={index}/>)}
            </div>
        );
    }
}

ConsumableList.propTypes = {};

export default connect(mapStateToProps)(ConsumableList);