import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react';
import userServices from "../services/User"


class User extends React.Component{
    constructor(props) {
        super(props);
        this.state = {products:[]}
        this.handleGet = this.handleGet.bind(this);
    }

    componentDidMount() {
        this.handleGet();
    }
    handelGet(){
        userServices.getAll()
            .then (data => {
                this.setState({
                    products:[...this.state.products, data[0].map(p =>
                    <Prodotti data={p} />)]
                })
            })
    }
render() {
        return (
            <div className="col-lg-12 pb-1">
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-header">
                            Prodotti
                        </h3>
                    </div>
                </div>
            </div>
        );
}

}