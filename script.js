/* ============ FILL IN YOUR OWN PHOTOS AND LINKS HERE ============
   photo: your picture, e.g. "images/me.jpg" (leave "" to show initials)
   For each project: img = screenshot, live = live website link, repo = GitHub repository link.
   Anything left as "" is simply hidden, so nothing looks broken. */
const PHOTO = "images/ChatGPT Image Nov 3, 2026, 05_21_10 AM.jpg";

const PROJECTS = [
  { name:"Sri Lanka Tuskers Memorial Website", tech:"Bilingual awareness website, English and Sinhala", feat:true,
    points:["Documents 12 of Sri Lanka’s tuskers that have died, built to raise awareness and support the protection of elephants.","Turns research, photographs and detailed profiles into a clean, visual and easy-to-browse layout."],
    img:"images/The Last Tusks_ Sri Lanka Memorial.png", live:"https://kavindya01.github.io/the-last-tusks-sri-lanka/" ,repo:"https://github.com/Kavindya01/the-last-tusks-sri-lanka.git" },
    { name:"LankaVibe", tech:"HTML, CSS, JavaScript",
    points:["Responsive travel website showcasing Sri Lankan destinations and travel content.","Mobile-friendly front end, with the source code published on GitHub."],
    img:"images/sri lanka.jfif", live:"https://creative-cucurucho-0b9f45.netlify.app", repo:"https://github.com/Kavindya01/Sri-Lanka-Travel-Website.git" },
  { name:"Colombo Places", tech:"HTML, CSS, JavaScript",
    points:["Responsive city guide featuring 20 places around Colombo.","Clean, user-friendly interface with accessible presentation."],
    img:"images/colombo.jfif", live:"https://kavindya01.github.io/Colombo_Vibe/", repo:"https://github.com/Kavindya01/Colombo_Vibe.git" },
  { name:"Lucy Clothing", tech:"HTML, CSS, JavaScript, EmailJS",
    points:["E-commerce-style clothing website with interactive product galleries and sliders.","EmailJS integration so customers can send inquiries from the site."],
    img:"images/lucy.jfif", live:"https://kavindya01.github.io/lucy-clothing-website/", repo:"https://github.com/Kavindya01/lucy-clothing-website.git" },
  { name:"Safora", tech:"Playwright",
    points:["Automated test suite that validates core user flows and catches regressions early."],
    img:"images/safora.jfif",  repo:"https://github.com/Kavindya01/safora-qa-assignment.git" },
  { name:"Library Management System", tech:"Java, MySQL",
    points:["Manages book records, members and borrowing and return workflows."],
    img:"images/library.jfif", repo:"https://github.com/Kavindya01/library_management_systemm.git" },
  { name:"Dispatch Unit System", tech:"Java, MySQL",
    points:["Manages and tracks dispatch operations and unit assignments."],
    img:"images/dispatch unit.jfif" }
];
/* ================================================================ */

const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

document.getElementById("photoBox").innerHTML = PHOTO
  ? '<img src="' + esc(PHOTO) + '" alt="Portrait of L B K Sewwandi">'
  : '<span class="ini">LS</span><span>Your photo goes here</span>';

document.getElementById("projectList").innerHTML = PROJECTS.map(p => {
  const shot = p.img
    ? '<img src="' + esc(p.img) + '" alt="Screenshot of ' + esc(p.name) + '" loading="lazy">'
    : '<div class="ph">' + esc(p.name) + '</div>';
  const links = (p.live ? '<a class="btn primary sm" href="' + esc(p.live) + '">Live site</a>' : '<span class="btn primary sm off">Live site</span>')
              + (p.repo ? '<a class="btn sm" href="' + esc(p.repo) + '">GitHub repo</a>' : '<span class="btn sm off">GitHub repo</span>');
  return '<article class="pcard' + (p.feat ? ' feat' : '') + '">'
    + '<div class="shot">' + shot + '</div>'
    + '<div class="pbody"><h3>' + esc(p.name) + '</h3><p class="tech">' + esc(p.tech) + '</p>'
    + '<ul>' + p.points.map(x => '<li>' + esc(x) + '</li>').join('') + '</ul>'
    + (links ? '<div class="plinks">' + links + '</div>' : '') + '</div></article>';
}).join('');