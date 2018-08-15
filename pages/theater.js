import Layout from "../components/MyLayout.js";

export default props => (
  <Layout>
    <h1>{props.url.query.title}</h1>
    <div className="markdown">
     
    </div>
    <style jsx global>
      {`
        h1{
          font-size: 20px;
        }
      `}
    </style>
  </Layout>
);
