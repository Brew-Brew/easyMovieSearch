import { Provider } from "mobx-react";
import Head from "next/head";
import styled from "styled-components";

import Theater from "./theater";
import initStore from "../store/initStore";
import Header from "../components/Header";

import { movieIcon } from "./assets";

const HeadWrapper = styled.div`
  margin: 50px 0px;
`;

const Wrapper = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  display: inline-block;
  margin: 0 0;
  vertical-align: bottom;
`;

const store = initStore();

export default () => (
  <Wrapper>
    <Head>
      <title>Easy search movie </title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
      <script
        type="text/javascript"
        src="https://openapi.map.naver.com/openapi/v3/maps.js?clientId=1sLlNgzz6o0MYsjq4xPb"
      />
    </Head>
    <Header />
    <HeadWrapper>
      <img
        src={movieIcon}
        style={{ verticalAlign: "middle", marginRight: "10px" }}
        width="50px"
        height="50px"
        alt="movie"
      />
      <Title>EasyMovieSearch</Title>
    </HeadWrapper>
    <Provider BaseStore={store}>
      <Theater />
    </Provider>
  </Wrapper>
);
