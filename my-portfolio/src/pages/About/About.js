import CTAButton from "../../components/CTAButton";
import { Link } from "react-router-dom";

export default function About() {
    return (
      <>
        <div className="heroabout">
          <div className="wrapper">
            <div className="bgAbout">
              <div className="marginTop">
                <div className="headerHomeImage"></div>
                <h1>Mathias Kønye</h1>
              </div>
              <h5>
                Hey. Im 23 years young. I grew up in Oslo, Norway and that is
                where I still live today. I started coding and designing
                websites in 2019 and I`ve come a long way since then. I started
                learning HTML/CSS and JavaScript through Noroff School Of
                Technology in Oslo, but I am going to expand my knowledge and
                skills with other programming languages. Infact, I have already
                started.<br></br>
                <br></br>
                Im always eager to learn more because I have a passion for
                developing user-friendly, solid and nice looking websites. These
                are the programming languages I know currently: HTML/CSS, SCSS,
                JavaScript, React.js and Next.js<br></br>
                <br></br> Contact me If you would like to know more!
              </h5>
              <div className="btnContainer">
                <Link href="contact">
                  <CTAButton>Contact Me</CTAButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};