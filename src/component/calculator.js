import React, {Component} from 'react'

class Calculator extends React.Component{
    constructor(props){
        super(props)
        this.state = {result:'The result is...',
        operations:[],

    }

    }
    handleClear = ()=>{
        this.setState({...this.state.result='The result is...'})
          this.setState({...this.state.operations=[]}) 
    }
    handleClick = (e)=>{
        this.setState ({...this.state.operations.push(e.target.value)})
        this.setState({...this.state.result=e.target.value}) 

    }
   calculate =()=>{
       let calculated_result = this.state.operations.join('')
       if(calculated_result){
           calculated_result =eval(calculated_result)
           calculated_result = String(calculated_result)
           this.setState({operations:[calculated_result]})
       }
        this.setState({...this.state.result=calculated_result})

    }
 render(){
     return(
         <div>
             <h1>Calculator</h1>
             <div>
                 <div className='calculator-buttons'>
                 <span><button id='clear' onClick={this.handleClear}>clear</button><p id='result'>{this.state.result}</p></span>
                 <span><button id='number-one' value='1' onClick={this.handleClick}>1</button><button id='number-two' value='2'onClick={this.handleClick} >2</button><button id='number-three' value='3'onClick={this.handleClick}>3</button></span><br/>
                 <span><button id='number-four' value='4' onClick={this.handleClick}>4</button><button id='number-five' value='5' onClick={this.handleClick}>5</button><button id='number-six' value='6' onClick={this.handleClick}>6</button></span><br/>
                 <span><button id='number-seven' value='7' onClick={this.handleClick}>7</button><button id='number-eight' value='8' onClick={this.handleClick}>8</button><button id='number-nine' value='9' onClick={this.handleClick}>9</button></span><br/>
                 <span><button id='number-zero' value='0' onClick={this.handleClick}>0</button><button id='multiply-button' value='*' onClick={this.handleClick}>*</button><button id='divide-button' value='/' onClick={this.handleClick}>/</button></span><br/>
                 <span><button id='add-button' value='+' onClick={this.handleClick}>+</button><button id='subtract-button' value='-' onClick={this.handleClick}>-</button><button id='equals-button' value='='onClick={this.calculate}>=</button></span><br/>
             </div>
             <img   alt='image' src='https://targetcareers.co.uk/sites/targetcareers.co.uk/files/public/styles/header_1500x550/public/field/image/dsg-maths.jpg?itok=CEAJen3D'/>
             </div>
         </div>
     )
 }
}


export default Calculator