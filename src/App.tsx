import style from './App.module.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import './style/style.scss';

function App() {
  return (
    <div className={style.App}>
      <div className={style.container}>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
