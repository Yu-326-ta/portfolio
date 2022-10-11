import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <h3>ポートフォリオ</h3>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">ホーム</Link>
          </li>
          <li>
            <Link to="/product">プロダクト</Link>
          </li>
          <li>
            <a href="https://github.com/Yu-326-ta">Github</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
