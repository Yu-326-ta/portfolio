// import { kyutech, fusic, moneyforward, dmm } from "../assets";
import kyutech from "../assets/company/kyutech.jpg";
import fusic from "../assets/company/fusic.jpg";
import moneyforward from "../assets/company/moneyforward.png";
import dmm from "../assets/company/dmm.jpg";

const experiences = [
  {
    title: "大学",
    company_name: "Kyushu Institute of Technology",
    icon: kyutech,
    iconBg: "#383E56",
    date: "2020年3月 - 2024年4月",
    points: [
      "大学の授業でプログラミングに興味を持ち、独学で学習を始めました。",
      "複数の企業でインターンシップとして働きました。",
    ],
  },
  {
    title: "PHP Developer",
    company_name: "Fusic",
    icon: fusic,
    iconBg: "#E6DEDD",
    date: "2022年6月 - 2022年9月",
    points: [
      "人生で初めて実際のプロジェクトに参画しました。",
      "要件定義から画面設計、開発まで一通りの経験を積みました。",
      "PHPフレームワークのLaravelを使用した経験もあります。",
    ],
  },
  {
    title: "Ruby Developer",
    company_name: "Money Forward",
    icon: moneyforward,
    iconBg: "#383E56",
    date: "2022年12月 - 2023年8月",
    points: [
      "初めてRubyとRailsを学習しました。",
      "Railsを使用してファイナンシャルプランナー予約サイトを作成しました。",
      "Railsを使用した決済サービスの管理画面開発経験があります。",
    ],
  },
  {
    title: "Go Developer",
    company_name: "DMM.com",
    icon: dmm,
    iconBg: "#E6DEDD",
    date: "2023年10月 - 現在",
    points: [
      "初めてGoについて学習しました。",
      "GraphQLやgRPCを使用したサーバーを初めて構築し、実際のプロジェクトでredisやcloudspanner、GCPを使用したデータベース操作を学びました。",
      "Goを使用した動画配信サイトの開発経験があります。",
    ],
  },
];

export { experiences };
