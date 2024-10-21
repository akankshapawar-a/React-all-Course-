import React from 'react';
export default class Comp extends React.Component{
    componentwillUnmounted(){
        alert("Component is going to be removed");
        }
    render(){
        return(
            <>
           <h1>{this.props.name}</h1>
           </>
       )
    }
}