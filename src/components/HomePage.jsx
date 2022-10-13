import React from "react";
import reactImage from "../Images/react.png";
import jsImage from "../Images/js.png";
import phpImage from "../Images/php.png";
import laravelImage from "../Images/laravel.png";
import profileImage from "../Images/sibainu.jpg";
import mysqlImage from "../Images/mysql.jpg";
import dockerImage from "../Images/docker.jpg";
import firebaseImage from "../Images/firebase.jpg";
import iconImage from "../Images/icon.jpg";
import awsImage from "../Images/aws.png";
import htmlcssImage from "../Images/htmlcss.png";

export const HomePage = () => {
  return (
    <div className="container text-center">
      <h1>I'm Yuta Yoshinaga</h1>

      <img src={iconImage} className="profileImage" />

      <p>吉永湧太です。九州工業大学に通っています。</p>

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
            <div class="col-md-4 services">
              <img src={mysqlImage} />
              <h4>MySQL</h4>
            </div>
            <div class="col-md-4 services">
              <img src={dockerImage} />
              <h4>Docker</h4>
            </div>
            <div class="col-md-4 services">
              <img src={firebaseImage} />
              <h4>Firebase</h4>
            </div>
            <div class="col-md-4 services">
              <img src={awsImage} />
              <h4>AWS</h4>
            </div>
          </div>
          <div class="skillButton">
            <button type="button" class="btn btn-primary">
              スキル一覧
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
