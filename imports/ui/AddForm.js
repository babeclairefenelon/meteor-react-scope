import React from 'react';
import {Players} from './../api/players';

export default class AddForm extends React.Component{
	handleSubmit(e){
     var playerName=e.target.playerName.value;
	var playerPhone=e.target.playerPhone.value;

    e.preventDefault();
    if (playerName){
	e.target.playerName.value='';
	e.target.playerPhone.value='';
	Players.insert({
	name:playerName,
	phone:playerPhone,
	score:0
});
   }
	}
	render(){
		return(
			<div className= "item">
             <form className= "form" onSubmit={this.handleSubmit}>
        
	         <input className="form-input" type="text" name="playerName" placeholder="Player name" />
	      
	         <input className="form-input" type="text" name="playerPhone" placeholder="player phone"/>
	        
	          <button className="button">Add player</button>
	          </form>
			</div>
			);
	}
}

