import React, {Component} from 'react'

class Calculator extends React.Component{
    constructor(props){
        super(props)
        this.state = {result:'The result is...',
        operations:[],
        calculation:'',
        history:[],
        isClicked:false
    }

    }
    handleClear = ()=>{
        this.setState({...this.state.result='The result is...'}) //display resets to original message
        this.setState({...this.state.operations=[]}) //operations array becomes empty
        this.setState({...this.state.history.push(this.state.calculation)}) //the operation gets pushed into history
        this.setState({...this.state.calculation=''})
    }
    handleClick = (e)=>{
        this.setState ({...this.state.operations.push(e.target.value)}) // value push to opereations array
        this.setState ({...this.state.calculation+=e.target.value}) //value is added to calculation string which is eventually pushed to history
        this.setState({...this.state.result=''}) //display is empty
        this.setState({...this.state.result+=this.state.operations.join('')}) // the values of button appear on the page

    }
   calculate =(e)=>{
       let calculated_result = this.state.operations.join('') 
       if(calculated_result){
           calculated_result =eval(calculated_result)           // string is evaluated by js's built in object, eval()
           calculated_result = String(calculated_result)
        //    this.setState({operations:[calculated_result]})
       }
        this.setState ({...this.state.calculation+=e.target.value})  //value added to calculation string
        this.setState ({...this.state.calculation+=calculated_result})  //final result added to calculation string
        this.setState({...this.state.result=calculated_result})   // final result is displayed to the user

    }
    printsHistory = ()=>{
         this.setState({...this.state.isClicked=true})
    }
 render(){
     return(
         <div>
             <h1>Calculator</h1>
             <div>
                 {/* <p>{this.state.history}</p> */}
               {/* <p>{this.state.history}</p>
               <p>{this.state.operations}</p> */}
                 <div className='calculator-buttons'>
                 <span><button id='clear' onClick={this.handleClear}>clear</button><p id='result'>{this.state.result}</p></span>
                 <span><button id='number-one' value='1' onClick={this.handleClick}>1</button><button id='number-two' value='2'onClick={this.handleClick} >2</button><button id='number-three' value='3'onClick={this.handleClick}>3</button></span><br/>
                 <span><button id='number-four' value='4' onClick={this.handleClick}>4</button><button id='number-five' value='5' onClick={this.handleClick}>5</button><button id='number-six' value='6' onClick={this.handleClick}>6</button></span><br/>
                 <span><button id='number-seven' value='7' onClick={this.handleClick}>7</button><button id='number-eight' value='8' onClick={this.handleClick}>8</button><button id='number-nine' value='9' onClick={this.handleClick}>9</button></span><br/>
                 <span><button id='number-zero' value='0' onClick={this.handleClick}>0</button><button id='multiply-button' value='*' onClick={this.handleClick}>*</button><button id='divide-button' value='/' onClick={this.handleClick}>/</button></span><br/>
                 <span><button id='add-button' value='+' onClick={this.handleClick}>+</button><button id='subtract-button' value='-' onClick={this.handleClick}>-</button><button id='equals-button' value='='onClick={this.calculate}>=</button></span><br/>
                 <span><button id='see-history' onClick={this.printsHistory}>See history</button><button id='delete-history'>Delete history</button></span>
             </div>
             <p>
                {this.state.isClicked&&this.state.history.map(element=>{
                return (
                <ul>
                 <li>{element}</li>   
                </ul>
                )
            })}

             </p>
             <img   alt='image' src='https://targetcareers.co.uk/sites/targetcareers.co.uk/files/public/styles/header_1500x550/public/field/image/dsg-maths.jpg?itok=CEAJen3D'/>
             </div>
         </div>
     )
 }
}


export default Calculator


///<input type='checkbox' id={item.id} name={item.id}/>  <label for={item.id}>{item.value}</label><br/>