import { Navbar } from "../Navbar/Navbar";

import "./Header.css";
export const Header = () => {


  return (
    <>
      <header className={"header center "}>
        <h3>
          <a href="/" className="link different">
            heyvipul
          </a>
        </h3>
        <Navbar />
      </header>
    </>
  );
};
