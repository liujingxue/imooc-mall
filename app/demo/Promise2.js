/**
 * Created by Administrator on 2017/7/14.
 */
function testPromise(flag){
  return new Promise(function(resolve,reject){
    if(flag){
      resolve("ok");
    }
    else{
      reject("No");
    }
  });
};

//方法调用
testPromise(true).then(function(msg){
  console.log(msg);
},function(error){
  console.log(error);
});


//ES6 定义Promise
let checkLogin = function (flag) {
  return new Promise(function (resolve,reject){
    if(flag){
      resolve({     // resolve就是成功 reject就是报错
        status:0,
        result:true
      })
    }
    else{
      reject("error");
    }
  })
}


//Promise怎么用
var val = 1;

function step1(resolve,reject){
  console.log('步骤一：执行');
  if(val >= 1){
    resolve('Hello I am No.1');
  } else if (val === 0){
    reject(val);
  }
}

function step2(resolve, reject) {
  console.log('步骤二：执行');
  if (val === 1) {
    resolve('Hello I am No.2');
  } else if (val === 0) {
    reject(val);
  }
}

function step3(resolve, reject) {
  console.log('步骤三：执行');
  if (val === 1) {
    resolve('Hello I am No.3');
  } else if (val === 0) {
    reject(val);
  }
}

new Promise(step1).then(function(val){
  console.info(val);
  return new Promise(step2);
}).then(function(val){
  console.info(val);
  return new Promise(step3);
}).then(function(val){
  console.info(val);
  return val;
}).then(function(val){
  console.info(val);
  return val;
});



