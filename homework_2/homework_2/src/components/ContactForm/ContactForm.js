import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';

const INITIAL_STATE = {
  name: "",
  number: "",
};

export default class ContactForm extends Component {
  state = {...INITIAL_STATE };

  handelChangeForm = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handelFormSubmit = ({ event }) => {
    event.preventDefault();

    const { name, number } = this.state;
    const { onAdd } = this.props;
    const isValidatedForm = this.validateForm();

    if (!isValidatedForm) return;

    onAdd.onSubmit({ id: uuidv4(), name, number });

    // this.props.onSubmit({ ...this.state });
    this.resetForm();
    return onAdd;
  };

  validateForm = () => {
    const { name, number } = this.state;
    const { onCheckUnique } = this.props;
    if (!name || !number) {
      alert("Some field is empty");
      return false;
    }
    return onCheckUnique(name);
  };

  resetForm = () => this.setState({...INITIAL_STATE});

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handelFormSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={this.handelChangeForm}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Enter phone number"
          value={number}
          onChange={this.handelChangeForm}
        />
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}

// export default ContactForm
