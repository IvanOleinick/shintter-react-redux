import {useAppSelector} from "../app/hooks.ts";

const Weather = () => {
    const message = useAppSelector((state) => state.message);
    const weather = useAppSelector((state) => state.weather);

    if (message) return <div>{message}</div>;

    return (
        <div className="info-weather">
            <p>Location: {weather.country}, {weather.city}</p>
            <p>Temp: {weather.temp}</p>
            <p>Pressure: {weather.pressure}</p>
            <p>Sunset: {weather.sunset}</p>
        </div>
    );
};

export default Weather;
