import Header from "@/app/components/header";
import Image from "next/image";
import Footer from "./footer/page";

export default function Home() {
  return <div>
    <Header/>
    <div className="homeContainer">
      <div className="childContainer">
        Hey,
        <br />
        I'm <span className="color1">Uzair Ahmed</span>
        <div className="become"> & become a</div>
        <span className="color2">Web Developer</span>
      </div>
      <div className="childContainer">
        <img
          src="https://static.thenounproject.com/png/553763-200.png"
          alt="Uzair picture Shahow"
        />
      </div>
    </div>
    <Footer/>
    </div>;
}
