import * as React from "react";
import WeatherItem from "./WeatherItem";
import {Icon} from "../hooks/defineIcon";
import {useRef} from "react";


function Weather(weatherData) {
    const firstUpdate = useRef(true);

    if (firstUpdate.current) {
        firstUpdate.current = false;
        return (
            <div className="col-12">
                <p className="alert-warning p-2">Por favor, utilize o formulário acima para efetuar uma pesquisa.</p>
            </div>
        )
    } else {
        console.log(weatherData.weatherData.cod)
        if (weatherData.weatherData.cod !== 200) {
            return (
                <div className="col-12">
                    <p className="alert-danger p-2">Ocorreu um erro. Por favor tente pesquisar novamente.</p>
                </div>
            )
        } else {
            // setting date using the timestamp
            let currentDate = new Date(weatherData.weatherData.dt * 1000);
            let currentTemp = Math.round(weatherData.weatherData.main.temp ?? 0);
            return (
                <div className="pt-5 ps-4 pe-4 holder">
                    <div className="row">
                        <div className="col-lg-6 col-sm-4 col-12">
                            <div className="current-weather">
                                <p className="mb-1">{currentDate.toLocaleString('pt', {
                                    hour: 'numeric',
                                    minute: 'numeric'
                                })} | {currentDate.toLocaleString('pt', {
                                    month: 'long',
                                    day: 'numeric',
                                })}</p>
                                <h1 className="mb-1">{weatherData.weatherData.name}</h1>
                                <h3 className="d-flex flex-row align-items-center"><Icon
                                    props={weatherData.weatherData.weather["0"].main}/>
                                    <span
                                        className="d-block ms-2">{currentTemp}ºC</span></h3>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-8 col-12 mt-sm-0 mt-5">
                            <WeatherItem weatherItemData={weatherData.weatherData}/>
                        </div>
                    </div>
                </div>
            )
        }


    }


}

export default Weather;