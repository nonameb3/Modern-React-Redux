import React, { useState, useEffect } from 'react';
import axios from 'axios';

// use useState, useEddect Hooks
const ResourceList = ({resource}) => {
  // set state
  const [resources, setResource] = useState([]);

  const fectResource = async (resource) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
    setResource(response.data);
  };
  
  // same as componentDidMount , Update
  useEffect(
    ()=>{
      fectResource(resource);
    },[resource] // only run when userId changed
  );


  return (
    <div>
      {resources.length}
    </div>
  );
  
};

export default ResourceList;

// Class React
// export class ResourceList extends React.Component {
//   state = {resource : []}

//   async componentDidMount(){
//     const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
//     this.setState({resource:response.data});
//   }

//   async componentDidUpdate(prevPorps){
//     if(prevPorps !== this.props){
//       const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
//       this.setState({resource:response.data});
//     }
//   }

//   render() {
//     return (
//       <div>
//         {this.state.resource.length}
//       </div>
//     );
//   }
// }