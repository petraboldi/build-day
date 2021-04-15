import React, {Component} from 'react'

class Calculator extends React.Component{
 render(){
     return(
         <div>
             <h1>Calculator</h1>
             <div>
                 <div className='calculator-buttons'>
                 <p id='result'>The result is...</p>
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