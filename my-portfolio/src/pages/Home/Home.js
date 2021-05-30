import { Link } from "react-router-dom";
import CTAButton from "../../components/CTAButton";

export default function Home() {
    return (
      <>
     
          <div className="herobanner">
            <div className="bgColor">
              <div className="headerHomeImage"></div>
              <h1>Mathias Kønye</h1>
              <hr></hr>
              <div className="btnContainer">
                <Link to="/about">
                  <CTAButton>About Me</CTAButton>
                </Link>
              </div>
            </div>
          </div>

      </>
    );
};