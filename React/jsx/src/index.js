import React from 'react';
import ReactDOM from 'react-dom';

const App = ()=>{
    const labelName = 'Enter name';
    return (
      <div>
        <label className="label" htmlFor="name">{labelName} here : </label>
        <input id="name" type="text"></input>
        <button style={{backgroundColor:'blue',color:'white'}}>{buttonText()}</button>
      </div>
    );
};

function buttonText(){
    return 'Click me !!';
}

ReactDOM.render(<App/>, document.querySelector('#root'));


