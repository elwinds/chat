import React from "react";
import './Tabs.scss';

interface Props {
  activeTab: string;
  handleTabClick: (tab: "hard" | "soft") => void;
}

const Tabs: React.FC<Props> = ({ activeTab, handleTabClick }) => {
  return (
    <div className="tabs">
      <button
        className={`tab ${activeTab === "hard" ? "active" : ""}`}
        onClick={() => handleTabClick("hard")}
      >
        Hard skills
      </button>
      <button
        className={`tab ${activeTab === "soft" ? "active" : ""}`}
        onClick={() => handleTabClick("soft")}
      >
        Soft skills
      </button>
    </div>
  );
};

export default Tabs;
