import { Footer } from '../widgets/Footer';
import { Navbar } from '../widgets/Navbar';
import { AppRouter } from './providers';
import './styles/index.scss';
function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <AppRouter />
      </main>
        {/* <Footer /> */}
    </div>
  );
}

export default App;
