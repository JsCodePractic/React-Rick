import React, { Component } from "react";
import './ProgresBar.css';
import { Link } from 'react-router-dom';

class ProgresBar extends Component {
  constructor(props){
    super(props)
    this.state={     
      day: 5,
      soil: 12,
     cash: 150,
     percent: 0,  
     messsage: 25 
    } 
    this.nextStep = this.nextStep.bind(this) }
        
    nextStep() {    
    this.setState( ({ 
      percent: Math.floor(Math.random()*91) +10, 
      day: Math.floor(Math.random(0)*10)+5,
      cash:Math.floor(Math.random(100)*1000)+250,
      soil:Math.floor(Math.random(0)*12)+5,
      messsage:Math.floor(Math.random(0)*12)+5,
    }))
  }
  render(){
      return (    
        <div>
          <div className="ProgresBar">         
             <div className="externalConteiner">
               <div className="topMassege">
                 <div className="countermassege">
                 {this.state.messsage}
                 </div>
                 
               </div>
               <div className="interiorConteiner">
                 <div className="headerTitel">
                 <h1 className="titel">Обучение по продажам</h1>
                  <p>Вы сделали {this.state.soil} продаж и заработали: <br/>$ {this.state.cash} </p>    
                  </div>
                  <div className="secondInteriorConteiner">
                  <h2 className="MounTitel">Месячный план выполнен на </h2> 
                  <div className="progress-bar ">
                  
                    <div className="filler" style={{ width: `${this.state.percent}%`}}>{this.state.percent}%</div>
                  </div>    
                  <div className="footer">
                  <button className="proceed" onClick={this.nextStep}>Продолжить</button> <p className="dayLeft">Осталось {this.state.day} дней</p>
                  </div>
                
              </div>
               </div>
             
             </div>               
        </div> 
        <div>
        <button><Link to='/' className='listCharacted'>Go back to Characted </Link></button>
          </div>  
        </div>
       
    );
    }
  
  }
   
  
  
  export default ProgresBar;