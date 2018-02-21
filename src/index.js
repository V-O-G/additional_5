module.exports = function check(str, bracketsConfig) {
  for(j=0;j<bracketsConfig.length;j++){
     for(i=0;i<=str.length;){
     if (str[i]+str[i+1]==bracketsConfig[j].join('')){
       str=str.replace(str[i]+str[i+1],'');
    i=0;
    j=0;
      continue;
     }
     i++;
  }
  }
 if(str.length===0){return true}
 else {return false}
}
