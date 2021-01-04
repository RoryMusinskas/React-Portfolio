import React from "react";
import "../stylesheets/contact.css";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

  render() {
    const { status } = this.state;
    return (
      <section id="contact">
        <div id="contact-me">
          <h1>Feel free to get in touch</h1>
        </div>
        <form
          id="contact-form"
          onSubmit={this.submitForm}
          action="https://formspree.io/f/mbjppvnn"
          method="POST"
        >
          <div className="input-wrapper">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              name="name"
              id="name"
              value={this.state.name}
              onChange={this.onInputChange}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              name="email"
              id="email"
              value={this.state.email}
              onChange={this.onInputChange}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="subject">Subject *</label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={this.state.subject}
              onChange={this.onInputChange}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="message">Message *</label>
            <textarea
              name="message"
              id="message"
              cols="50"
              rows="15"
              value={this.state.message}
              onChange={this.onInputChange}
              required
            ></textarea>
          </div>
          {status === "SUCCESS" ? (
            <p>Thanks!</p>
          ) : (
            <button id="submit">Submit</button>
          )}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
      </section>
    );
  }
}
