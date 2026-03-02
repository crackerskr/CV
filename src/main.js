// Import CSS so Vite bundles it
import '../styles/style.css';

// Import all components via barrel file
import * as components from './components/index.js';

// ---------------- Render CV Sections ---------------- //

// Render the profile (static)
components.renderProfile();

// Add icons to card titles
components.renderCardTitle();

// Render all dynamic sections
components.renderExperience();
components.renderEducation();
components.renderSkills();
components.renderProjects();
components.renderAwards();

// --------------- Setup Theme Toggle --------------- //
components.setupThemeToggle();