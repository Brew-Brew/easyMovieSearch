import styled from 'styled-components';
import Head from 'next/head';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Header from "../components/Header";

const Wrapper = styled.div`
 text-align: center;
`;

export default () => (
  <Wrapper>
     <Head>
      <title>Easy search movie </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
    </Head>
    <Header/>
    <p>What spec is used to develop this site?</p>
    <Card>
      <CardContent>
        <Typography color="textSecondary">
          <ul>
            <li>Mobx</li>
            <li>Next.js</li>
            <li>Styled component</li>
          </ul>
        </Typography>
      </CardContent>
    </Card>
  </Wrapper>
);
