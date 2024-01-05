import React from "react";
import "./Sun.css"

export const Sun = (props) => {
    const {weather} = props

    const sunrise = weather.forecast.forecastday[0].astro.sunrise
    const sunset = weather.forecast.forecastday[0].astro.sunset
    const moonrise = weather.forecast.forecastday[0].astro.moonrise
    const moonset = weather.forecast.forecastday[0].astro.moonset

    function map_range(value, low1, high1, low2, high2) {
        return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
    }

    document.documentElement.style.setProperty("--sunX", -1);
    // document.documentElement.style.setProperty("--sunY", Math.sin(map_range(0.5, -1, 1, 0, 360)));

    return(
        <div className="sunBlock">
            <div className="path-container">

                <div className="sun-path">
                    <div className="sun"></div>
                </div>
            </div>
            <div className="times">
                <p>{sunrise}</p>
                {/* <br></br> */}
                <p>{sunset}</p>
            </div>
        </div>
    )
}