import React from "react";

const Header = ({ tagline, children }) => {
  return (
    <div className="menu">
      <header className="top">
        <h1>
          Catch
          <span className="ofThe">
            <span className="of">Of</span>
            <span className="the">The</span>
          </span>
        </h1>
        <h3 className="tagline">
          <span>{tagline}</span>
        </h3>
      </header>

      {children}
    </div>
  );
};

export default Header;
