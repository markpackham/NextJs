import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Prices from '../components/Prices';


const Index = (props) => (
    <Layout>
        < div>
            < h1> Welcome to the cypto currency news, BitzPrice </h1>
            <p>Check current Bitcoin rate</p>
            <Prices bpi={props.bpi}/>
        </div>
    </Layout>
);

Index.loadGetInitialProps = async function () {
//Website where we get crypto currency related news via its API
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();

    //BPI comes from coindesk's website
    return{
        bpi: data.bpi
    }
}

export default Index;