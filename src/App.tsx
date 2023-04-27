import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container grid">
      <div className="first-fourth--container">
        <div className="first">
          <span>1</span>
        </div>
        <div className="second-fourth--container">
          <div className="second">
            <span>2</span>
          </div>
          <div className="third-fourth--container">
            <div className="third">
              <span>3</span>
            </div>
            <div className="fourth">
              <span>4</span>
            </div>
          </div>
        </div>
      </div>
      <div className="fifth-nineth--container">
        <div className="fifth-sixth--container">
          <div className="fifth">
            <span>5</span>
          </div>
          <div className="sixth">
            <span>6</span>
          </div>
        </div>
        <div className="seventh">
          <span>7</span>
        </div>
        <div className="eighth-nineth--container">
          <div className="eighth">
            <span>8</span>
          </div>
          <div className="nineth">
            <span>9</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
