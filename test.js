let str = "www.url.com/hello/?param2=3,param1=2"
let paramnum = 3;
let param = ["param1", "param2", "param3"]
let paramval = [2, 3, 4]


let givenParVal = {}
for(let i=0; i<param.length; i++){
    givenParVal[param[i]] = paramval[i]
}

let queIndex = str.indexOf("?");
let ans1 = str.substring(0, queIndex);

let restString = str.substring(queIndex+1);
let paramArray = restString.split(",");

let paramObject = {}
for(let i=0; i<paramArray.length; i++){
    let st = paramArray[i];
    let key = st.substring(0, st.indexOf("="));
    let value = st.substring(st.indexOf("=")+1);
    paramObject[key] = value
}
const keys = [];
for(let key in paramObject){
    keys.push(key);
}
keys.sort();

let check = true;
console.log(ans1);
for(let idx in keys){
    let key = keys[idx];
    console.log(key + " " + paramObject[key]);
    if(paramObject[key] > givenParVal[key]){
        check = false;
    }
}
if(check){
    console.log(200);
} else {
    console.log(404);
}