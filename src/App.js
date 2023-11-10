import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./components/hooks/useTelegram";
import Header from "./components/Header/header";

function App() {
    const {tg, onToggleButton} = useTelegram()

    useEffect(() => {
        tg.ready()
    }, []);


    return (
        <div className="App">
            <Header/>
          <button onClick={onToggleButton}>toggle</button>
        </div>
      );
}

export default App;
