// get the reference for the body
var body = document.getElementsByClassName("page")[0];

let projectInfo = {
  "Calendar Buddy": ["iOS app that uses machine learning to help you plan your time", 'https://calendarbuddy.app/'],
  "BioGenesis": ["Software taking DNA, Biomarkers, and Symptoms to diagnose patients", 'https://www.biogenesistech.com/'],
  "Wallo": ["App for university organizations to plan their schedule", 'https://wallo.fun/'],
}

var projects = []

for (project in projectInfo) {
  projects.push(project);
}

projects.sort()

var div = document.createElement("div");
div.className = "intro books";
body.appendChild(div);
// creating all cells

for (var i = 0; i < project.length; i += 1) {
  // creates a table row
  let par = document.createElement("p");
  par.className = "intro books"

  var projectName = projects[i];
  let projectDetails = projectInfo[projectName]
  let projectDescription = projectDetails[0];
  var projectLink = projectDetails[1];

  let nameText = `<button class="button" onclick="window.open( ' ${projectLink} ','_blank')">${projectName}</button>`

  par.className = "bookDescription";
  var colon = ": ";

  if (projectDescription == "") {
    colon = "";
  }

  let text = [nameText , colon, projectDescription].join("");

  // let text = bookName + ' ' + `<button class="button" onclick="window.open(bookLink,'_blank')">${item}</button>` +

  // buttonId.forEach(item => {
  //   text = text.replace(item, `<button class="button" onclick="window.open(bookLink,'_blank')">${item}</button>`);
  //d });

  par.insertAdjacentHTML('afterbegin', text);
  div.appendChild(par);

}
