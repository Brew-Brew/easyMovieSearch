
import {api} from './axiosInstance';

export function getTheater(body) {
    return api.post('/LCWS/Cinema/CinemaData.aspx',((body)),
        {headers: {
            Accept: "application/json",
            'content-type':  'multipart/form-data',
          }
    }).catch((err)=>console.log(err));
}

export function getMovie(body) {
    return api.post('/LCWS/Ticketing/TicketingData.aspx',((body)),
        {headers: {
            Accept: "application/json",
            'content-type':  'multipart/form-data',
          }
    }).catch((err)=>console.log(err));
}