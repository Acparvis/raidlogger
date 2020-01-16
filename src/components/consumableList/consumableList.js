import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import Consumable from "../consumable/consumable";

class ConsumableList extends Component {
    render() {

        // const {consumables} = this.props;

        return (
            <div>
                {JSON.stringify(this.props.consumables)}

                {this.props.consumables.map((consumable, index) => <Consumable key={index + consumable.id} data={consumable} index={index}/>)}
            </div>
        );
    }
}

ConsumableList.propTypes = {};

function mapStateToProps(state) {

        return {
        consumables: state.consumables,
    }
}

export default connect(mapStateToProps)(ConsumableList);