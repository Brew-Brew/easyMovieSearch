import Link from "next/link";
import {Provider} from "mobx-react"
import Head from 'next/head'
import Card from '@material-ui/core/Card';

import Theater from "./theater";
import initStore from "../store/initStore"
import Header from "../components/Header";
const store = initStore();

export default () => (
  <Card>
    <Head>
      <title>Easy search movie </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
    </Head>
    <Header/>
      <h1>EasyMovieSearch</h1>
      <Provider BaseStore={store}>
        <Theater/>
      </Provider>
      <style jsx>{`
      h1,
      a {
        font-family: "Arial";
      }
      ul {
        padding: 0;
      }
      li {
        list-style: none;
        margin: 5px 0;
      }
      a {
        text-decoration: none;
        color: blue;
      }
      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </Card>
);
