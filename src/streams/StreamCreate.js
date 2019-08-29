import React from "react";
import { Field, reduxForm } from "redux-form";
class StreamCreate extends React.Component {
  renderInput(formProps) {
    console.log(formProps.meta);
    return (
      <div>
        <label>{formProps.label} </label>
        <input {...formProps.input} autoComplete="off" />
      </div>
    );
  }

  onSumbit(event) {
    console.log(event);
  }

  render() {
    console.log(this.props);
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSumbit)}
        className="ui form"
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
export default reduxForm({
  form: "StreamCreate",
  validate
})(StreamCreate);
