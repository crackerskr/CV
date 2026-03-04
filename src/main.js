// Import main CSS (dark theme default)
import '../public/styles/style.css';

// Import data
import { skillLevels } from "./data/skills.js";

// Import all components
import * as components from './components/index.js';

// Setup theme toggle first
components.setupThemeToggle();

// Render CV
components.renderProfile();
components.renderCardTitle();
components.renderEducation();
components.renderExperience();
components.renderSkills();
components.renderProjects();
components.renderAwards();

// Render skills legend
components.renderSkillsLegend(Object.values(skillLevels));