import React from "react";

const Home = () => {
  return (
    <div>
      <div>This is Dell Lee!</div>
      <button
        onClick={() => {
          alert("click");
        }}
      >
        Click
      </button>
    </div>
  );
};

export default Home;
