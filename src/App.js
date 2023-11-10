import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Items from "./components/Items/Items";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: [],

            items: [
                {
                    id: 0,
                    title: "Стул",
                    img: "stul.jpg",
                    description: "крутой стул",
                    category: "chairs",
                    price: "49.99"
                },
                {
                    id: 1,
                    title: "Диван",
                    img: "ctol.jpg",
                    description: "крутой диван",
                    category: "chairs",
                    price: "49.99"
                }
            ]
        }
        this.addToOrder = this.addToOrder.bind(this)
    }
    addToOrder(items){
        let isInArray = false
        this.state.orders.forEach(el => {
            if(el.id === items.id){
                isInArray=true
            }
        })
        if(!isInArray)
            this.setState({orders:[...this.state.orders, items]})
    }
    render() {
        return (
            <div className='wrapper'>
                <Header orders={this.state.orders}/>
                <Items items={this.state.items} onAdd={this.addToOrder}/>
                <Footer />
            </div>
        );
    }
}

export default App;
