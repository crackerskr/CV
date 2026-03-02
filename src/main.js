// src/main.js

// Import everything from components via index.js
import * as components from "./components/index.js";

// Render profile section
components.renderProfile();

// Add icons to card titles
components.renderCardTitle();

// Render dynamic sections
components.renderExperience();
components.renderEducation();
components.renderSkills();
components.renderProjects();
components.renderAwards();