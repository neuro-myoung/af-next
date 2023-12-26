import Link from "next/link";

function Navbar() {
    return (
      <nav role="navigation">
        <div className="mainLinks">
          <Link href="/" className="navLink">
            Home
          </Link>
          <Link href="/" className="navLink">
            About
          </Link>
          <Link href="/" className="navLink">
            Galleries
          </Link>
          <Link href="/" className="navLink">
            Shop
          </Link>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  