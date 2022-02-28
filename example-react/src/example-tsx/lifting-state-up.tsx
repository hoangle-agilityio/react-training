import React from "react";

type Boiling = {
  celsius: number;
};

type Temp = {
  temperature: string,
  scale: string,
  onTemperatureChange?: any,
};

function BoilingVerdict(props: Boiling) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }

  return <p>The water would not boil.</p>;
}

const scaleNames: any = {
  c: "Celsius",
  f: "Fahrenheit",
}

class Temperature extends React.Component {
  state: { temperature: string };
  props: Temp;

  constructor(props: Temp) {
    super(props);
    this.props = props;
    this.state = { temperature: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: { target: { value: string } }) {
    console.log(event.target.value);
    this.props.onTemperatureChange(event.target.value);
  }

  render(): JSX.Element {
    const temperature: string = this.props.temperature;
    const scale: string = this.props.scale;
    return (
      <div>
        <p>Enter temperature in {scaleNames[scale]}:</p>
        <input type="text" value={temperature} onChange={this.handleChange} />
      </div>
    );
  }
}

function toCelsius(fahrenheit: number) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius: number) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature: string, convert: (input: number) => any) {
  const input: number = parseFloat(temperature);

  if (Number.isNaN(input)) {
    return "";
  }

  const output: number = convert(input);
  const rounded = Math.round(output * 1000) / 1000;

  return rounded.toString();
}

export default class Calculator extends React.Component {
  state: Temp;

  constructor(props: Object) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = { temperature: '', scale: 'c' };
  }

  handleCelsiusChange(temperature: string) {
    this.setState({ scale: 'c', temperature });
  }

  handleFahrenheitChange(temperature: string) {
    this.setState({ scale: 'f', temperature });
  }

  render(): React.ReactNode {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <h1>Lifting State Up</h1>
        <Temperature scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
        <Temperature scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}
