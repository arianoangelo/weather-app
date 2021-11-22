import * as React from "react";
import {useEffect, useRef, useState} from "react";
import {Icon} from "../hooks/defineIcon";

function WeatherItem(weatherItemData) {
    const firstUpdate = useRef(true);

    const [dataDay, setDataDay] = useState();
    useEffect(() => {
        fetchDays();
    }, [weatherItemData]);

    useEffect(() => {
    }, [dataDay]);

    // Getting the forecast
    const fetchDays = async () => {
        const data = await fetch(
            `${process.env.REACT_APP_API_URL}/onecall?lat=${weatherItemData.weatherItemData.coord.lat}&lon=${weatherItemData.weatherItemData.coord.lon}&exclude=hourly,minutely&units=metric&appid=${process.env.REACT_APP_API_KEY}`
        );
        const days = await data.json();
        setDataDay(days);
    }


    if (firstUpdate.current) {
        firstUpdate.current = false;
        return (
            <>
            </>
        )
    } else {
        return (
            <>
                <h3 className="forecast-container-title">Previsão (5 dias)</h3>
                <ul className="row forecast-container flex-row">
                    {dataDay.daily
                        .filter((item, index) => index < 5)
                        .map((item, index) => {
                            return (
                                <li key={index} className="col-lg-4 col-sm-6 col-6">
                                    <p className="mb-1">{(new Date(item.dt * 1000).toLocaleString('pt', {
                                        month: 'long',
                                        day: 'numeric',
                                    }))}</p>
                                    <h1 className="mb-1 d-flex flex-row align-items-center"><Icon
                                        props={item.weather["0"].main}/><span
                                        className="d-block ms-2">{Math.round(item.temp.day)}ºC</span></h1>
                                </li>
                            )
                        })}
                </ul>
            </>

        )
    }
}

export default WeatherItem;