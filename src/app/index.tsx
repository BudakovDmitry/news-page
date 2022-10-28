import Navbar from 'src/components/Navbar'
import Header from 'src/components/Header'
import store from 'src/redux/store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Navbar />
    </Provider>
  )
}

export default App
