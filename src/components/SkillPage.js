/* global TagCanvas */
import React, { useEffect } from "react";
import "./SkillPage.css";

const SkillPage = () => {
  // Function to dynamically load the TagCanvas script
  const loadTagCanvasScript = () => {
    const script = document.createElement('script');
    script.src = 'https://www.goat1000.com/tagcanvas.min.js';
    script.type = 'text/javascript';
    script.onload = () => initializeTagCanvas(); // Initialize TagCanvas after the script loads
    document.body.appendChild(script);
  };

  // Function to initialize TagCanvas
  const initializeTagCanvas = () => {
    try {
      TagCanvas.Start("myCanvas", "tags", {
        textColour: "#ffffff",
        outlineColour: "none",
        textFont: '"Poppins", sans-serif',
        maxSpeed: 0.05,
        opacity: 1,
        noSelect: true,
        textHeight: 17,
        initial: [0.24, 0.26],
        zoomMax: 1,
      });
    } catch (e) {
      // Handle errors, e.g., hide the canvas container
      document.getElementById("myCanvasContainer").style.display = "none";
    }
  };

  useEffect(() => {
    loadTagCanvasScript();
  }, []);

  return (
    <div className="skill-container">
      <div className="skill-left">
        <div className="skill-header">
          <span>ski</span>lls
        </div>
        <p>
          It is possible to fly without motors, but not without knowledge and
          skill.
        </p>
      </div>
      <div className="skill-right">
        <div id="myCanvasContainer">
          <canvas width="600" height="600" id="myCanvas"></canvas>
        </div>
        <div id="tags">
          <ul>
            <li>
              <a href="/skills">javascript</a>
            </li>
            <li>
              <a href="/skills">react</a>
            </li>
            <li>
              <a href="/skills">html</a>
            </li>
            <li>
              <a href="/skills">css</a>
            </li>
            <li>
              <a href="/skills">redux</a>
            </li>
            <li>
              <a href="/skills">github</a>
            </li>
            <li>
              <a href="/skills">vs code</a>
            </li>
            <li>
              <a href="/skills">website</a>
            </li>
            <li>
              <a href="/skills">cypress</a>
            </li>
            <li>
              <a href="/skills">jest</a>
            </li>
            <li>
              <a href="/skills">javascript</a>
            </li>
            <li>
              <a href="/skills">react-routing</a>
            </li>
            <li>
              <a href="/skills">react</a>
            </li>
            <li>
              <a href="/skills">es6+</a>
            </li>
            <li>
              <a href="/skills">javascript</a>
            </li>
            <li>
              <a href="/skills">react</a>
            </li>
            <li>
              <a href="/skills">html</a>
            </li>
            <li>
              <a href="/skills">css</a>
            </li>
            <li>
              <a href="/skills">redux</a>
            </li>
            <li>
              <a href="/skills">github</a>
            </li>
            <li>
              <a href="/skills">vs code</a>
            </li>
            <li>
              <a href="/skills">website</a>
            </li>
            <li>
              <a href="/skills">cypress</a>
            </li>
            <li>
              <a href="/skills">jest</a>
            </li>
            <li>
              <a href="/skills">javascript</a>
            </li>
            <li>
              <a href="/skills">react</a>
            </li>
            <li>
              <a href="/skills">es6+</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillPage;