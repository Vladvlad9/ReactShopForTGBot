import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Items from "./components/Items/Items";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
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
    }

    render() {
        return (
            <div className='wrapper'>
                <Header />
                <Items items={this.state.items}/>
                <Footer />
            </div>
        );
    }
}

export default App;
