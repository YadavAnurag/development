var fs = require('fs')
var https = require('https')
const path = require('path')
const JSDOM = require('jsdom').JSDOM
const readLine = require('readline');

const lineReader = readLine.createInterface({
  input: fs.createReadStream(celebUrlPath)
});


const celebUrlPath = path.join(__dirname, 'celebUrl.txt');
//const celebUrlPath = path.join(__dirname, 'test.txt')

const liner = require('n-readlines')(celebUrlPath);

let i=0;
var cb = (fileName)=>{
  console.log('kushwaha laude saved----',fileName);
}

var download = (url, cb)=>{
  https.get(url, (resp)=>{
    let data;
    resp.on('data', (chunk)=>{
      data += chunk.toString()}
    );

    resp.on('end', ()=>{
      let elem = new JSDOM(data);
      let imgURL = '';
      
      try {
        imgURL = 'https:'+elem.window.document.body.querySelector('#file').querySelector('img').attributes[1].textContent;
      } catch (error) {
        return;
      }

      https.get(imgURL, (newResp)=>{
        let fileName = url.split('/');
        fileName = fileName[fileName.length-1].split(':')[1];

        if(fileName === 'nan'){
          return;
        }
        
        const filePath = path.join(__dirname ,'celebImages', fileName);
        var file = fs.createWriteStream(filePath);
        newResp.pipe(file);
        file.on('finish', ()=>{
          i--;
          file.close(cb(fileName));
        });
      });
    })
  });
}


lineReader.on('line', (celebUrl)=>{
  
  // let interval = setInterval(()=>{
  //   if(i<25){
  //     download(celebUrl, cb);
  //     i++;
  //     clearInterval(interval);
  //   }else{
  //   }
  // }, 100);
  
});

// celebUrls = fs.readFileSync(celebUrlPath, { encoding: 'utf-8'}).split('\n');
// celebUrls.forEach(celebUrl => {
   
// });
