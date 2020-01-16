import React, {Component} from 'react';
import MonthShopping from "../monthShopping/monthShopping";
class ShoppingList extends Component {
    render() {
        return (
            <div className="shopping-section">
                <MonthShopping month={1}/>
                <MonthShopping month={2}/>
                <MonthShopping month={3}/>
            </div>
        );
    }
}

export default ShoppingList;