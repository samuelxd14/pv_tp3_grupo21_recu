import ListaProyectos from "./componentes/ListaProyectos";
/*import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Nav from "./componentes/Nav";
import './css/styles.css';*/

const App = () => {
  return (
    <div className="app-container">
      {/* <Header /> */}
      {/* <Nav /> */}
      <main className="main-content">
        <ListaProyectos />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default App;