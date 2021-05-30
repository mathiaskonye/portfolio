import Illustration from "../../img/undraw_opened_tabs_re_s5ur.svg";


export default function MyWork() {
    return (
      <>
        <div className="wrapper">
          <div className="container-mywork mt-5">
            <div className="row my-0 mx-0 justify-content-center">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 d-flex p-3 column-height">
                <div>
                  <h1>My Work</h1>
                  <hr className="mywork-hr"></hr>
                  <h5 className="p-3">
                    Welcome to my list of projects I have worked on. You can
                    find all my code to these different projects by clicking on
                    one of them to get to the GitHub repo.
                  </h5>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 d-flex p-3 column-height">
                <img
                  className="illustration-mywork align-self-center p-3"
                  src={Illustration}
                  alt="illustration"
                ></img>
              </div>
            </div>
          </div>
          <hr></hr>

          <div className="card-project">
            <img
              className="p-3 illustration-mywork justify-self-center"
              src="https://i.postimg.cc/Gp0PC3vz/soapy-home.jpg"
              alt="soapy website"
            ></img>
            <h1>Soapy e-commerce</h1>
            <h3 className=" py-2 px-2 text-center">
              This is a e-commerce store. I worked on this in
              school. The tools I used to code this was Bootstrap, Sass, Javascript and HTML. Used Strapi for Api.
            </h3>
            <h3 className="text-center mx-3 kaushan p-2 color-secondary button-viewcode">
              View Code <i className="fab fa-github-square"></i>
            </h3>
          </div>

          <hr></hr>

          <div className="card-project">
            <img
              className="p-3 illustration-mywork justify-self-center"
              src="https://i.postimg.cc/wTrMM188/holidaze-meta-image.jpg"
              alt="holidaze website"
            ></img>
            <h1>Holidaze Booking website</h1>
            <h3 className=" py-2 px-2 text-center">
              This is a booking website for booking hotels. I worked on this in
              school. The tools I used to code this was Bootstrap, Sass with
              React.js.
            </h3>
            <h3 className="text-center mx-3 kaushan p-2 color-secondary button-viewcode">
              View Code <i className="fab fa-github-square"></i>
            </h3>
          </div>

          <hr></hr>


          <div className="card-project">
            <img
              className="p-3 illustration-mywork justify-self-center"
              src="https://i.postimg.cc/nr47pNf5/spacex-website.jpg"
              alt="Space-X Rocketship Tracker website"
            ></img>
            <h1>SpaceX Tracker</h1>
            <h3 className=" py-2 px-2 text-center">
              A website for tracking Space-X Rocketships, with details about rockets, and a contact page. Made early in my coding career.
            </h3>
            <h3 className="text-center mx-3 kaushan p-2 color-secondary button-viewcode">
              View Code <i className="fab fa-github-square"></i>
            </h3>
          </div>
        </div>
      </>
    );
};