import {Provider} from 'react-redux'
import Players from './components/Players'
import SelectedTeam from './components/SelectedTeam'
import store from './store'
import './styles/styles.scss'

const App = () => (
  <Provider store={store}>
    <main>
      <h1>For Honor Team</h1>
      <Players />
      <SelectedTeam />
    </main>
  </Provider>
)

export default App;
