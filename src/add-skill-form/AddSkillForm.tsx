import { useState } from "react";
import PropTypes from "prop-types";
import './AddSkillForm.scss';

interface SkillFormProps {
  onSubmit: (name: string, rating: number, link: string) => void;
}

const SkillForm: React.FC<SkillFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [link, setLink] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit( name, rating, link );
    setName("");
    setRating(0);
    setLink("");
  };

  return (
    <form onSubmit={handleSubmit} className="skill-form">
      <div className="form-item">
        <label htmlFor="name-input">Навык:</label>
        <input
          type="text"
          id="name-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-item">
        <label htmlFor="rating-input">Оценка:</label>
        <input
          type="number"
          id="rating-input"
          min="0"
          max="10"
          value={rating}
          onChange={(e) => setRating(parseInt(e.target.value))}
        />
      </div>
      <div className="form-item">
        <label htmlFor="link-input">Ссылка:</label>
        <input
          type="text"
          id="link-input"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </div>
      <button type="submit">Добавить навык</button>
    </form>
  );
};

SkillForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SkillForm;
