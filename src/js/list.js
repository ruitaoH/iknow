import ReactDOM from 'react-dom';
import App from '../components/index/Index';

ReactDOM.render(<App />, document.getElementById('app'));

// import React from 'react';
// import ReactDOM from 'react-dom';
// import CopyToClipboard from 'react-copy-to-clipboard';
//
// const App = React.createClass({
//   getInitialState() {
//     return {value: '', copied: false};
//   },
//
//   render() {
//     return (
//       <div>
//         <input value={this.state.value}
//           onChange={({target: {value}}) => this.setState({value, copied: false})} />&nbsp;
//
//         <CopyToClipboard text={window.location.href}
//           onCopy={() => this.setState({copied: true})}>
//           <span>Copy to clipboard with span</span>
//         </CopyToClipboard>&nbsp;
//
//         <CopyToClipboard text={this.state.value}
//           onCopy={() => this.setState({copied: true})}>
//           <button>Copy to clipboard with button</button>
//         </CopyToClipboard>&nbsp;
//
//         {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
//       </div>
//     );
//   }
// });
//
// ReactDOM.render(<App />,document.getElementById('app'));
