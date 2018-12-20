import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';

export class streamCreate extends Component {
  renderError = ({error, touched}) => {
    if(error && touched){
      return(
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    };
  }

  rederinput(formProps) {
    const css = `field ${formProps.meta.error&&formProps.meta.touched ?'error':''}` ;
    return (
      <div className={css}>
        <label>{formProps.label}</label>
        <input {...formProps.input} autoComplete="off"/>
        {this.renderError(formProps.meta)}
      </div>
    );
  }

  submit(formValue){
    console.log(formValue);
  }

  render() {
    return (
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.submit)}>
        <Field name="title" component={this.rederinput.bind(this)} label="Enter Title"/>
        <Field name="description" component={this.rederinput.bind(this)} label="Enter Description"/>
        <button className="ui button primary">Submmit</button>
      </form>
    )
  }
}

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
})(streamCreate);
