import React from "react";

class Parent extends React.Component {

    constructor (){
        super()
        this.state = {
            show : true
        }
    }

    render(){
        return(
            <div>
                <h1>Parent component</h1>
                <p>Click the below button to pass the Prop and display the passed prop</p>
                <button onClick={()=>{this.setState({show : !this.state.show})}}>Show Email</button>
                {this.state.show ? <Show email="neil.jetrockers280@gmail.com"/>:null}
            </div>
        )
    }
}

class Show extends React.Component{
    constructor(){
        super()
        this.state = {
            email:''
        }
    }

    static getDerivedStateFromProps(props){
        console.log('called');
        return { email: props.email };
    }

    render() {
        return (
           <div>
              <h3>email: {this.state.email}</h3>
           </div>
        );
     }
}



export default Parent