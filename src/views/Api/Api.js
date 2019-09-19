import React, { Component } from 'react';
import axios from 'axios';


export async function getApi(url, headerparams) {

  const response =
    await axios.get(url,
      { headers: headerparams }
    )

  return response.data
}




export async function postApi(url, postbody , headerparams ) {

  const response =
    await axios.post(url,
      postbody,
      { headers: headerparams }
    )

  return response.data
}






  

  // const response = await axios.post(
  //   'http://localhost:8080/token/generate-token',
  //   {
  //     "username":"alex@apigate.com",
  //     "password":"alex123"
  //   },
  //   { headers: headersparam }
  // )
  // console.log(response.data)

  // var obj= response.data

  // var token = obj.result.token
  // var username = obj.result.username


  // localStorage.setItem('token' , token)
  // console.log("token is",token)
  // console.log("username is",username)




