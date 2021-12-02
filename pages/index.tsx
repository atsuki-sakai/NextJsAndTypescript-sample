import Image from "next/image"; // Nextjsで使用する最適化されたタグ,imgタグの代わりに使用
import Head from "next/head";
import Layout from "./components/layout";

const Home = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>HomePage</title>
        </Head>
        <h1 className="text-green-800">Sakai Atsuki</h1>
        <ul>
          <li>
            <p>
              <a href="blogs/blog">Blog</a>
            </p>
          </li>
          <li>
            <p>
              <a href="contacts">Contacts</a>
            </p>
          </li>
        </ul>
        <p>Hello. my name is atsuki sakai. like sushi.</p>
      </Layout>
    </>
  );
};
export default Home;
