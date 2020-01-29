var https = require('https')
var fs = require('fs')
var dest = __dirname+'certificates'
var resource = './nptel.txt'
var open = require('opn')
var cb = ()=>{
  console.log('saved')
}

var download = (url, dest, cb)=>{
    var file = fs.createWriteStream(dest)
    var request = https.get(url, (resp)=>{
      resp.pipe(file)
      file.on('finish', ()=>{
        file.close(cb)
      })
    })
    console.log(request)
}

var filesString = fs.readFileSync(resource, {encoding: "utf8"})
var files = filesString.split('\n')

files.forEach(file => {
  open(file)
})