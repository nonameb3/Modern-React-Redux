import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';

export class streamForm extends Component {
  // render when have error from validate
  renderError = ({error, touched}) => {
    if(error && touched){
      return(
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    };
  }

  // formProps is auto genarate by Field
  rederinput = (formProps) => {
    const css = `field ${formProps.meta.error&&formProps.meta.touched ?'error':''}` ;
    return (
      <div className={css}>
        <label>{formProps.label}</label>
        <input {...formProps.input} autoComplete="off" type="text"/>
        {this.renderError(formProps.meta)}
      </div>
    );
  }

  // Summit action
  submit = (formValue) => {
    this.props.onSubmit(formValue);
  }

  render() {
    return (
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.submit)}>
        <Field name="title" component={this.rederinput} label="Enter Title"/>
        <Field name="description" component={this.rederinput} label="Enter Description"/>
        <button className="ui button primary">Submmit</button>
      </form>
    )
  }
}

// validate redux-form
const validate = formValue => {
  const error = {};
  if(!formValue.title){
    error.title = 'You must enter a Title.';
  } 
  if (!formValue.description){
    error.description = 'You must entter a Description.'
  }

  return error;
}

export default reduxForm({
  form:'steamCreate',
  validate: validate
})(streamForm);
