import React from "react";
import Order from "./Order";
import Product from "./Product";

class AdminServices extends React.Component {
    constructor(props) {
        super(props);
        this.state= {orders :[], products:[]}
        this.getAllOrders = this.getAllOrders.bind(this);
        this.getAllProducts = this.getAllProducts.bind(this);
    }
    componentDidMount() {
        this.getAllOrders();
        this.getAllProducts();
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
    getAllProducts() {
        Product.getAll(this.state.next)
            .then(data=>{
                this.setState (
                    {
                        products:[...this.state.products]
                    }
                )
            })
    }

    addProduct(){
        Product.addProduct();
    }

    removeProduct(){
        Product.removeProduct();
    }
    updateProduct(){
        Product.updateProduct();
    }

    render(){
        return(
            <div class ="container">
                <div class = "row" >
                    <div class= "col">
                        In this coulumn we could have seen the order list
                        {this.state.orders}
                    </div>
                    <div class= "col">
                        {this.state.products}
                        <p>In this coulumn we could have seen the products list and
                            where we could have opened, updated or deleted a product.</p>
                        <p>Instead we added a bunch of test to try this functions</p>
                        <ul>
                            <li onClick={this.addProduct}>Add a product</li>
                            <li onClick={this.removeProduct}>Remove a product</li>
                            <li onClick={this.updateProduct}>Update a product</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default AdminServices;