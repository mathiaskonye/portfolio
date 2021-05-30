import { Link } from "react-router-dom";


export default function Footer() {
    return (
      <>
        <footer className="footer">
          <h4 className="footerText">Mathias Portfolio&trade;</h4>
          <div className="flex-icons">
            <Link to="/posts/first-post">
                
              <div className="icons">
                <i className="fab fa-github-square"></i>
              </div>
              
            </Link>

            <Link to="/posts/first-post">
                
              <div className="icons">
                <i className="fas fa-envelope"></i>
              </div>
              
            </Link>
            </div>
        </footer>
      </>
    );
}