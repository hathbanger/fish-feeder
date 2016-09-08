var axios = require('axios');

var helpers = {
	getFishBowl: function(fish) {
		return axios.get('http://localhost:3000/fish/1.json')
		.then(function(info){
			// console.log(info);
			return info;
		})
	},
	feed: function(){
		return axios.get('http://localhost:3000/fish/1/feed.json')
		.then(function(info){
			// console.log(info);
			return info;
		})		
	}
}

module.exports = helpers;