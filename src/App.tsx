import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header/Header';
import user from '../src/img/user.png';
import Skills from './skills/Skills';
import { createContext, useState } from "react";

type Skill = {
  name: string;
  rating: number;
  link: string;
};

type UserRoleType = {
  isAdmin: boolean;
  toggleIsAdmin: () => void;
};

export const UserRole = createContext<UserRoleType>({
  isAdmin: false,
  toggleIsAdmin: () => {},
});

const App: React.FC = () => {
   const [isAdmin, setIsAdmin] = useState(true);

   const toggleIsAdmin = () => {
     setIsAdmin(!isAdmin);
   };

  const skills: Skill[] = [
    {
      name: "React",
      rating: 8,
      link: "https://reactjs.org/",
    },
    {
      name: "TypeScript",
      rating: 7,
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "SCSS",
      rating: 6,
      link: "https://sass-lang.com/",
    },
    {
      name: "Node.js",
      rating: 5,
      link: "https://nodejs.org/",
    },
  ];

  const softSkills = [
    { name: "Коммуникабельность", rating: 5, link: "https://example.com" },
    { name: "Лидерство", rating: 4, link: "https://example.com" },
    { name: "Адаптивность", rating: 5, link: "https://example.com" },
    { name: "Терпение", rating: 3, link: "https://example.com" },
    { name: "Организованность", rating: 4, link: "https://example.com" },
  ];

  return (
    <div className="App">
      <UserRole.Provider value={{ isAdmin, toggleIsAdmin }}>
        <Header logo={logo} userIcon={user} username="Иванов Иван" />
        <Skills hardSkills={skills} softSkills={softSkills} />
      </UserRole.Provider>
    </div>
  );
};

export default App;
