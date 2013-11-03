romlist = document.getElementById('romlist');
romlist.options[0] = new Option('smw/smw.smc','0')
function selcb(n){
    var j = n;
    return function(){Module._reboot(j);}
}
for(var i=0;i<romlist.length;i++){
  romlist.options[i].onclick=selcb(i);
}
