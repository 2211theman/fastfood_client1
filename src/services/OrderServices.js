import React from "react";
import Order from "./Order";
class OrderServices extends React.Component {
    constructor(props) {
        super(props);
        this.state={orders : []};
        this.getAllOrders = this.getAllOrders.bind(this);
    }
    componentDidMount() {
        this.getAllOrders();
    }

    getAllOrders() {
        Order.getAllOrders()
            .then(data=>{
            this.setState (
                {
                    orders:[...this.state.orders]
                }
            )
        })
    }
    openOrder() {
        Order.openOrderFromQueue();
    }
    closeOrder() {
        Order.closeOrderFromQueue()
    }

    render() {
        /*with the first check we make sure that the orders are
        in the state then we could have handled single orders
        but fetch is not working so we put some tests */
        return(
            this.state.orders.length >0 ? (
                    <>
                        <div className = "row">
                            {this.state.orders}
                        </div>
                    </>
                )
                :
                <div>
                    <p>If we had all the orders we could have seen them right here,
                        <br></br>but unfortunately we don't, so i tried to open and close an order passing the productId directly to the functions</p>
                    <ul>
                        <li onClick={this.openOrder}>Open a Test Order</li>
                        <li onClick={this.closeOrder}>Close a Test Order</li>
                    </ul>
                </div>
        )
    }

}
export default OrderServices;