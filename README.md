# Packet-Dispatcher
A Tera Proxy module that dispatches packets without restarting proxy using .json file editing. Only for toClient dispatches, you want toServer, do at your own risk. 

Requires commands module by Pinkie-Pie

Defaults in index.js can be changed. Set showinfo to true to show the packetinfo being sent to client by this module in console.

## Working with JSON
JSON file parsing requires additional syntax format to be used. Learn more at: https://www.w3schools.com/js/js_json_syntax.asp.

Some important points when working with JSON files are:
* Use double quotes(" ") when writing object properties/keys and strings
* DO NOT USE single quotes(' ') for strings. You MUST use double quotes. The proxy will crash if you use single.
* Only write as an object.

Example: in content.json, we can see an example in the included content.json:

`{"channel":24,"authorID":0,"unk1":0,"gm":0,"unk2":0,"authorName":"Lel","message": "poopy"}`

This is a packet for S_CHAT, and the string values and keys of the packet info object are enclosed in double quotes (" "). If you do not do this, parsing the json file later on throws an error that force closes proxy. Bad example is:

`{channel:24,"authorID":0,"unk1":0,"gm":0,"unk2":0,'authorName':'Lel',"message": 'poopy'}`

## Commands
Type commands in /proxy chat or prefix with '!' in other chats

* `dispatchload` - loads up the packet info object in 'content.json' into the module's <content> variable. Do this before using dispatch command

* `dispatchpkt <packetname> <version>` - Changes packet and version to dispatch. Leaving out version number will default to '*' as the default version to dispatch. Example: `dispatchpkt S_ABNORMALITY_BEGIN 2`
* `dispatch` - Dispatches the <packetname> dictated with 'dispatchpkt' OR the default one.  The packet info being sent will be <content>, which is loaded into when using 'dispatchload'

## Usage
- Write the packetinfo in object form in content.json.
- Use dispatchload command
- Use dispatchpkt <packetname> <version>, unless default packet and version is desired.
- Use dispatch command.
