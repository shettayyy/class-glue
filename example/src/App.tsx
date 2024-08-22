import cx from 'class-x'; // Import the cx function from your library
import { useState } from 'react';
import './App.css';

// Helper function to generate random color
const getRandomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

function App() {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [dynamicColor, setDynamicColor] = useState(getRandomColor());

  // Example usage of cx function
  const buttonClasses = cx(
    'button',
    { 'button-active': isActive },
    count % 2 === 0 ? 'even-count' : 'odd-count',
  );

  const cardClasses = cx('card', {
    'card-highlighted': count > 5,
    [`card-color-${count}`]: true,
  });

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
    setIsActive(prevActive => !prevActive);
    setDynamicColor(getRandomColor());
  };

  return (
    <>
      <h1 className={cx('title', { 'title-active': isActive })}>Class X</h1>
      <div className={cardClasses}>
        <button type="button" className={buttonClasses} onClick={handleClick}>
          Count: {count}
        </button>
        <p style={{ color: dynamicColor }}>
          This text color changes on each click!
        </p>
      </div>
      <p
        className={cx('read-the-docs', [
          'additional-class',
          { 'docs-highlighted': count > 3 },
        ])}
      >
        The classes of the above content change based on the count.
      </p>
    </>
  );
}

export default App;
