import React from 'react'
import STORE from '../store'

var ChoreRPGView = React.createClass({
	componentWillMount(){
		STORE.on('dataUpdated', ()=>{
			this.setState(STORE.data)
		})
	},
	getInitialState(){
		return STORE.data
	},
	render:function(){
		return(
			<div id='chore-rpg-view'>
				<div id='leftComponent'>
					<ButtonsList />
				</div>
				<div id='rightComponent'>
					<StatInfo statInfo={STORE.data}/>
				</div>
			</div>
		)
	}
})

var ButtonsList = React.createClass({
	render: function(){
		return(
			<div className='button-container'>
				<div className='btn str' onClick={()=>{STORE.add('strength')}}>Do Push Ups</div>
				<div className='btn int' onClick={()=>{STORE.add('knowledge')}}>Read a Book</div>
				<div className='btn dish' onClick={()=>{STORE.add('dishes')}}>Clean Dishes</div>
				<div className='btn health' onClick={()=>{STORE.add('health')}}>Eat Vegetables</div>
			</div>
		)
	}
})

var StatInfo = React.createClass({
	render: function(){
		return(
			<div className='stat-info'>
				<p id='strengthStat'>STRENGTH: {this.props.statInfo.strength}</p>
				<p id='knowledgeStat'>KNOWLEDGE: {this.props.statInfo.knowledge}</p>
				<p id='dishesStat'>DISHES CLEANED: {this.props.statInfo.dishes}</p>
				<p id='healthStat'>HEALTHINESS: {this.props.statInfo.health}</p>
				<p id='choresStat'>CHORES DONE: {this.props.statInfo.chores}</p>
			</div>
		)
	}
})

export default ChoreRPGView