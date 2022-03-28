// get the reference for the body
var body = document.getElementsByClassName("page")[0];

let peopleInfo = {
  "Dr. Andrew Huberman PhD": ["Makes podcasts about neurology, connecting it to other fields, with amazing guests", 'https://hubermanlab.com/'],
  "Dr. Brad Stanfield": ["Makes videos about recent studies on longevity and health", 'https://drstanfield.com/'],
  "Dr. Peter Attia": ["Covers wide variety of topics in the medicine/health space", 'https://peterattiamd.com/'],
  "Lex Friedman": ["ML researcher / Podcaster", 'https://www.youtube.com/channel/UCSHZKyawb77ixDdsGog4iWA'],
  "Andrew NG": ["ML teacher / researcher", 'https://twitter.com/AndrewYNg?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'],
  "Matthew Walker" : ["For anything sleep related", 'https://www.sleepdiplomat.com/'],
  "Jake Tran" : ["Creates great short business/politics videos", 'https://www.youtube.com/channel/UCoOjH8D2XAgjzQlneM2W0EQ'],
  "Károly Zsolnai" : ["Analyzes recent ML research papers", 'https://www.youtube.com/c/K%C3%A1rolyZsolnai'],
  "Kurzgesagt" : ["Make fun short science animated videos",'https://www.youtube.com/user/Kurzgesagt'],
  "Peter H. Diamandis, MD" : ["High quality advice on life and business, his is the only newsletter I read",'https://twitter.com/PeterDiamandis'],
  "Jordan B. Peterson" : ["Advice on navigating life, relationships, and finding meaning", 'https://www.jordanbpeterson.com/'],
  "Tim Urban" : ["Generalist", 'https://twitter.com/waitbutwhy'],
  "Mark Hyman M.D" : ["Anything food / diet related",'https://drhyman.com/']
}

var people = []

for (person in peopleInfo) {
  people.push(person);
}

people.sort()

var div = document.createElement("div");
div.className = "intro books";
body.appendChild(div);
// creating all cells

for (var i = 0; i < people.length; i += 1) {
  // creates a table row
  let par = document.createElement("p");
  par.className = "intro books"

  var personName = people[i];
  let personDetails = peopleInfo[personName]
  let personDescription = personDetails[0];
  var personLink = personDetails[1];

  let nameText = `<button class="button" onclick="window.open( ' ${personLink} ','_blank')">${personName}</button>`

  par.className = "bookDescription";
  var colon = ": ";

  if (personDescription == "") {
    colon = "";
  }

  let text = [nameText , colon, personDescription].join("");


  par.insertAdjacentHTML('afterbegin', text);
  div.appendChild(par);

}
