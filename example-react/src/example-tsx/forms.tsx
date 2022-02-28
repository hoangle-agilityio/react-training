import React from "react";

export class NameForm extends React.Component {
  state: {
    name: string;
    numberOfGuests: number;
  };

  constructor(props: Object) {
    super(props);
    this.state = {
      name: "",
      numberOfGuests: 2,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: { target: { value: string | number; name: string } }) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  handleSubmit(event: any) {
    alert(`A name was submitted: ${this.state.name} : ${this.state.numberOfGuests}`);
    event.preventDefault();
  }

  render(): JSX.Element {
    return (
      <div>
        <h1>Forms</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </label>
          <label>
            Number Of Guests:
            <input type="number" name="numberOfGuests" value={this.state.numberOfGuests} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export class EssayForm extends React.Component {
  input: React.RefObject<HTMLTextAreaElement>;

  constructor(props: Object) {
    super(props);
    this.input = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: any) {
    alert("An essay was submitted: " + this.input.current?.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea defaultValue="Write here..." ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export class FlavorForm extends React.Component {
  state: { value: string };

  constructor(props: Object) {
    super(props);
    this.state = { value: "mango" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: { target: { value: string } }) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event: any) {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export class FileInput extends React.Component {
  fileInput: React.RefObject<any>;

  constructor(props: Object) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }

  handleSubmit(event: any) {
    event.preventDefault();
    alert(
      `Selected file - ${this.fileInput.current.files[0].name}`
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload file:
          <input type="file" ref={this.fileInput} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
