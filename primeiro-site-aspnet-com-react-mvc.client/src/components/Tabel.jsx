import { useEffect, useState } from 'react';
function Tabel() {
    const [forecasts, setForecasts] = useState();

    useEffect(() => {
        populateWeatherData();
    }, []);

    const contents = forecasts === undefined ? (
        <p>
            <em>
                Loading... Please refresh once the ASP.NET backend has started. See{' '}
                <a href="https://aka.ms/jspsintegrationreact">
                    https://aka.ms/jspsintegrationreact
                </a>{' '}
                for more details.
            </em>
        </p>
    ) : (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Date</th>
                    <th scope="col">Temp. (C)</th>
                    <th scope="col">Temp. (F)</th>
                    <th scope="col">Summary</th>
                </tr>
            </thead>
            <tbody>
                {forecasts.map((forecast, index) => (
                    <tr key={forecast.date}>
                        <th scope="row">{index + 1}</th>
                        <td>{forecast.date}</td>
                        <td>{forecast.temperatureC}</td>
                        <td>{forecast.temperatureF}</td>
                        <td>{forecast.summary}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    return (
        <div className="container">
            <div className="d-flex justify-content-center align-items-center vh-100">
                {contents}
            </div>
        </div>

    );

    async function populateWeatherData() {
        const response = await fetch('weatherforecast');
        if (response.ok) {
            const data = await response.json();
            setForecasts(data);
        }
    }
}

export default Tabel;