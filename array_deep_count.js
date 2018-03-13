function deepCount(a) {
  let count = 0;
    for(key in a) {
     count ++;
       if(a[key] instanceof Array){
           count += deepCount(a[key]);
        }
    }
    return count;
}