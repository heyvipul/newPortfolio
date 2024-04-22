import "./Projects.css";
import travelPoster from "../../assets/Travelious Poster.jpg"
import cryptoPoster from "../../assets/CrytpoExplorer.jpg"
import fullstack from "../../assets/fullstackProject.jpg"
import mineWine from "../../assets/mineWine.jpg"
import bluefly from "../../assets/bluefly.jpg"
import bewakoof from "../../assets/Bewakoof.png"
import chatapplication from "../../assets/chatapplication.jpg"
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiHtml5,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiChakraui,
  SiMaterialdesign,
  SiAxios,
  SiVercel,
  SiReact,
  SiRazorpay,
  SiVite,
  SiReactrouter,
  SiSocketdotio
} from "react-icons/si";
import { DiCss3, DiJavascript, DiReact } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { BsBootstrap } from "react-icons/bs";



export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={travelPoster}
                  alt="Travelious Website"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Travelious Website</h2>
              <p>
              Constructed a robust travel booking platform with React, featuring secure user authentication, tour search, booking capabilities and secure payments.
              </p>
              <div>
                <FaReact />
                <SiHtml5 />
                <IoLogoJavascript />
                <SiRedux/>
                <SiChakraui/>

              </div>
              <div>
                <a
                  href="https://travelious-project.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/heyvipul/Travelious"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={chatapplication}
                  alt="RealTime Chat Application"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>RealTime Chat Application</h2>
              <p>
              A Real-time Chat App developed with React frontend and NodeJS with Socket.io backend. Users can send and receive messages instantly, and receive notifications for new user activity..
              </p>
              <div>
                <SiVite/>
                <SiReactrouter/>
                <SiSocketdotio/>
                <FaNodeJs/>
                <SiExpress/>
              </div>
              <div>
                <a
                  href="https://heyvipul-chat-appilcation.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/heyvipul/Realtime-chat-appilcation"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={cryptoPoster}
                  alt="Myntra"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Crypto Explorer</h2>
              <p>
              Discover the future of finance with simplicity, offering intuitive cryptocurrency exploration for all levels. Join us for seamless trading and portfolio management, empowering everyone in their financial journey.
              </p>
              <div>
                <IoLogoJavascript />
                <FaReact />
                <SiMaterialdesign/>
                <SiAxios/>
                <SiVercel/>
              </div>
              <div>
                <a
                  href="https://cryptocurrency-tracker-heyvipul.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/heyvipul/cryptocurrency-tracker-react"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={fullstack}
                  alt=""
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Full Stack Project</h2>
              <p>
                A MERN application for basic tasks management.
              </p>
              <div>
                <SiReact/>
                <SiRedux/>
                <FaNodeJs/>
                <SiExpress/>
                <SiMongodb/>
              </div>
              <div>
                <a
                  href="https://arba-fullstack-assignment.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/heyvipul/arba-fullstack-assignment"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={mineWine}
                  alt="TicTacToe"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Mine Wine Website</h2>
              <p>
              Wine Ecommerce Website And and added functionally like Signup, Login, Search, Cart page, Payment Page. We used HTML, CSS, JavaScript ,Bootstrap, ES6 Tech Stacks to build this application..
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <DiJavascript/>
                <SiRazorpay/>
              </div>
              <div>
                <a
                  href="https://64dc647497ed712d3fab4cb5--lambent-quokka-6e7d37.netlify.app/index.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/heyvipul/WineProject_Collab"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={bluefly}
                  alt="TicTacToe"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Bluefly Ecommerce</h2>
              <p>
              Clone the Bluefly Shopping Website and added functionally like Signup, Login, Search, Cart page, Payment Gateway. We used HTML, CSS, JavaScript Tech Stacks.
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
                <BsBootstrap/>
              </div>
              <div>
                <a
                  href="https://647cc4c365687c4e3c6b2b20--chimerical-madeleine-52c26c.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/heyvipul/blueFly"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={bewakoof}
                  alt="TicTacToe"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Bewakoof Clone</h2>
              <p>
              Clone of Bewakoof Ecommerce Website And and added functionally like Signup, Login, Search, Cart page, Payment Page. We used HTML, CSS, JavaScript Tech Stacks..
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <DiJavascript/>
                
              </div>
              <div>
                <a
                  href="https://snazzy-bublanina-52c88a.netlify.app/index.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/heyvipul/bewakoof-clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
