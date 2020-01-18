import React, {Component} from 'react';
import MonthShopping from "../monthShopping/monthShopping";

class ShoppingList extends Component {
    render() {
        return (
            <div className="shopping-section">
                <div className="flex flex-wrap mb-2">
                    <MonthShopping month={1} styling={"bg-green-600"}/>
                    <MonthShopping month={2} styling={"bg-blue-600"}/>
                    <MonthShopping month={3} styling={"bg-orange-600"}/>
                </div>
            </div>
        );
    }
}

export default ShoppingList;