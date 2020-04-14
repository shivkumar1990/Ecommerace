import React from React;
import ReactDOM from 'react-dom';
import './index.js';
import './Login.js';



class App extends React.Component { 
  constructor(props) { 
    super(props);
    this.state = { 
      isLoginOpen : true, 
      isRegisterOpen : false
    };
  }
  render() {
    return (
     
        <LoginBox />
        

    );
  }
}

ReactDOM.render( <App />, document.getElementById("root"));






    
