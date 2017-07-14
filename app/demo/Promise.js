/**
 * Created by Administrator on 2017/7/14.
 */
let checkLogin = function () {
  return new Promise(function (resolve,reject){
    //document.cookie.indexOf("userId") > -1 ，说明存在userId
    let flag = document.cookie.indexOf("userId")>-1?true:false;
    if(flag=true){
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

let getUserInfo = () =>{
  return new Promise((resolve,reject)=>{
    let userInfo = {
      userId: "101"
    }
    //成功之后的处理，都在resolve里面
    resolve(userInfo);
  });
}

//通过链式调用
checkLogin().then((res) => {
  if(res.status == 0){
    console.log("login success");
    return getUserInfo();
  }
}).catch((error)=>{
  console.log(`error:${error}`);
}).then((res2)=>{
  console.log(`userId:${res2.userId}`);
})

//使用Promise同时发多个请求,返回的也是多个参数
Promise.all([checkLogin(),getUserInfo()]).then(([res1,res2])=>{
  console.log(`result1:${res1.result},result2:${res2.userId}`)
})
