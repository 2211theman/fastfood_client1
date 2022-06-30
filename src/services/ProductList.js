import React from "react";
import Product from "./Product";
import Item from "./Item";
class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {products: [], next : null}
        this.handleGet = this.handleGet.bind(this);
    }

    componentDidMount() {
        this.handleGet();
    }

    handleGet() {
        Product.getAll(this.state.next)
            .then(data=>{
                this.setState (
                    {
                        products:[...this.state.products]
                    }
                )
            })
    }

    handleAddItem() {
        Item.addItemToCart();
    }
    render() {
        return (
            this.state.products.length >0 ? (
                <>
                    <div className = "row">
                        {this.state.products}
                    </div>
                </>
            )
                : <>
                Nessun Prodotto

                    <div className="card">
                        <div className="card-body" onClick={this.handleAddItem}>
                            <h5 className="card-title" id="product" >
                               Add a test product to Cart
                            </h5>
                        </div>
                    </div>
                </>
        )
    }
}
//for the preflight problems we added just test products to be added on cart
export default ProductList;