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
import cloudpractitionerImage from "../Images/cloudpractitioner.jpg";
import awsImage from "../Images/aws.png";
import htmlcssImage from "../Images/htmlcss.png";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { shadows } from "@mui/system";

export const HomePage = () => {
  return (
    <div className="container text-center">
      <h1>I'm Yuta Yoshinaga</h1>
      <img src={iconImage} className="profileImage" />

      <Card
        sx={{
          display: "flex",
          ml: 35,
          mr: 35,
          mt: 10,
          justifyContent: "center",
          boxShadow: 3,
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            九州工業大学
          </Typography>
          <Typography variant="h5" component="div">
            吉永湧太
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            年齢：20
          </Typography>
          <Typography variant="body2">
            九州工業大学学部3年の吉永湧太です。
            <br />
            主にWebサービス、Webアプリケーションの構築をしています。
            <br />
            AWS Certified Cloud Practitioner取得
            <img src={cloudpractitionerImage} className="awsImage" />
          </Typography>
        </CardContent>
      </Card>

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
