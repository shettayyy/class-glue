import classX from 'class-x'; // Import the cx function from your library
import classXObjectString from 'class-x/object-string'; // Import the classX function from your library
import classXString from 'class-x/string'; // Import the classX function from your library
import { useState } from 'react';
import './App.css';

// Helper function to generate random color
const getRandomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

function App() {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [dynamicColor, setDynamicColor] = useState(getRandomColor());

  // Example usage of classX function
  const buttonClasses = classX(
    'button',
    { 'button-active': isActive },
    count % 2 === 0 ? 'even-count' : 'odd-count',
  );

  // Example usage of classXObjectString function
  const cardClasses = classXObjectString({
    card: true,
    'card-highlighted': count > 5,
    [`card-color-${count}`]: true,
  });

  const titleClasses = classXString('title', isActive && 'title-active');

  const messageClasses = classX('message', [
    'additional-message',
    { 'message-highlighted': count > 3 },
  ]);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
    setIsActive(prevActive => !prevActive);
    setDynamicColor(getRandomColor());
  };

  return (
    <>
      <h1 className={titleClasses}>Class X</h1>
      <div className={cardClasses}>
        <button type="button" className={buttonClasses} onClick={handleClick}>
          Count: {count}
        </button>
        <p style={{ color: dynamicColor }}>
          This text color changes on each click!
        </p>
      </div>
      <p className={messageClasses}>
        The classes of the above content change based on the count.
      </p>
    </>
  );
}

export default App;
