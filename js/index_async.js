
let getFile=async ()=>{
    await fetch('https://us-central1-geodrillmanagerserver.cloudfunctions.net/app/kayrex/')
    .then(res=>res.text())
    .then(data=>console.log(data))
}
getFile()

fetch('new.json').then(res=>res.json()).then(data=>console.log(data))