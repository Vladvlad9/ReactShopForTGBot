import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./components/hooks/useTelegram";
import Header from "./components/Header/header";
import {Route, Routes} from "react-router-dom";
import ProductList from "./components/ProductList/productList";
import Form from "./components/Form/form";

function App() {
    const {tg} = useTelegram()

    useEffect(() => {
        tg.ready()
    }, []);


    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route index element={<ProductList/>}></Route>
                <Route path={'form'} element={<Form/>}></Route>
            </Routes>
        </div>
      );
}

export default App;
