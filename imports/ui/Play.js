import React from 'react';
import {Players} from './../api/players';
 import PropTypes from 'prop-types';
 export default class Play extends React.Component{
 	render (){

    var itemClassName= `item item-position-${this.props.p.rank}`;
 	 return (
     <div key={this.props.p._id} className={itemClassName}>
     <div className="play">
     <div>
     <h3 className="play-name"> {this.props.p.name} wit {this.props.p.phone}</h3>
      <p className="play-stats"> place - {this.props.p.score} point(s).</p>
      </div>
      <div className="play-actions">
     <button className="button button-round" onClick={()=> {Players.update(this.props.p._id,{$inc:{score:-1}})}}>-1</button>
     <button  className="button button-round" onClick={()=>{	Players.update(this.props.p._id,{$inc:{score:1}})}}>+1</button>
     <button  className="button button-round" onClick={()=>Players.remove(this.props.p._id)}>X</button>
     </div>
     </div>
     </div>
     );
 	}
 };

 Play.propTypes = {
 	p:PropTypes.object.isRequired
 };
