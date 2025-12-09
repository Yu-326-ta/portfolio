"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Language = "en" | "ja";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// 翻訳データ
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.work": "Work",
    "nav.contact": "Contact",

    // Banner
    "banner.greeting": "I am a",
    "banner.role1": "Software Engineer",
    "banner.role2": "Product Developer",
    "banner.description":
      "Hi! I'm Yuta Yoshinaga. I am working as a software engineer at an IT company. I specialize in backend development and have experience with various technologies. I am particularly interested in developing new business projects and creating innovative solutions. Currently focusing on building scalable and efficient backend systems!",
    "banner.contactMe": "Contact me",
    "banner.myPortfolio": "My Portfolio",

    // Skills
    "skills.subtitle": "Technologies I've worked with",
    "skills.title": "Skills.",

    // Experience
    "experience.subtitle": "What I have done so far",
    "experience.title": "Work Experience.",

    // Work
    "work.subtitle": "Featured Projects & Applications",
    "work.title": "My Latest Work.",
    "work.description":
      "Here are some of the projects I've worked on recently. Each project represents a unique challenge and showcases different technologies and methodologies I've employed to create innovative solutions.",
    "work.viewAll": "View All Projects",
    "work.viewProject": "View Project",
    "work.ctaTitle": "Ready to collaborate?",
    "work.ctaDescription":
      "I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together to bring your ideas to life.",
    "work.getInTouch": "Get In Touch",

    // Contact
    "contact.subtitle": "Get in touch",
    "contact.title": "Contact",
    "contact.description":
      "If you would like to contact me, please send an e-mail to the following e-mail address",

    // Projects
    "project.eatpass.description":
      "A modern restaurant reservation and table management platform with real-time booking system and seamless user experience.",
    "project.procra.description":
      "An innovative mobile application for AI prompt management and optimization with intuitive user interface and cloud synchronization.",
    "project.portfolio.description":
      "A modern, responsive portfolio website showcasing professional experience and projects with smooth animations and clean design.",
    "project.category.webapp": "Web Application",
    "project.category.mobile": "Mobile App",
    "project.category.portfolio": "Portfolio",

    // Experience Details
    "exp.kyutech.title": "University",
    "exp.kyutech.company": "Kyushu Institute of Technology",
    "exp.kyutech.date": "March 2020 - April 2024",
    "exp.kyutech.point1":
      "I became interested in programming in a university class and started teaching myself.",
    "exp.kyutech.point2": "I worked as an intern at several companies.",

    "exp.fusic.title": "PHP Developer",
    "exp.fusic.company": "Fusic",
    "exp.fusic.date": "June 2022 - September 2022",
    "exp.fusic.point1":
      "I was assigned to an actual project for the first time in my life.",
    "exp.fusic.point2":
      "I gained experience in everything from requirements definition and screen design to development.",
    "exp.fusic.point3": "I also have experience with Laravel, PHP framework.",

    "exp.mf.title": "Ruby Developer",
    "exp.mf.company": "Money Forward",
    "exp.mf.date": "December 2022 - August 2023",
    "exp.mf.point1": "Learned Ruby and Rails for the first time.",
    "exp.mf.point2": "Created a financial planner booking website using Rails.",
    "exp.mf.point3":
      "Experience in developing management screens for payment services using Rails.",

    "exp.dmm.title": "Go Developer",
    "exp.dmm.company": "DMM.com",
    "exp.dmm.date": "October 2023 - Present",
    "exp.dmm.point1": "Learned about Go for the first time.",
    "exp.dmm.point2":
      "I built a server using GraphQL and gRPC for the first time and learned database operations using redis and cloudspanner, GCP in actual project.",
    "exp.dmm.point3":
      "Experience in developing video distribution sites using Go.",

    "exp.nook.title": "Python Developer",
    "exp.nook.company": "Nook",
    "exp.nook.date": "March 2025 - Present",
    "exp.nook.point1":
      "Developing backend services for a secondary-distribution clothing platform using Python.",
    "exp.nook.point2":
      "Building and maintaining infrastructure pipelines on AWS and GCP.",
  },
  ja: {
    // Navigation
    "nav.home": "Home",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.work": "Work",
    "nav.contact": "Contact",

    // Banner
    "banner.greeting": "I am a",
    "banner.role1": "Software Engineer",
    "banner.role2": "Product Developer",
    "banner.description":
      "はじめまして！吉永裕太です。IT企業でソフトウェアエンジニアとして働いています。バックエンド開発を専門としており、様々な技術に経験があります。特に新規事業の開発や革新的なソリューションの創造に興味があります。現在はスケーラブルで効率的なバックエンドシステムの構築に注力しています！",
    "banner.contactMe": "お問い合わせ",
    "banner.myPortfolio": "ポートフォリオ",

    // Skills
    "skills.subtitle": "使用してきた技術",
    "skills.title": "スキル.",

    // Experience
    "experience.subtitle": "これまでの経歴",
    "experience.title": "職務経歴.",

    // Work
    "work.subtitle": "主なプロジェクト・アプリケーション",
    "work.title": "制作物.",
    "work.description":
      "最近取り組んだプロジェクトをご紹介します。それぞれのプロジェクトは独自の課題を持ち、革新的なソリューションを生み出すために様々な技術や手法を活用しています。",
    "work.viewAll": "全てのプロジェクトを見る",
    "work.viewProject": "プロジェクトを見る",
    "work.ctaTitle": "一緒に働きませんか？",
    "work.ctaDescription":
      "新しい機会やエキサイティングなプロジェクトに常に興味があります。あなたのアイデアを形にするために、一緒に働きましょう。",
    "work.getInTouch": "お問い合わせ",

    // Contact
    "contact.subtitle": "お問い合わせ",
    "contact.title": "連絡先",
    "contact.description":
      "ご連絡いただける場合は、以下のメールアドレスにお問い合わせください",

    // Projects
    "project.eatpass.description":
      "リアルタイム予約システムとシームレスなユーザー体験を備えた、モダンなレストラン予約・テーブル管理プラットフォーム。",
    "project.procra.description":
      "直感的なUIとクラウド同期機能を備えた、AIプロンプト管理・最適化のための革新的なモバイルアプリケーション。",
    "project.portfolio.description":
      "スムーズなアニメーションとクリーンなデザインで、職務経歴やプロジェクトを紹介するモダンでレスポンシブなポートフォリオサイト。",
    "project.category.webapp": "Webアプリ",
    "project.category.mobile": "モバイルアプリ",
    "project.category.portfolio": "ポートフォリオ",

    // Experience Details
    "exp.kyutech.title": "大学",
    "exp.kyutech.company": "九州工業大学",
    "exp.kyutech.date": "2020年3月 - 2024年4月",
    "exp.kyutech.point1":
      "大学の授業でプログラミングに興味を持ち、独学を始めました。",
    "exp.kyutech.point2": "複数の企業でインターンとして働きました。",

    "exp.fusic.title": "PHPエンジニア",
    "exp.fusic.company": "株式会社Fusic",
    "exp.fusic.date": "2022年6月 - 2022年9月",
    "exp.fusic.point1": "人生で初めて実際のプロジェクトに配属されました。",
    "exp.fusic.point2":
      "要件定義や画面設計から開発まで、一連の経験を積みました。",
    "exp.fusic.point3": "PHPフレームワークのLaravelの経験もあります。",

    "exp.mf.title": "Rubyエンジニア",
    "exp.mf.company": "株式会社マネーフォワード",
    "exp.mf.date": "2022年12月 - 2023年8月",
    "exp.mf.point1": "初めてRubyとRailsを学びました。",
    "exp.mf.point2":
      "Railsを使用してファイナンシャルプランナー予約サイトを作成しました。",
    "exp.mf.point3":
      "Railsを使用した決済サービスの管理画面開発の経験があります。",

    "exp.dmm.title": "Goエンジニア",
    "exp.dmm.company": "合同会社DMM.com",
    "exp.dmm.date": "2023年10月 - 現在",
    "exp.dmm.point1": "初めてGoを学びました。",
    "exp.dmm.point2":
      "GraphQLとgRPCを使用したサーバー構築を初めて行い、実際のプロジェクトでRedis、Cloud Spanner、GCPを使用したデータベース操作を学びました。",
    "exp.dmm.point3": "Goを使用した動画配信サイトの開発経験があります。",

    "exp.nook.title": "Pythonエンジニア",
    "exp.nook.company": "株式会社Nook",
    "exp.nook.date": "2025年3月 - 現在",
    "exp.nook.point1":
      "Pythonを使用した二次流通アパレルプラットフォームのバックエンドサービスを開発しています。",
    "exp.nook.point2":
      "AWSとGCPでのインフラパイプラインの構築・保守を担当しています。",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    // ローカルストレージから言語設定を読み込む
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ja")) {
      setLanguageState(savedLanguage);
    }
    // デフォルトは英語（"en"）のまま
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
