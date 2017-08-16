# Packet-Dispatcher
A Tera Proxy module that dispatches packets without restarting proxy using .json file editing. 

Requires:
- commands module by Pinkie-Pie

Uses:
- json5.js by github.com/json5 (Edited slightly and already included in this module)

Defaults in index.js can be changed. Set showinfo to true to show the packetinfo being sent to client by this module in console.

## JSON5 implementation
Unlike the previous branch where json was used, in JSON5, you can type objects in content.json as per how you would write in normal js files, without the need for double quotes (" ") in object keys and strings. json5.js was also further modified by me to not throw an error incase you typed something incorrectly. Check console and you can tell easily if is the wrong info sent, since no error will be thrown, the packet will continue to be attempted to be sent.

Example of a content.json

{
unk1:1,
unk2:1,
title:'hello',
arrayobj:{array1:[1211,21212,21212,,,],key2:121}  //comments allowed too 
}

For more, read: https://github.com/json5/json5

## Commands
Type commands in /proxy chat or prefix with '!' in other chats

* `dispatchpkt <packetname> <version>` - Changes packet and version to dispatch. Leaving out version number will default to '*' as the default version to dispatch. Example: `dispatchpkt S_ABNORMALITY_BEGIN 2`
* `dispatch` - Dispatches the <packetname> dictated with 'dispatchpkt' OR the default one.  The packet info being sent will be the one written in content.json. This command now reads content.json, parses it and dispatches as the packet dictated by `dispatchpkt` command.
* `dispatchserver` - Same function as `dispatch` but it is toServer. Use this at your own risk. Make sure you check your defs and every single packet info being sent is correct.

## Usage
- Write the packet info in object form in content.json (See 'working with JSON' on the format)
- Use `dispatchpkt <packetname> <version>`, unless default packet and version is desired, OR you have already changed it previously and wish to use the same packet (in which case you just skip straight to `dispatch` command).
- Use `dispatch` command.

## Crashes
If proxy crashes, this usually is because the format you used in writing content.json is wrong, or the packet you sent to the client would crash the game anyway.
