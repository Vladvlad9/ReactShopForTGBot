import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./components/hooks/useTelegram";
import {Route, Routes} from "react-router-dom";
import Form from "./components/Form/form";
import ProductList from "./components/ProductList/productList";
import AppBar from "./components/Appbar/AppBar";

function App() {
    const {tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <div className="App">
            <AppBar />
            <Routes>
                <Route index element={<ProductList />}/>
                <Route path={'form'} element={<Form />}/>
            </Routes>
        </div>
    );
}

export default App;
