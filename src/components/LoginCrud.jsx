export function LoginInfo({Username, Password}) {

    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log(Username, Password)
            if(Username=="sanket" && Password=="sanket"){
                resolve();
            } else{
                reject();  
            }
        }, 1000);
    })


    
}