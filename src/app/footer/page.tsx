import Header from "../components/header";

export default function Footer() {
  return (
    <div className="footer">
      <h1> Expertise in</h1>

      <div className="img2">
        <div className="img1">
          <img
            className="img11"
            src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"
            alt="html"
          />
          <img
            className="img22"
            src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000"
            alt="CSS"
          />
          <img
            className="img33"
            src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"
            alt="JS logo"
          />
        </div>
      </div>
      <div className="footer-down"></div>
    </div>
  );
}
