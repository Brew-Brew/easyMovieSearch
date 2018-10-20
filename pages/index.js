import { Provider } from "mobx-react"
import Head from 'next/head';
import styled from 'styled-components';

import Theater from "./theater";
import initStore from "../store/initStore"
import Header from "../components/Header";

const Wrapper = styled.div`
 text-align: center;
`;

const store = initStore();

export default () => (
  <Wrapper>
    <Head>
      <title>Easy search movie </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      <script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?clientId=1sLlNgzz6o0MYsjq4xPb"></script>
    </Head>
    <Header/>
      <h1>EasyMovieSearch</h1>
      <Provider BaseStore={store}>
        <Theater/>
      </Provider>
  </Wrapper>
);
