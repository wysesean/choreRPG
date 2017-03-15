import Backbone from 'backbone'

var STORE = Object.assign({},Backbone.Events,{
	data:{
		strength: 0,
		knowledge: 0,
		dishes: 0,
		health: 0,
		chores: 0
	},

	add: function(objKey){
		this.data[objKey] += 1
		this.data.chores += 1
		this.data = Object.assign(this.data, this.data[objKey], this.data.choresDone)
		this.trigger('dataUpdated')
	}
})

export default STORE