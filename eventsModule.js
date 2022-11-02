const EventEmitter = require("events"); // class
const event = new EventEmitter(); //object
//listening the event
//if own event then always before the emit
event.on("myname",()=>{ // event name and callback function
console.log("My name is bharti");
});
event.on("myname",()=>{ // event name and callback function
    console.log("My name is bharti sharma");
    });
    event.on("myname",()=>{ // event name and callback function
        console.log("My name is bharti 01");
        });
event.emit("myname"); //calling of event
//passing parameters 
event.on("checkpage", (sc,msg)=>{
console.log(`the page status is ${sc} and message is ${msg}`);
});
event.emit("checkpage",200,"ok");