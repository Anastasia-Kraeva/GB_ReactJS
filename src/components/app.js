import React from 'react';
import MessageField from './MessageField';

const App = () => {
    return (
        <>
        <h1 className={`first-class`} style={{color:"green"}}>hello</h1>
        <MessageField />
      </>
    );
};
/* class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
            <h1 className={`second-class`} style={{color:"green"}}>hello</h1>
            <MessageField />
            </>
        );
    }
} */

export default App; 