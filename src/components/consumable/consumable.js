import React, {Component} from 'react';
import {connect} from "react-redux";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {deleteConsumable, updateConsumable} from "../../data/actions/state";


const mapStateToProps = state => {
    const {consumables} = state;

    return {
        consumables: consumables
    };
};

const mapDispatchToProps = dispatch => ({
    consumableUpdate: (price, quantity, index, stock) => dispatch(updateConsumable({price, quantity, index, stock})),
    consumableDelete: (id) => dispatch(deleteConsumable(id))
});

class Consumable extends Component {

    render() {
        const {data, index} = this.props;


        const {numberPerRaid, expectedPrice, currentStock, id} = this.props?.data;

        return (
            <Card varaint="outlined" style={{maxWidth: 345, margin: "15px", width: "100%"}}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {data?.name}
                    </Typography>
                    <Typography color="textSecondary">

                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                            Number per raid
                        </label>
                        <input
                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="rpw"
                            type="number"
                            value={data?.numberPerRaid}
                            onChange={(e) => this.props.consumableUpdate(data?.expectedPrice, e.target.value, index, currentStock)}
                        />

                    </Typography>
                    <Typography color="textSecondary">
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                            Gold per unit
                        </label>
                        <input
                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="rpw"
                            type="number"
                            value={data?.expectedPrice}
                            onChange={(e) => this.props.consumableUpdate(e.target.value, data?.numberPerRaid, index, currentStock)}
                        />
                    </Typography>

                    <div
                        className="inline-flex items-center bg-white leading-none text-teal-600 rounded-full p-2 shadow text-teal text-sm">
                        <span className="inline-flex px-2">Price per raid</span>
                        <span
                            className="inline-flex bg-teal-600 text-white rounded-full h-6 px-3 justify-center items-center">{Math.round(data?.expectedPrice * data?.numberPerRaid)} g</span>
                    </div>

                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => this.props.consumableDelete(id)}>delete</Button>
                </CardActions>
            </Card>
        );
    }
}

Consumable.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(Consumable);