import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './ContentPage.css'
/**
 * Created by Think on 15:18.
 */
class ContentPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'ContentPage'
        };
    }
    
    
    componentDidMount(){
        
    }
   
    render(){
        return <div className="page_content">
            内容
        </div>
    }
}

export  default ContentPage;