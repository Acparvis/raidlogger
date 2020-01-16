import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Consumable extends Component {
    render() {
        const data = this.props;
        return (
            <div>
                <p>{data?.data?.name}</p>
                <label>
                    Number per raid
                    <input type="number" value={data?.data?.expectedPrice}/>
                </label>
                <label>
                    Price per unit (g)
                    <input type="number" value={data?.data?.numberPerRaid}/>
                </label>
            </div>
        );
    }
}

Consumable.propTypes = {};

export default Consumable;