const Command = require('command'),
		fs = require('fs'),
		path= require('path')

//Defaults:
let showinfo=true			//default show info of packet sent
	version='*',			//default version
	packet='S_CHAT' //default packet to dispatch
	
module.exports = function dispatcher(dispatch) {
	const command = Command(dispatch)
	
	let content
	
	command.add('dispatchload', () => {
		fs.readFile(path.join(__dirname,'content.json'),function(err,data) {
			if(err) {
				command.message('(Dispatcher) Error reading file content.json. Check that it is in module folder')
				return
			}
			content=JSON.parse(data)
			command.message('(Dispatcher) Copied packet data')
		})
	})
	
	command.add('dispatchpkt', (pkt,ver) => {
		packet=pkt
		if(ver===undefined || isNaN(ver))
			version='*'
		else 
			version=parseInt(ver)
		command.message('(Dispatcher) Set Packet:'+packet+' version:'+version)
	})
	
	command.add('dispatch', () => {
		dispatch.toClient(packet,version,content)
		command.message('(Dispatcher) Sent Packet:'+packet+' version:'+version)
		if(showinfo) console.log('Packet info sent:'+JSON.stringify(content))
	})
}
	
