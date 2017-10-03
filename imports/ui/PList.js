import React from 'react';
import Play from './Play';

export default class PList extends React.Component{
	renderPlay(){
		if (this.props.play.length ===0)
		{
			return(<div className="item">
				 <p className="item_message">Add your player to get started</p>
				</div>);
		}else{
		return this.props.play.map((p)=>{
		return <Play key={p._id} p={p}/>;
			});
		}
	}
render(){
	return(
           <div>
            {this.renderPlay()}
           </div>
		);
}
};