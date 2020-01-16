import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import Consumable from "../consumable/consumable";

const mapStateToProps = state => {
    let consumables = state.get("consumables");

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

                {consumables.map((consumable) => <Consumable data={consumable}/>)}
            </div>
        );
    }
}

ConsumableList.propTypes = {};

export default connect(mapStateToProps)(ConsumableList);