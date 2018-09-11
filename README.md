# Easy Movie Search
```
위치기반으로, 근처에 있는 영화관중 가능한 영화를 영화관별로 빠르게 확인하는 웹 사이트를 구축해본다.
 Next.js(SSR)+ MOBX(데이터관리) + REACT 를 기반으로 제작해볼것이다.(변경가능)
```
## 사용 스펙

### Next.js

Next.js 는 서버사이드 렌더링과 자동화된 코드스플리팅을 위하여 약간의 정형화된 구조를 따라야한다.

(각 라우트에 해당하는 파일들은 소문자로 pages 디렉토리에 넣어야함).

### 기능

- 간단한 클라이언트 사이드 라우팅
- Hot Module Replacement 를 지원하는 Webpack 기반 작업환경
- Express 나 그 어떤 Node.js 서버와 함께 사용 가능
- Babel / Webpack 환경설정 커스터마이징 가능
- 등등..

https://brunch.co.kr/@hee072794/81 참고

## 스타일링

- material ui 활용
- material ui의 withStyles hoc 활용

### Mobx
https://blog.mvp-space.com/next-js-meets-firebase-and-mobx-b3ae90d5b879 참고

## API
- 지도: naver map api 사용
- 영화데이터: 적절한 open api가 많지 않아, 크롤링 할 예정