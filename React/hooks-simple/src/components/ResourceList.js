import React from 'react';
import UseResource from './UseResource';

const ResourceList = ({resource}) => {
  const resources = UseResource(resource);

  return (
    <div>
      {resources.map(list => <li key={list.id}>{list.title}</li>)}
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