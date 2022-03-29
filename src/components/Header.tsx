import React from "react";

// TODO - More readable once user scrolls past top of page (?)
export const Header = () => {
  return (
    <header>
      <div>
        <main>
          <button
            id="home-button"
            onClick={() => scrollTo({ top: 0, left: 0, behavior: "smooth" })}
          >
            HOME
          </button>
        </main>
        <nav>
          <ul>
            <li className="nav-item">
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    .scrollIntoView({ block: "start", behavior: "smooth" })
                }
              >
                WORK
              </button>
            </li>
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
