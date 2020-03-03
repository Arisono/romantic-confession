import React from 'react';

/**
 * Created by Think on 18:17.
 */
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'App'
        };
    }
    
    
    componentDidMount(){
        
    }
   
    render(){
        return <div>
            hello word!
        </div>
    }
}

export  default App;