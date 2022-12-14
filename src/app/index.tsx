import Navbar from 'src/components/Navbar'
import Header from 'src/components/Header'
import store from 'src/redux/store'
import { Provider } from 'react-redux'
import StatisticsLine from 'src/components/StatisticsLine'
import MainNewsSection from 'src/components/MainNewsSection'
import AllNewsBlock from 'src/components/AllNewsBlock'
import VideoNewsBlock from 'src/components/VideoNewsBlock'
import OtherNewsBlock from 'src/components/OtherNewsBlock'
import Footer from 'src/components/Footer'

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Navbar />
      <StatisticsLine />
      <MainNewsSection />
      <AllNewsBlock />
      <VideoNewsBlock />
      <OtherNewsBlock />
      <Footer />
    </Provider>
  )
}

export default App
