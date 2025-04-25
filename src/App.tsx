// components
import ProductsList from "./components/features/products/ProductsList"

// styles
import './style.css'
import Layout from './components/layout/Layout';
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Banner from "./components/features/banner/Banner";

const App = () => {
  return (
      <Layout>
        <Header/>
        <Banner/>
        <ProductsList/>
        <Footer/>
      </Layout>
  )
}

export default App
