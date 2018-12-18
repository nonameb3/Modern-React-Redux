import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';

export class streamCreate extends Component {
  rederinput = (formProps) =>{
    console.log(formProps)
    return <input {...formProps.input}/>
  }

  render() {
    return (
      <form>
        <Field name="title" component={this.rederinput}/>
        <Field name="description" component={this.rederinput}/>
      </form>
    )
  }
}

export default reduxForm({form:'steamCreate'})(streamCreate);
