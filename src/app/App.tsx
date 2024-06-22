import { MainPage } from '../pages/MainPage';
import { Navbar } from '../widgets/Navbar';
import { AppRouter } from './providers';
import './styles/index.scss';
function App() {
  return (
    <div className="app">
      <div className="container">
        <header>
          <Navbar />
        </header>
      </div>
      <main className="main-content">
        <AppRouter />
      </main>
    </div>
  );
}

export default App;
