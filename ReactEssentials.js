import React, { useState } from 'react';

// The App component
function App() {
  // State hook for the counter
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello, React!</h1>
      <p>This is a simple React app with a counter.</p>
      <p>Counter value is: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default App;
