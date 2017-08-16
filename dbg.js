// This code is for the purpose of debug only!

//Global variable flag to either Enable(!0) or Disable(0) console, for use in production to disable console.
var Enable=1;

function dbg(status_code,message){
  
  var status;
  if(status_code == "e" ||status_code == 4){
    status="ERROR";
  }
  if(status_code == "w"||status_code == 3){
    status="WARNING";
  }
  if(status_code == "i"||status_code == 1){
    status="INFO";
  }
  if(status_code == "s"||status_code == 2){
    status="SUCCESS";
  }
  
  if(Enable)
  console.log("["+status+"]"+" -- "+message);
  
}