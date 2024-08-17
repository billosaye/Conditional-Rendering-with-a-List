import React from "react";

var items = ["mango", "banana", "oranges", "guavas", "tomatoes", "onions"];

function App() {
  return (
    <div className="container">
      {items.length > 0 ? (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <h1>No items to display</h1>
      )}
    </div>
  );
}

export default App;
