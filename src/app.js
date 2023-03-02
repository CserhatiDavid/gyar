/*
* File: app.js
* Author: Cserhati David
* Copyright: 2023, Cserhati David
* Group: Szoft I-2 N
* Date: 2023-02-23
* Github: https://github.com/CserhatiDavid/
* Licenc: GNU GPL
* Nem vállalunk felelősséget a rossz jegyekért
*/
const ulElem=document.querySelector('#ulElem');
var termekek=['alma','körte','barack','sajt'];
termekek.forEach(()=>{
    //console.log(termekek)
    let li=document.createElement('li');
    li.textContent=termekek;
    li.classList='list-group-item';
    ulElem.append(li);
})
