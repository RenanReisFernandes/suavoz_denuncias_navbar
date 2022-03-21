import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Navbar from './componentes/Navbar'
import Cadastrar from './pages/Cadastrar'
import Denuncias from './pages/Denuncias'
import Direitos from './pages/Direitos'
import Entrar from './pages/Entrar'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Footer from './componentes/Footer'

const App =() =>{
  return(
    
    <div className="App">

   
      <Router>
      <Navbar />
          <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/sobre" element={<Sobre/>} />
            <Route path="/direitos" element={<Direitos/>} />
            <Route path="/entrar" element={<Entrar/>} />
            <Route path="/cadastrar" element={<Cadastrar/>} />
            <Route path="/denuncias" element={<Denuncias/>} />
                       
          </Routes>
      </Router>
   <Footer />

    </div>

  );
}

export default App;