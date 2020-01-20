import axios from 'axios';
import QS from 'qs';

export const get = (url,params)=>{
  return new Promise((resolve,reject)=>{
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data);
    }).catch(err =>{
      reject(err.data)
    })
  })
}

export const post = (url, params)=> {
  return new Promise((resolve, reject) => {
    axios.post(url, QS.stringify(params))
      .then(res => {
        resolve(res.data);
      })
      .catch(err =>{
        reject(err.data)
      })
  });
  }

