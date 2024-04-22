import "./Tools.css";
import {  DiGithub } from "react-icons/di";
import {  SiNetlify, SiPostman, SiVercel } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { BsGit } from "react-icons/bs";

export const Tools = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Tools</h2>
        <div className="techsection different">
          <div>
            <VscCode/>
            <h5>Vscode</h5>
          </div>
          <div>
            <DiGithub/>
            <h5>Github</h5>
          </div>
          <div>
           <SiPostman/>
           <h5>Postman</h5>
          </div>
          <div>
            <BsGit/>
            <h5>Git</h5>
          </div>
          <div>
            <SiNetlify/>
            <h5>Netlify</h5>
          </div>
          <div>
            <SiVercel/>
            <h5>Vercel</h5>
          </div> 
        </div>
      </div>
    </>
  );
};
