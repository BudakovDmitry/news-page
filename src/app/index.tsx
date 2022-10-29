import Navbar from 'src/components/Navbar'
import Header from 'src/components/Header'
import store from 'src/redux/store'
import { Provider } from 'react-redux'
import StatisticsLine from 'src/components/StatisticsLine'
import MainNewsSection from 'src/components/MainNewsSection'

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Navbar />
      <StatisticsLine />
      <MainNewsSection />
    </Provider>
  )
}

export default App
