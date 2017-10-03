import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Players , calculatePPosition} from './../imports/api/players';
import {Tracker} from 'meteor/tracker';
import Play from './../imports/ui/Play';
import App from './../imports/ui/App';


Meteor.startup(()=>{
Tracker.autorun(()=>{
var title = 'Score Keep';

var play = Players.find({}, {sort : {score:-1}}).fetch();
var positionedplayer =calculatePPosition(play)
	ReactDOM.render(<App  title={title} play={positionedplayer} />,document.getElementById('app'));
});
});
