import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from ".././actions";
class StreamCreate extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div>
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = formProps => {
    // with out erroe its give undefuie
    return (
      <div>
        <label>{formProps.label} </label>
        <input {...formProps.input} autoComplete="off" />
        {this.renderError(formProps.meta)}
      </div>
    );
  };

  onSumbit = event => {
    this.props.createStream(event);
  };

  render() {
    console.log(this.props);
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSumbit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="descriptition"
          component={this.renderInput}
          label="Enter Descriptition"
        />
        <button className="ui button primary">Sumbit</button>
      </form>
    );
  }
}
const validate = formValue => {
  const error = {};
  if (!formValue.title) {
    error.title = "You must enter a title"; //same name as  Field name
  }
  if (!formValue.descriptition) {
    error.descriptition = "You must enter a descriptition";
  }
  return error;
};
const formWraped = reduxForm({
  form: "StreamCreate",
  validate
})(StreamCreate);

export default connect(
  null,
  { createStream }
)(formWraped);
