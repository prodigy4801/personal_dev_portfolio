import Footer from './layout/Footer';
import MainBody from './layout/MainBody';
import Navbar from './layout/Navbar';

function App() {
  return (
    <div className=' overflow-x-hidden min-h-screen container'>
      <Navbar />
      <MainBody />
      <Footer />
    </div>
  );
}

export default App;
