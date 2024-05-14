
import './App.scss'
import Header from './components/header'
import model from './assets/images/hero-mobile.jpg'
import desktopModel from './assets/images/hero-desktop.jpg'
import Subscribe from './components/Subscribe'
function App() {

  return (
    <>
      <main>
        <Header />
        <picture className='img-container'>
          <img src={desktopModel} className='desktop-img' />
          <img src={model} className='mobile-img' />
        </picture>
        <Subscribe />
      </main>
    </>
  )
}

export default App
