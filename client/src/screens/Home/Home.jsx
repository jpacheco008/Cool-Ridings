import Layout from '../../components/shared/Layout/Layout'
import Carousel from '../../components/Carousel/Carousel'
import './Home.css'
const Home = (props) => {
  return (
    <div>
      <Layout >
        <Carousel />

        <div className="container">
          <div id='block-one' className='description'>
            <h2>test</h2>
          </div>
          <div id='block-two' className='description'></div>
          <div id='block-three' className='description'></div>
        </div>
      </Layout>

    </div>
  )
}

export default Home