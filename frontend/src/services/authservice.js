export const doLogin = (email, password) => {

  return new Promise((resolve, reject) => {
    if (email === "lucaskrispim@hotmail.com" && password === "1234") {
      resolve(true)
    }
    reject(`Invalid user and/or password!`)

  })



}