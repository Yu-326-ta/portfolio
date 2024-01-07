import { kyutech, fusic, moneyforward, dmm } from "../assets";

export const experiences = [
  {
    title: "University",
    company_name: "Kyushu Institute of Technology",
    icon: kyutech,
    iconBg: "#383E56",
    date: "March 2020 - April 2024",
    points: [
      "I became interested in programming in a university class and started teaching himself.",
      "I worked as an intern at several companies.",
    ],
  },
  {
    title: "PHP Developer",
    company_name: "Fusic",
    icon: fusic,
    iconBg: "#E6DEDD",
    date: "June 2022 - September 20",
    points: [
      "I was assigned to an actual project for the first time in my life.",
      "I gained experience in everything from requirements definition and screen design to development.",
      "I also have experience with Laravel, PHP framework.",
    ],
  },
  {
    title: "Ruby Developer",
    company_name: "Money Forward",
    icon: moneyforward,
    iconBg: "#383E56",
    date: "December 2022 - August 2023",
    points: [
      "Learned Ruby and Rails for the first time.",
      "Experienced in developing prepaid cards for businesses using Rails.",
    ],
  },
  {
    title: "Go Developer",
    company_name: "DMM.com",
    icon: dmm,
    iconBg: "#E6DEDD",
    date: "October 2023 - Present",
    points: [
      "Learned about Go for the first time.",
      "I built a server using graphql and gRPC for the first time in actual project.",
      "Experienced in database operations using redis and cloudspanner, GCP.",
    ],
  },
];

export { experiences };
