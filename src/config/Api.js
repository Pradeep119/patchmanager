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
 
export async function putApi(url , headerparams ) {

  const response =
    await axios.put(url,
      { headers: headerparams }
    )

  return response.data
}

