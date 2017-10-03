import {Mongo} from 'meteor/mongo';
import numeral from 'numeral';
export const Players = new Mongo.Collection('players');

export const calculatePPosition =(play)=>{
	var rank = 1;
	return play.map((p,index)=>{
		if(index !==0 &&play[index -1].score>p.score){
         rank++;
		}
		return{
			...p,
			rank,
			position:numeral(rank).format('0o')
		}
	}
       
		);
}