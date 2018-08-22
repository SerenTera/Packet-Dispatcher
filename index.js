const fs = require('fs'),
		path= require('path'),
		JSON5 = require('./json5')

//Defaults:
let showinfo=true			//default show info of packet sent
	version='*',			//default version
	packet='S_ACTION_STAGE' //default packet to dispatch
	
module.exports = function dispatcher(mod) {

	let content
		
	
/////Commands
	mod.command.add('dispatchpkt', (pkt,ver) => {
		packet=pkt
		if(ver===undefined || isNaN(ver))
			version='*'
		else 
			version=parseInt(ver)
		mod.command.message('(Dispatcher) Set Packet:'+packet+' version:'+version)
	})
	
	mod.command.add('dispatch', (name, ver) => {			
		fs.readFile(path.join(__dirname,'content.json'),function(err,data) {
			if(err) {
				mod.command.message('(Dispatcher) Error reading file content.json. Check that it is in module folder')
				return
			}
			content=JSON5.parse(data)
			mod.send(name === undefined ? packet : name , version === undefined ? version : ver,content)
			mod.command.message('(Dispatcher) Sent to Client. Packet:'+name === undefined ? packet : name+' version:'+version === undefined ? version : ver)
			if(showinfo) console.log('Packet info sent:'+JSON.stringify(content))
		})
	})

	mod.command.add('dispatchserver', () => {
		fs.readFile(path.join(__dirname,'content.json'),function(err,data) {
			if(err) {
				mod.command.message('(Dispatcher) Error reading file content.json. Check that it is in module folder')
				return
			}
			content=JSON5.parse(data)
			mod.send(packet,version,content)
			mod.command.message('(Dispatcher) Sent to Server. Packet:'+packet+' version:'+version)
			if(showinfo) console.log('Packet info sent:'+JSON.stringify(content))
		})
	})

}
