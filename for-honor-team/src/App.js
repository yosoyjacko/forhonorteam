import { Provider } from 'react-redux';
import store from './store'


const App = () => {
  <Provider store={store}>
    <main>
      <h1>For Honor</h1>
      <Players />
      <TeamSelected />
    </main>
  </Provider>
}

export default App;
