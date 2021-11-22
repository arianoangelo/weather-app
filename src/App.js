import * as React from "react";
import './App.scss';
import Search from "./components/Search";
import Weather from "./components/Weather";
import {useRef, useState} from "react";

function App() {
    const firstUpdate = useRef(true);

    const [data, setData] = useState({});

    const onSearchSubmit = async (text) => {
        // Checks if is just loaded so doesn't make a needless api call.
        if (firstUpdate.current) {
            firstUpdate.current = false;
        } else {
            // Calling today's weather
            try {
                await fetch(`${process.env.REACT_APP_API_URL}/weather?q=${text.trim()}&units=metric&lang=pt&appid=${process.env.REACT_APP_API_KEY}`)
                    .then(result => result.json())
                    .then(result => {
                        setData(result);
                    });
            } catch (err) {
                console.log(err);
            }
        }
    }

    return (
        <div className={'container'}>
            <header className={'navbar navbar-dark pt-4 pb-4'}>
                <div className={'navbar-brand'}>
                    Meteorologia
                </div>
                <div>
                    <Search onSearchSubmit={onSearchSubmit}/>
                </div>
            </header>
            <Weather weatherData={data}/>
        </div>
    )
}

export default App;
