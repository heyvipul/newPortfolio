import "./Techstacks.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiExpress, SiHtml5, SiJavascript, SiMaterialdesign, SiNetlify, SiNextdotjs, SiRedux, SiSocketdotio, SiTailwindcss } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection different">
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <SiRedux/>
            <h5>Redux</h5>
          </div>
          <div>
            <FaNodeJs />
            <h5>Nodejs</h5>
          </div>
          <div>
            <SiExpress />
            <h5>Express</h5>
          </div>
          <div>
            <DiMongodb />
            <h5>MongoDb</h5>
          </div>
          <div>
            <SiMaterialdesign />
            <h5>Material Ui</h5>
          </div>
          <div>
            <SiTailwindcss />
            <h5>Tailwind CSS</h5>
          </div>
          <div>
            <SiNextdotjs/>
            <h5>NextJS</h5>
          </div>
          <div>
            <SiSocketdotio/>
            <h5>Socket.io</h5>
          </div>
        </div>
      </div>
    </>
  );
};
