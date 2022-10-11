import React from "react";

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <h3>ポートフォリオ</h3>
      </div>

      <nav>
        <ul>
          <li>
            <a href="">ホーム</a>
          </li>
          <li>
            <a href="">プロダクト</a>
          </li>
          <li>
            <a href="">Github</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
