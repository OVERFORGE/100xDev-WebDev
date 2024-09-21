function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  function callback() {
      console.log("3 seconds have passed");
  }
  
setTimeoutPromisified(3000).then(callback)





function printFile(err,data){
    if(err){
        console.log("File not Found");
    }else{
        console.log(data);
    }
}

fs.readFile("a.txt","utf-8",printFile);
