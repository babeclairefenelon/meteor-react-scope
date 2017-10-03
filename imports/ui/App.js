import React from 'react';
import TitleBar from './TitleBar';
import AddForm from   './AddForm';
import PList from './PList';
export default class App extends React.Component{
  render(){
  	return (
       <div> 
      {/* render h1 tag with title var as text */}
      <div className="wrapper">
	<TitleBar title={this.props.title}/>
	<PList play={this.props.play}/ >
	<AddForm/>
  </div>
       </div>
  		)
  }
};