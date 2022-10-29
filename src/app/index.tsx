import Navbar from 'src/components/Navbar'
import Header from 'src/components/Header'
import store from 'src/redux/store'
import { Provider } from 'react-redux'
import StatisticsLine from 'src/components/StatisticsLine'
import MainNewsSection from 'src/components/MainNewsSection'
import AllNewsBlock from 'src/components/AllNewsBlock'
import VideoNewsBlock from 'src/components/VideoNewsBlock'

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Navbar />
      <StatisticsLine />
      <MainNewsSection />
      <AllNewsBlock />
      <VideoNewsBlock />
    </Provider>
  )
}

export default App
