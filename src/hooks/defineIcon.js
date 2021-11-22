import {TiWeatherCloudy, TiWeatherShower, TiWeatherSnow} from "react-icons/ti";
import {RiMistFill, RiThunderstormsFill} from "react-icons/ri";
import {BsFillCircleFill} from "react-icons/bs";
import * as React from "react";

export function Icon({props}) {
    var atmosphereBlocker = [
        'Mist',
        'Smoke',
        'Haze',
        'Dust',
        'Fog',
        'Sand',
        'Ash',
    ];

    if (props === "Clouds") {
        return (
            <TiWeatherCloudy/>
        )
    } else if (atmosphereBlocker.includes(props)) {
        return (
            <RiMistFill/>
        )
    } else if (props === "Snow") {
        return (
            <TiWeatherSnow/>
        )
    } else if (props === "Rain") {
        return (
            <TiWeatherShower/>
        )
    } else if (props === "Clear") {
        return (
            <BsFillCircleFill/>
        )
    } else if (props === "Thunderstorm") {
        return (
            <RiThunderstormsFill/>
        )
    }
}