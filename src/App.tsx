import MainContext from './context/MainContext'
import AppPage from './components/AppPage'
import './App.css'

function App() {
  return (
    <MainContext>
      <AppPage />
    </MainContext>
  );
}

export default App
