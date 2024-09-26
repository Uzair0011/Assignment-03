import Link from "next/link";

export default function Header() {
  return (
    <div>
      <div className="header">
        Uzair Ahmed
        <ul className="header-buttons">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/portfolio"}>
            <li>Portfolio</li>
          </Link>
          <Link href={"/about"}>
            <li>About</li>
          </Link>
          <Link href={"/contact-us"}>
            <li>Contact Us</li>
          </Link>
        </ul>
      </div>
      <hr />
      <hr />
      <hr />
      <hr />
   
  
    


    </div>
  );
}
