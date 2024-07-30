import { Route, Routes,useNavigate} from 'react-router-dom';
import './App.css';
import Data from './componate/Data';
import Form from './componate/Form';

function App() {
    const Navigate = useNavigate()
    const gotoHome = () => {
        Navigate("/")
    }
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Data Form</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page"onClick={gotoHome}>Form</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      <Routes>
        <Route path="/" element={<Form/>} />
        <Route path="/data" element={<Data/>} />
      </Routes>

    </>
  )
}

export default App;
