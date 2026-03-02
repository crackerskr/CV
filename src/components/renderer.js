import {
  profile,
  education,
  experience,
  skills,
  projects,
  awards
} from "../data/index.js";

// Card icons mapping
const sectionIcons = {
  "Education": "fas fa-graduation-cap",
  "Experience": "fas fa-briefcase",
  "Skills": "fas fa-code",
  "Projects": "fas fa-folder-open",
  "Awards": "fas fa-trophy"
};

/* ---------------- CARD ICONS ---------------- */
function renderCardTitle() {
  document.querySelectorAll(".card h2").forEach(h2 => {
    const iconClass = sectionIcons[h2.textContent.trim()];
    if (iconClass) {
      const i = document.createElement("i");
      i.className = `${iconClass} section-icon`;
      h2.prepend(i); // insert icon before the title text
    }
  });
}

/* ---------------- PROFILE ---------------- */
function renderProfile() {
  // Set profile image
  const profileImg = document.getElementById("profile-img");
  profileImg.src = profile.image;

  // Set profile info
  document.getElementById("profile-name").innerText = profile.name;
  document.getElementById("profile-title").innerText = profile.title;

  const linkContainer = document.getElementById("profile-links");

  profile.contacts.forEach(contact => {
    const a = document.createElement("a");
    a.href = contact.link;
    a.target = "_blank";
    a.innerHTML = `<i class="${contact.icon}"></i> ${contact.label}`;
    linkContainer.appendChild(a);
  });
}

/* ---------------- EDUCATION ---------------- */
function renderEducation() {
  const container = document.getElementById("education-list");

  education.forEach(edu => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${edu.degree}</strong><br>
      ${edu.institution}<br>
      ${edu.duration}
    `;
    container.appendChild(li);
  });
}

/* ---------------- EXPERIENCE ---------------- */
function renderExperience() {
  const container = document.getElementById("experience-list");

  experience.forEach(job => {
    const li = document.createElement("li");

    const responsibilities = job.responsibilities
      .map(r => `<li>${r}</li>`)
      .join("");

    li.innerHTML = `
      <strong>${job.role}</strong><br>
      <span><i class="fas fa-building"></i> ${job.company}</span> &nbsp;<br> 
      <span><i class="fas fa-calendar"></i> ${job.duration}</span>
      <ul>${responsibilities}</ul>
    `;

    container.appendChild(li);
  });
}

/* ---------------- SKILLS ---------------- */
function renderSkills() {
  const container = document.getElementById("skills-container");

  const ul = document.createElement("ul");

  Object.entries(skills).forEach(([category, items]) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${category}:</strong> ${items.join(", ")}`;
    ul.appendChild(li);
  });

  container.appendChild(ul);
}

/* ---------------- PROJECTS ---------------- */
function renderProjects() {
  const container = document.getElementById("projects-list");

  projects.forEach(project => {
    const li = document.createElement("li");

    li.innerHTML = `
      <strong>${project.name}</strong>
      <br><span class="tech">${project.tech.join(", ")}</span>
      <br><a href="${project.github}" target="_blank">View on GitHub</a>
      <p class="description">${project.description}</p>
    `;

    container.appendChild(li);
  });
}

/* ---------------- AWARDS ---------------- */
function renderAwards() {
  const container = document.getElementById("awards-list");

  awards.forEach(award => {
    const li = document.createElement("li");

    const details = award.details.map(d => `<li>${d}</li>`).join("");

    li.innerHTML = `
      <strong>${award.title}</strong>
      <ul>${details}</ul>
    `;

    container.appendChild(li);
  });
}

export {
  renderCardTitle,
  renderProfile,
  renderEducation,
  renderExperience,
  renderSkills,
  renderProjects,
  renderAwards
}