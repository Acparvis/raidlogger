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


        const {numberPerRaid, expectedPrice, currentStock, id} = this.props.data;

        return (
                <Card varaint="outlined" style={{ maxWidth: 345, margin: "15px", width: "100%"}}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {data?.name}
                        </Typography>
                        <Typography  color="textSecondary">
                            <label>
                                Number per raid
                                <input type="number" value={data?.numberPerRaid}
                                       onChange={(e) => this.props.consumableUpdate(data?.expectedPrice, e.target.value, index, currentStock)}/>
                            </label>
                        </Typography>
                        <Typography  color="textSecondary">
                            <label>
                                Price per unit (g)
                                <input type="number" value={data?.expectedPrice}
                                       onChange={(e) => this.props.consumableUpdate(e.target.value, data?.numberPerRaid, index, currentStock)}/>
                            </label>
                        </Typography>
                        <Typography variant="body2" component="p">

                                Price per raid {Math.round(data?.expectedPrice * data?.numberPerRaid)} g

                        </Typography>
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