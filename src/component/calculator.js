import React, {Component} from 'react'

class Calculator extends React.Component{
    constructor(props){
        super(props)
        this.state = {result:'The result is...'}

    }
    handleClear= ()=>{
        this.setState({...this.state.result='The result is...'})
    }
 render(){
     return(
         <div>
             <h1>Calculator</h1>
             <div>
                 <div className='calculator-buttons'>
                 <span><button id='clear' onClick={this.handleClear}>clear</button><p id='result'>{this.state.result}</p></span>
                 <span><button id='number-one'>1</button><button id='number-two'>2</button><button id='number-three'>3</button></span><br/>
                 <span><button id='number-four'>4</button><button id='number-five'>5</button><button id='number-six'>6</button></span><br/>
                 <span><button id='number-seven'>7</button><button id='number-eight'>8</button><button id='number-nine'>9</button></span><br/>
                 <span><button id='number-zero'>0</button></span><br/>
                 <span><button id='add-button'>+</button><button id='subtract-button'>-</button><button id='equals-button'>=</button></span><br/>
             </div>
             <img   alt='image' src='https://targetcareers.co.uk/sites/targetcareers.co.uk/files/public/styles/header_1500x550/public/field/image/dsg-maths.jpg?itok=CEAJen3D'/>
             </div>
         </div>
     )
 }
}
export default Calculator