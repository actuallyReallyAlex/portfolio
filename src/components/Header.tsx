import React from "react";

export const Header = () => {
  return (
    <header>
      <div>
        <main>
          <a href="#">HOME</a>
        </main>
        <nav>
          <ul>
            {/* <li className="nav-item">Work</li> */}
            <li className="nav-item">
              <a href="mailto:actuallyreallyalex@gmail.com">CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
