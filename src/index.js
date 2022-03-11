import React from "react";
import ReactDOM from 'react-dom';

function Child({ onAction, onResetAction }) { 
  return (
    <>
      <button onClick={onAction}> 
        Click Me!
      </button>
      <button onClick={onResetAction}>
        Reset!
      </button>
    </>
  ); 
}

// class CountingParent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { actionCount: 0, count: 1 };
//     // Bind the event handler function, so that its // `this` binding isn't lost when it gets passed // to the button
//     this.handleAction = this.handleAction.bind(this);
//     this.handleResetAction = this.handleResetAction.bind(this);
//   }
//   handleAction(action) {
//     // console.log('Child says', action);
//     // this.setState({ actionCount: this.state.actionCount + 1 });
//     this.setState((state) => {
//       return { actionCount: state.actionCount + 1, }
//     });
//   }
//   handleResetAction() {
//     this.setState({ actionCount: 0 });
//   }
//   render() { 
//     console.log(this.state);
//     return (
//       <div>
//         <Child onAction={this.handleAction} onResetAction={this.handleResetAction}/> 
//         <p>Clicked {this.state.actionCount} times</p>
//       </div>
//     ); 
//   }
// }

// 
class CountingParent extends React.Component {
  // initialize state with a property initializer // you can access this.props if needed
  state = {
  actionCount: 0 };
  // writing the handler as an arrow function // means it will retain the proper value of // `this`, so we can avoid having to bind it 
  handleAction = (action) => {
  console.log('Child says', action);
  // Replace actionCount with an incremented value 
  this.setState({
  actionCount: this.state.actionCount + 1 });
  }
  render() { return (
  <div>
  <Child onAction={this.handleAction}/> <p>Clicked {this.state.actionCount} times</p>
  </div>
  ); }
  }

const Page = () => ( <div>
  <CountingParent />
  </div>
);

ReactDOM.render(<Page />, document.querySelector('#root'));