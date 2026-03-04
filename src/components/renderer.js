import {
  profile,
  education,
  experience,
  skills,
  skillLevels,
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
export function renderCardTitle() {
  document.querySelectorAll(".card h2").forEach(h2 => {
    const sectionName = h2.textContent.trim();
    const iconClass = sectionIcons[sectionName];
    if (!iconClass) return;

    // Create section icon
    const i = document.createElement("i");
    i.className = `${iconClass} section-icon`;

    // Wrapper for the header
    const wrapper = document.createElement("div");
    if (sectionName === "Skills") {
      wrapper.className = "skills-header-wrapper";
    } else {
      wrapper.className = ""; // no class here for normal sections
    }

    // Left group: icon + text
    const leftGroup = document.createElement("div");
    leftGroup.className = "title-left";
    leftGroup.appendChild(i);

    const textSpan = document.createElement("span");
    textSpan.innerText = sectionName;
    leftGroup.appendChild(textSpan);

    wrapper.appendChild(leftGroup);

    // Skills tooltip (if Skills section)
    if (sectionName === "Skills") {
      const tooltipIcon = document.createElement("span");
      tooltipIcon.className = "tooltip-icon";
      tooltipIcon.innerHTML = '<i class="fas fa-info-circle"></i>';

      const tooltip = document.createElement("div");
      tooltip.className = "skills-tooltip";

      Object.values(skillLevels).forEach(level => {
        const row = document.createElement("div");
        row.className = "legend-row";
        row.innerHTML = `
      <span class="legend-color" style="background-color:${level.color}"></span>
      <span class="legend-label">${level.label}</span>
    `;
        tooltip.appendChild(row);
      });

      tooltipIcon.appendChild(tooltip);
      wrapper.appendChild(tooltipIcon);
    }

    // Replace h2 content
    h2.innerHTML = "";
    h2.appendChild(wrapper);
  });
}

// ---------------- SKILLS LEGEND TOOLTIP ----------------
export function renderSkillsLegend(legendItems = []) {
  const skillsHeader = document.querySelector(".card h2:has(.skills-header-wrapper) .skills-header-wrapper");
  if (!skillsHeader) return;

  const tooltip = document.createElement("div");
  tooltip.className = "skills-tooltip";

  legendItems.forEach(item => {
    const legendRow = document.createElement("div");
    legendRow.className = "legend-row";
    legendRow.innerHTML = `
      <span class="legend-color" style="background-color:${item.color}"></span>
      <span class="legend-label">${item.label}</span>
    `;
    tooltip.appendChild(legendRow);
  });

  skillsHeader.appendChild(tooltip);
}

/* ---------------- PROFILE ---------------- */
export function renderProfile() {
  // Set profile image
  const profileImg = document.getElementById("profile-img");
  profileImg.src = profile.image;

  // Set profile info
  document.getElementById("profile-name").innerText = profile.name;
  document.getElementById("profile-title").innerText = profile.title;

  // Set profile bio
  const bioContainer = document.getElementById("profile-bio");
  bioContainer.innerHTML = ""; // clear previous content

  if (Array.isArray(profile.bio)) {
    profile.bio.forEach(line => {
      const p = document.createElement("p");
      p.innerText = line;
      bioContainer.appendChild(p);
    });
  } else {
    bioContainer.innerText = profile.bio;
  }

  // Set contacts
  const linkContainer = document.getElementById("profile-links");
  linkContainer.innerHTML = "";
  profile.contacts.forEach(contact => {
    const a = document.createElement("a");
    a.href = contact.link;
    a.target = "_blank";
    a.innerHTML = `<i class="${contact.icon}"></i> ${contact.label}`;
    linkContainer.appendChild(a);
  });
}

/* ---------------- EDUCATION ---------------- */
export function renderEducation() {
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
export function renderExperience() {
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
export function renderSkills() {
  const container = document.getElementById("skills-container");
  container.innerHTML = ""; // clear previous content

  skills.forEach(cat => {
    // Category container
    const catDiv = document.createElement("div");
    catDiv.classList.add("skill-category");

    // Category title
    const title = document.createElement("h3");
    title.innerText = cat.category;
    catDiv.appendChild(title);

    // Skill list
    const list = document.createElement("div");
    list.classList.add("skill-list");

    cat.items.forEach(skill => {
      const span = document.createElement("span");
      span.classList.add("skill-badge");
      span.innerText = skill.name;

      // Apply background color dynamically from skillLevels
      const level = skill.level;
      if (skillLevels[level]) {
        span.style.backgroundColor = skillLevels[level].color;
      }

      list.appendChild(span);
    });

    catDiv.appendChild(list);
    container.appendChild(catDiv);
  });
}

/* ---------------- PROJECTS ---------------- */
export function renderProjects() {
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
export function renderAwards() {
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