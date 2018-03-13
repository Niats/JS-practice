function functionator(s,x=s.split(" "),i=0){
  return i>=x.length-1?Object.defineProperty({},x[i],{value:function(){
    return true;}}):
  Object.defineProperty({},x[i],{value:function(){
    return functionator(s,x,i+1);}});
}

let obj=functionator('there are two kinds of people');
obj.there().are().two().kinds().of().people();