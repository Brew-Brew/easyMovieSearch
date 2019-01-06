import {
    api,
    kakao
} from './axiosInstance';

export function getTheater(body) {
    return api.post('/LCWS/Cinema/CinemaData.aspx', ((body)), {
        headers: {
            Accept: "application/json",
            'content-type': 'multipart/form-data',
        }
    }).catch((err) => console.log(err));
}

export function getMovie(body) {
    return api.post('/LCWS/Ticketing/TicketingData.aspx', ((body)), {
        headers: {
            Accept: "application/json",
            'content-type': 'multipart/form-data',
        }
    }).catch((err) => console.log(err));
}

export function getAddress(latlng) {
    return kakao.get('local/geo/coord2regioncode.json', {
        params: {
            x: latlng.lng,
            y: latlng.lat,
        },
        headers: {
            Authorization: 'KakaoAK 74da782b5576030bd3d236b264529ccb'
        }
    }).then((response) => response.data);
}