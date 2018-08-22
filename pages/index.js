import Layout from "../components/MyLayout";
import Link from "next/link";
import initStore from "../store/initStore"
import {Provider} from "mobx-react"
import Theater from "./theater";
import Head from 'next/head'

const store = initStore();

export default () => (
  <Layout>
    <Head>
      <title>Easy search movie </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
    </Head>
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
  </Layout>
);
