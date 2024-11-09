const TemperatureDisplay = ({ temperature }) => {

    console.log(temperature)

    const fahrenheit = ((temperature * 9 / 5) || 0) + 32;

    return (
        <div>
            <p>Temperature in Celsius: {temperature} C</p>
            <p>Temperature in Fahrenheit: {fahrenheit}F</p>
        </div>
    )
}

export default TemperatureDisplay