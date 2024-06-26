import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg fixed-top navbar-${props.mode==='light'?'black':'white'} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{color:props.mode==='dark'?'cyan':'#eb7409', fontSize:'30px'}}>News-Heaven </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link" aria-current="page" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
            </ul>
          </div>
          <div className="form-check form-switch" style={{color:props.mode==='light'?'black':'white'}}>
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar;
