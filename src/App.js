// import logo from "./logo.svg";
import "./App.css";


// let name = "aashiq";
// let  bold="<b>aashiqui</b>";
function App() {
  return (
    <>
      {/* <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <navbar/>
      <img src="" alt="" />
      <div className="container">
        <h1>Hello {name} {bold}</h1>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo beatae
        sit nemo assumenda amet eveniet. Quaerat ullam iusto beatae itaque enim
        iste consequuntur, esse quas.
      </div> */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Facebook</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </>
  );
}

export default App;
