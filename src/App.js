import React, {Component} from "react";
import "./App.css"

import Card from './component/card';
import axios from 'axios';
import SearchBox from "./component/search";




class App extends Component{
    constructor(props){
        super(props);
        this.state={
            products:[],
            ogproducts:[],
            loader:true
        }

    }
    componentDidMount(){
    axios.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
    .then((res)=>{
        this.setState({
          products:res.data,
            loader:false,
        ogproducts:res.data})
  
    })  
    
    }
    handlesearch=(value)=>{
      const filtervalue=this.state.ogproducts.filter((item)=>
      item.name.includes(value));
      console.log(filtervalue)
   this.setState({products:filtervalue})

  }
    
    
       render() {
        return ( <div>
          
            {/* <div className="d-flex flex-wrap "> 
            {this.state.products.map((item)=>  
              <Card
              {...item} />
            )}
            </div> */}
              <SearchBox 
           onsearchValue={this. handlesearch} />
            {this.state.loader?(<h1>loading...</h1>):(<div className="d-flex flex-wrap"> 
            {this.state. products.map((item,index) =>  
              <Card 
              {...item}
               index={index} />
            )}
            
            </div>)}
         
    
         </div> );
      }
      
}
 
export default App;



