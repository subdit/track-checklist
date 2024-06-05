import './App.css';
import BackgroundHeading from './components/BackgroundHeading';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <Sidebar />
      </main>
      <Footer />
    </>
  );
}

export default App;
