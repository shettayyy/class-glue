import classX from 'class-x'; // Import the cx function from your library
import classXString from 'class-x/join-strings'; // Import the classX function from your library
import cxKeys2Strings from 'class-x/keys-to-strings'; // Import the classX function from your library
import createClassX from 'class-x/merge-module-strings'; // Import the createClassX function from your library
import createClassXStyles from 'class-x/merge-styles'; // Import the createClassX function from your library
import { useState } from 'react';
import './App.css';
import appStyles from './app.module.css';

// Helper function to generate random color
const getRandomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

// createClassX accepts a CSS module object and returns a function that merges class names
const cxModule = createClassX(appStyles);

function App() {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [dynamicColor, setDynamicColor] = useState(getRandomColor());

  const styles = {
    dynamicColor: { color: dynamicColor },
    description: { letterSpacing: '2px' },
  };

  const cxStyles = createClassXStyles(styles);

  // Example usage of classX function
  const buttonClasses = classX(
    'button',
    { 'button-active': isActive },
    count % 2 === 0 ? 'even-count' : 'odd-count',
  );

  // Example usage of cxKeys2Strings function
  const cardClasses = cxKeys2Strings({
    card: true,
    'card-highlighted': count > 5,
    [`card-color-${count}`]: true,
  });

  // Example usage of classX Module Strings function with CSS modules
  const titleClasses = cxModule(
    'title',
    '',
    null,
    undefined,
    'hello',
    [
      'title',
      'world',
      {
        titleActive: isActive,
      },
    ],
    {
      titleActive: isActive,
    },
  );
  console.log(titleClasses);

  // Example usage of classX Strings
  const subtitleClasses = classXString(
    'subtitle',
    isActive && 'subtitleActive',
  );

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

      <p className={subtitleClasses} style={cxStyles('dynamicColor')}>
        Class X is a lightweight utility library for dynamically generating
        class
      </p>

      <div className={cardClasses}>
        <button type="button" className={buttonClasses} onClick={handleClick}>
          Count: {count}
        </button>
        <p style={cxStyles('dynamicColor', { description: isActive })}>
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
