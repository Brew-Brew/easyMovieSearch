import {api} from './axiosInstance';

export function getTheater(body) {
    return api.post('/LCWS/Cinema/CinemaData.aspx', body,
        {headers: {
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then((res)=> console.log(res)).catch(function(error) {
       console.log(error);
      });;
}