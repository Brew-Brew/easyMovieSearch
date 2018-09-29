import {api} from './axiosInstance';


export function getTheater(body) {
    return api.post('/LCWS/Cinema/CinemaData.aspx',body,
        {headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
          }
    }).catch((err)=>console.log(err));
}