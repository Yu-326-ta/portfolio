import React from "react";
import reactImage from "../Images/react.png";
import jsImage from "../Images/js.png";
import phpImage from "../Images/php.png";
import laravelImage from "../Images/laravel.png";
import profileImage from "../Images/sibainu.jpg";
import htmlcssImage from "../Images/htmlcss.png";

export const HomePage = () => {
  return (
    <div className="container text-center">
      <h1>Shin Code</h1>

      <img src={profileImage} className="profileImage" />

      <p>
        ShinCodeです。普段は個人でWeb系の情報発信をYoutubeやTwitterにて行っています。主にHTML/CSS/Javascript/Reactメインに取り扱っています。趣味は個人でプログラミングの撮影を行うことです。
        ShinCodeです。普段は個人でWeb系の情報発信をYoutubeやTwitterにて行っています。主にHTML/CSS/Javascript/Reactメインに取り扱っています。趣味は個人でプログラミングの撮影を行うことです。
      </p>

      <section id="skill">
        <div class="text-center">
          <h1 class="title">使用スキル</h1>
          <div class="row text-center">
            <div class="col-md-4 services">
              <img src={htmlcssImage} />
              <h4>HTML/CSS</h4>
            </div>
            <div class="col-md-4 services">
              <img src={jsImage} />
              <h4>Javascript</h4>
            </div>
            <div class="col-md-4 services">
              <img src={reactImage} />
              <h4>React</h4>
            </div>
            <div class="col-md-4 services">
              <img src={phpImage} />
              <h4>PHP</h4>
            </div>
            <div class="col-md-4 services">
              <img src={laravelImage} />
              <h4>Laravel</h4>
            </div>
          </div>
          <button type="button" class="btn btn-primary">
            スキル一覧
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
