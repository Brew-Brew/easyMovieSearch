import {api} from './axiosInstance';

export function getTheater(datas) {
    console.log(datas);
    return api.post('/LCWS/Cinema/CinemaData.aspx/', datas,
        {headers: {
            'Access-Control-Allow-Origin': '*',
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data'
        }
    })
}