import React, { useState, useContext } from "react";
import "./Skills.scss";
import Tabs from "../tabs/Tabs";
import Modal from "../modal/Modal";
import { UserRole } from "../App";
import SkillForm from "../add-skill-form/AddSkillForm";

type Skill = {
  name: string;
  rating: number;
  link: string;
};

type SkillsProps = {
  hardSkills: Skill[];
  softSkills: Skill[];
};

const Skills: React.FC<SkillsProps> = ({ hardSkills, softSkills }) => {
  
  const [activeTab, setActiveTab] = useState<'hard' | 'soft'>("hard");
  const [modalOpen, setModalOpen] = useState(false);

  const [hardSkillsState, setHardSkillsState] = useState(hardSkills);
  const [softSkillsState, setSoftSkillsState] = useState(softSkills);

  const { isAdmin } = useContext(UserRole);

   const handleModalClick = () => {
     setModalOpen(true);
   };

  const handleTabClick = (tab: "hard" | "soft") => {
    setActiveTab(tab);
  };

  const handleAddSkill = (
    name: string,
    rating: number,
    link: string
  ) => {
    const newSkill: Skill = {
      name,
      rating,
      link,
    };
    if (activeTab === "hard") {
      setHardSkillsState((prevState) => [...prevState, newSkill]);
    } else {
      setSoftSkillsState((prevState) => [...prevState, newSkill]);
    }
    setModalOpen(false);
  };

  const renderSkillsTable = (skills: Skill[]) => {
    return (
      <table className="skills-table">
        <thead>
          <tr>
            <th className="skill-header">Навыки</th>
            <th className="rating-header">Оценка</th>
            <th className="link-header">Ссылка</th>
          </tr>
        </thead>
        <tbody>
          {skills.map((skill, index) => (
            <tr key={index}>
              <td className="skill">{skill.name}</td>
              <td className="rating">{skill.rating}</td>
              <td className="link">
                <a href={skill.link} target="_blank" rel="noreferrer">
                  {skill.link}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="container">
      <div className="skills-header">
        <h2 className="skills-title">Область знаний</h2>
        {isAdmin && (
          <button className="add-btn" onClick={handleModalClick}></button>
        )}
      </div>
      <Tabs activeTab={activeTab} handleTabClick={handleTabClick} />
      {activeTab === "hard" && renderSkillsTable(hardSkillsState)}
      {activeTab === "soft" && renderSkillsTable(softSkillsState)}
      {modalOpen && (
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          <SkillForm onSubmit={handleAddSkill} />
        </Modal>
      )}
    </div>
  );
};

export default Skills;
