import { useAnimation } from '../hooks/useAnimation';
import catImage from '../assets/images/cat.svg';
import './DancingCat.css';

const DancingCat = () => {
  const { isAnimating, toggleAnimation } = useAnimation();

  return (
    <div className="dancing-cat-container">
      <div className="stage">
        <img
          src={catImage}
          alt="Dancing Cat"
          className={`cat ${isAnimating ? 'dancing' : ''}`}
        />
      </div>

      <button
        className="control-button"
        onClick={toggleAnimation}
      >
        {isAnimating ? '⏸️ Stop Dancing' : '▶️ Start Dancing'}
      </button>

      <h1 className="title">Dancing Cat</h1>
      <p className="subtitle">Click the button to control the dance!</p>
    </div>
  );
};

export default DancingCat;
