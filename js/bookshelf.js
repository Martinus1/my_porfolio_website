// get the reference for the body
var body = document.getElementsByClassName("page")[0];

let bookInfo = {
  "Surely You're Joking, Mr. Feynman!": ["This was one of the best biographies I have read. Mr. Feynman was a physicist, yet let a life full of interesting adventures. He showed that you can enjoy other aspects of life, despite being top in your field.", "Richard Feynman", true, 'https://www.amazon.com/Surely-Feynman-Adventures-Curious-Character/dp/0393316041'],
  "Einstein: His Life and Universe": ["", "Walter Isaacson", false, 'https://www.amazon.com/Einstein-Life-Universe-Walter-Isaacson/dp/0743264746'],
  "Steve Jobs": ["", "Walter Isaacson", false, 'https://www.amazon.com/Steve-Jobs-Walter-Isaacson/dp/1451648537'],
  "Elon Musk": ["", "Ashlee Vance", false, 'https://www.amazon.com/Elon-Musk-SpaceX-Fantastic-Future/dp/006230125X'],
  "Benjamin Franklin: An American Life": ["", "Walter Isaacson", false, 'https://www.amazon.com/Benjamin-Franklin-American-Walter-Isaacson/dp/074325807X'],
  "The Autobiography of Malcolm X": ["", "Alex Haley, Malcom X", false, 'https://www.amazon.com/Autobiography-Malcolm-Told-Alex-Haley/dp/0345350685'],
  "Man's Search for Meaning": ["", "Viktor Frankl", false, 'https://www.amazon.com/Mans-Search-Meaning-Viktor-Frankl/dp/080701429X'],
  "The Body: A Guide for Occupants": ["", "Bill Bryson", false, 'https://www.amazon.com/Body-Guide-Occupants-Bill-Bryson/dp/0385539304'],
  "Immune": ["Hands down the best inroductory book to the immune system", "Philipp Dettmer", true, 'https://www.amazon.com/Immune-Journey-Mysterious-System-Keeps/dp/0593241312'],
  "Atomic Habits": ["", "James Clear", false, 'https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299'],
  "12 Rules for Life": ["", "Jordan Peterson", false, ''],
  "Beyond Order": ["", "Jordan Peterson", false, ''],
  "How to win friends and influence people": ["", "Dale Carnegie", false, 'https://www.amazon.com/How-Win-Friends-Influence-People/dp/0671027034'],
  "The Bhagavad Gita": ["", "Eknath Easwaran", false, ''],
  "Narconomics: How to Run a Drug Cartel": ["", "Tom Wainwright", false, ''],
  "Start with Why": ["", "Simon Sinek", false, ''],
  "Civilization and Its Discontents": ["", "Sigmund Freud", false, ''],
  "The Boy in the Striped Pajamas": ["", "John Boyne", false, ''],
  "Think Again": ["", "Adam Grant", false, 'https://www.amazon.com/Think-Again-Power-Knowing-What/dp/1984878107'],
  "Lifespan: Why We Age – and Why We Don't Have To": ["David's book is a great introduction to the field of logenvity(living longer and healthier), yet some of his claims that he makes in the book had been disproven.", "David Sinclair", false, 'https://www.amazon.com/Lifespan-Why-Age_and-Dont-Have/dp/1501191977'],
  "Sickening: How Big Pharma Broke American Health ": ["", "John Abramson", false, ''],
  "The Subtle Art of Not Giving a F*ck": ["", "Mark Manson", false, ''],
  "Everything Is F*cked": ["", "Mark Manson", false, 'https://www.amazon.com/Everything-cked-Book-about-Hope/dp/0062888439'],
  "Beyond Order": ["", "Jordan Peterson", false, ''],
  "Think and Grow Rich": ["", "Napoleon Hill", false, 'https://www.amazon.com/Think-Grow-Rich-Napoleon-Hill/dp/0785833528'],
  "Why We Sleep": ["", "Matthew Walker", false, 'https://www.amazon.com/Why-We-Sleep-Unlocking-Dreams/dp/1501144316'],
  "Behave": ["Long yet often disorganized read about the human behavior. Amazing book by an amazing mind.", "Robert Sapolsky", false, 'https://www.amazon.com/Behave-Biology-Humans-Best-Worst/dp/1594205078'],
  "Wizard: the Life and Times of Nikola Tesla": ["", "Marc Seifer", false, 'https://www.amazon.com/Wizard-Times-Nikola-Biography-Genius/dp/0806539968'],
  "The Emperor of All Maladies": ["Enthralling book on cancer, it's history, and how we began to understand the deadly malady. I particularly enjoyed how the author goes deep on very complex concepts with very engaging language. I am not surprised by the recognition this book has gained from the public, it is truly an amazing read.", "Siddhartha Mukherjee", true, 'https://www.amazon.com/Emperor-All-Maladies-Biography-Cancer/dp/1439170916'],
  "The Gene": ["Amazing journey of the history of the discovery of DNA, among others.", "Siddhartha Mukherjee", true, 'https://www.amazon.com/Gene-Intimate-History-Siddhartha-Mukherjee/dp/147673352X/ref=sr_1_1?crid=VMVG3A3W6H4V&keywords=the+gene&qid=1647910600&s=books&sprefix=the+gene%2Cstripbooks%2C152&sr=1-1'],
  "Other Minds: The Octopus, the Sea, and the Deep Origins of Consciousness": ["", "Peter Godfrey-Smith", false, 'https://www.amazon.com/Other-Minds-Octopus-Origins-Consciousness/dp/0374227764'],
  "Bad Blood: Secrets and Lies in a Silicon Valley Startup": ["", "John Carreyrou", false, 'https://www.amazon.com/Bad-Blood-Secrets-Silicon-Startup/dp/152473165X'],
  "Educated": ["", "Tara Westover", false, 'https://www.amazon.com/Educated-Memoir-Tara-Westover/dp/0399590501'],
  "Outliers": ["", "Malcolm Gladwell", false, 'https://www.amazon.com/Outliers-Story-Success-Malcolm-Gladwell/dp/0316017930'],
  "Zero to One": ["Book about why you should not start a company that is going to compete, you should rather innovate.", "Peter Thiel", true, 'https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296'],
  "Measure What Matters:": ["OKRs are a great way to set measurable goals, either personal, but mainly to improved team performance.", "John Doerr", false, 'https://www.amazon.com/Measure-What-Matters-Google-Foundation/dp/0525536221'],
  "Shoe Dog: A Memoir by the Creator of Nike": ["Very well written and interesting story of the founder of Nike", "Phil Knight", false, 'https://www.amazon.com/Shoe-Dog-Memoir-Creator-Nike/dp/1501135910/ref=sr_1_1?crid=1LE3PTP9MUC7B&keywords=shoe+dog&qid=1647910948&s=books&sprefix=shoe+do%2Cstripbooks%2C154&sr=1-1'],
  "Thinking, Fast and Slow": ["", "Daniel Kahneman", false, 'https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555'],
  "The Alchemist": ["Short and fun read that show that life is not about the goal but about the journey. I would recommend to read this for anyone, mainly people just starting high school, and figuring out what they want to do with their lives.", "Paulo Coelho", true, 'https://www.amazon.com/Alchemist-Paulo-Coelho/dp/0061122416'],
  "The Little Prince": ["You read the little prince twice, once when you are a kid and the other time when you grow up.", "Antoine de Saint-Exupéry", false, 'https://www.amazon.com/Little-Prince-Antoine-Saint-Exup%C3%A9ry/dp/0156012197'],
  "Sapiens: A Brief History of Humankind": ["", "Yuval Noah Harari", true, 'https://www.amazon.com/Sapiens-Humankind-Yuval-Noah-Harari/dp/0062316095'],
  "Homo Deus": ["Enjoyable read with a lots of ideas of how future of humanity will look like.", "Yuval Noah Harari", true, 'https://www.amazon.com/Homo-Deus-Brief-History-Tomorrow/dp/0062464310'],
  "21 Lessons for the 21st Century": ["", "Yuval Noah Harari", false, 'https://www.amazon.com/Lessons-21st-Century-Yuval-Harari/dp/0525512179/ref=pd_bxgy_img_2/139-9519301-6004847?pd_rd_w=uK18h&pf_rd_p=6b3eefea-7b16-43e9-bc45-2e332cbf99da&pf_rd_r=192QB7RYK1XR6W3EGJJ8&pd_rd_r=0a8c4e45-1001-4160-9e47-3dad98c614a9&pd_rd_wg=Xklwo&pd_rd_i=0525512179&psc=1'],
  "Factfulness": ["Who knew social media is not right about the world? That is unfromatunatelly where we get most of our information. This book is great in combating what we think we know about the world, and how everything is actually getting better.", "Hans Rosling", true, 'https://www.amazon.com/Factfulness-Reasons-World-Things-Better/dp/1250107814'],
  "The Power of Habit": ["", "Charles Duhigg", false, 'https://www.amazon.com/Power-Habit-What-Life-Business/dp/081298160X'],
  "The 5 Second Rule": ["She came up with a quote, about which she wrote a book. This should not have been even 2 pages long, but if it helps people than it's great", "Mel Robbins", false, ''],
  "The Everything Store": ["", "Brad Stone", false, 'https://www.amazon.com/Everything-Store-Jeff-Bezos-Amazon/dp/0316219266'],
  "What If?: Serious Scientific Answers to Absurd Hypothetical Questions": ["Fun summer read", "Randall Munroe", false, 'https://www.amazon.com/What-If-Scientific-Hypothetical-Questions/dp/0544272994/ref=sr_1_1?crid=8RBZ0GPK5DP3&keywords=What+if%3F&qid=1647911441&s=books&sprefix=what+if+%2Cstripbooks%2C171&sr=1-1'],
  "How To: Absurd Scientific Advice for Common Real-World Problems": ["Fun summer read nr. 2", "Randall Munroe", false, 'https://www.amazon.com/How-Absurd-Scientific-Real-World-Problems/dp/0525537090/ref=pd_bxgy_img_1/139-9519301-6004847?pd_rd_w=mEQdr&pf_rd_p=6b3eefea-7b16-43e9-bc45-2e332cbf99da&pf_rd_r=MG4974572J9Q7PKSPBZV&pd_rd_r=e39b2286-2742-4ca5-bc44-507037371f9b&pd_rd_wg=sqMHC&pd_rd_i=0525537090&psc=1'],
  "Talking to Strangers": ["This book shows how difficult conversations are, and how we actually suck at understanding people", "Malcolm Gladwell", false, 'https://www.amazon.com/Talking-Strangers-Should-about-People/dp/0316299227/ref=sr_1_1?crid=3RO6R34FSGRWE&keywords=Talking+to+strangers&qid=1647911523&s=books&sprefix=talking+to+strangers%2Cstripbooks%2C162&sr=1-1'],
  "The Upstarts": ["First book I read on startups, got me interested in the field", "Brad Stone", false, 'https://www.amazon.com/Upstarts-Airbnb-Companies-Silicon-Changing/dp/0316388394'],
  "Moonwalking with Einstein": ["An autobiography of the authors journey through mnemonics, but I expected more practical concepts to be introduced with the book.", "Joshua Foer", false, 'https://www.amazon.com/Moonwalking-Einstein-Science-Remembering-Everything/dp/0143120530'],
  "The Great Gatsby": ["Book is better than the movie", "F. Scott Fitzgerald", false, 'https://www.amazon.com/Great-Gatsby-F-Scott-Fitzgerald/dp/0743273567'],
  "The Lord of the Rings": ["Listen to this book on a road trip around Italy, I went to with my dad", "J. R. R. Tolkien", false, 'https://www.amazon.com/Lord-Rings-J-R-R-Tolkien/dp/0544003411'],
  "Da Vinci Code": ["", "Dan Brown", false, 'https://www.amazon.com/Vinci-Code-Robert-Langdon/dp/0307474275'],
  "The Adventures of Sherlock Holmes": ["", "Arthur Conan Doyle", false, 'https://www.amazon.com/Adventures-Sherlock-Holmes-Arthur-Conan/dp/0486474917'],
  "A Room of One's Own": ["", "Virginia Woolf", false, 'https://www.amazon.com/Room-Ones-Own-Virginia-Woolf/dp/1614272778'],
  "The Giver": ["", "Lois Lowry", false, 'https://www.amazon.com/Giver-Quartet-Lois-Lowry/dp/0544336267'],
  "Antigone": ["", "Sophocles", false, 'https://www.amazon.com/Antigone-Sophocles/dp/1580493882'],
  "Maus": ["", "Art Spiegelman", false, 'https://www.amazon.com/Complete-Maus-Art-Spiegelman/dp/0679406417'],
  "Medical Medium": ["This was a gift to my grandma from her doctor, it was actually quite an interesting book about a man who claims to be in contact with a medium, and helps to heal people.", "Anthony William", false, 'https://www.amazon.com/Medical-Medium-Secrets-Chronic-Mystery/dp/1401948294'],
  "The Longevity Paradox": ["", "Steven Gundry", false, 'https://www.amazon.com/Longevity-Paradox-Young-Ripe-Plant/dp/0062843397'],
  "How Not to Be Wrong: The Power of Mathematical Thinking": ["", "Jordan Ellenberg", false, 'https://www.amazon.com/How-Not-Be-Wrong-Mathematical/dp/0143127535'],
  "Algorithms to Live By": ["", "Brian Christian", false, 'https://www.amazon.com/Algorithms-Live-Computer-Science-Decisions/dp/1250118360/ref=pd_lpo_2?pd_rd_i=1250118360&psc=1'],
  "An Elegant Defense": ["A book on the immune system, it is an interesting read but to anyone who is trully interested how does such system function, I recommend to read Immune", "Matt Richtel", false, 'https://www.amazon.com/Elegant-Defense-Extraordinary-Science-Immune-ebook/dp/B07C66KJC1'],
  "The Keys": ["I would say after reading this, I am ready to succeed", "DJ Khaled", false, 'https://www.amazon.com/Keys-DJ-Khaled/dp/0451497570'],
  "Superintelligence": ["This book is enticing, it described the different paths we can create Artificial Intelligence, beyond to what people think, that it might only come from computers.", "Nick Bostrom", true, 'https://www.amazon.com/Superintelligence-Dangers-Strategies-Nick-Bostrom/dp/1501227742'],
  "Prediction Machines": ["", "Ajay Agrawal", false, 'https://www.amazon.com/Prediction-Machines-Economics-Artificial-Intelligence/dp/1633695670'],
  "Exactly What to Say": ["", "Phil M Jones", false, 'https://www.amazon.com/Exactly-What-Say-Influence-Impact/dp/1989025005'],
  "A Brief History of Time": ["", "Stephen Hawking", false, 'https://www.amazon.com/Brief-History-Time-Stephen-Hawking/dp/0553380168'],
  "Epic of Gilgamesh": ["First recorded epic from around 2100 BC", "Anonymous", false, 'https://www.amazon.com/Epic-Gilgamesh/dp/014044100X'],
  "The Crucible": ["", "Arthur Miller", false, 'https://www.amazon.com/Crucible-Arthur-Miller/dp/0822202557'],
  "Saint Manuel Bueno, Martyr": ["", "Miguel de Unamuno", false, 'https://www.amazon.com/Colecci%C3%B3n-Unamuno-Manuel-m%C3%A1rtir-Spanish/dp/1547136006'],
  "Civil Disobedience": ["", "Henry David Thoreau", false, 'https://www.amazon.com/Civil-Disobedience-Henry-David-Thoreau/dp/1619490927'],
  "The Communist Manifesto": ["", "Friedrich Engels, Karl Marx", false, 'https://www.amazon.com/Communist-Manifesto-Karl-Marx/dp/B08FTTFC49/ref=sr_1_2_sspa?crid=1DAVEA2L01S3M&keywords=the+communist+manifesto&qid=1647917567&s=books&sprefix=the+commu%2Cstripbooks%2C147&sr=1-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFSWjE1NFlZVU1CUVcmZW5jcnlwdGVkSWQ9QTAyMzE4NzgzRjIxTUVPRUNUWE05JmVuY3J5cHRlZEFkSWQ9QTA3NDYxOTBJNkJXVE5JVkwxSzImd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl'],
  "Borderlands / La Frontera": ["", "Gloria Anzaldúa", false, 'https://www.amazon.com/Borderlands-Frontera-Mestiza-Gloria-Anzald%C3%BAa/dp/1879960850'],
  "The Trial and Death of Socrates": ["", "Plato", false, 'https://www.amazon.com/Trial-Death-Socrates-Plato/dp/0872205541'],
  "Mockingjay": ["", "Suzanne Collins", false, 'https://www.amazon.com/Mockingjay-Hunger-Games-Suzanne-Collins/dp/0439023513'],
  "The Importance of Being Earnest": ["", "Oscar Wilde", false, 'https://www.amazon.com/Importance-Being-Earnest-Oscar-Wilde/dp/0486264785'],
  "The Old Man and the Sea": ["", "Ernest Hemingway", false, 'https://www.amazon.com/Old-Man-Sea-Ernest-Hemingway/dp/0684801221'],
  "The Case for Mars": ["This book may be a bit outdated, but it is an interesting deep scientific read, on how we might get to mars.", "Robert Zubriny", false, 'https://www.amazon.com/Case-Mars-Plan-Settle-Planet/dp/145160811X'],
  "Hamlet": ["", "William Shakespeare", false, ''],
  "King Leopold's Ghost" : ["A horrible, yet often unfamiliar story, on how did the D.R. of Congo suffer slavery in 1885, from the rule of King Leopold, which ended up in a genocide of 10 million people.", "Adam Hochschild", false, 'https://www.amazon.com/King-Leopolds-Ghost-Heroism-Colonial/dp/0618001905/ref=sr_1_1?crid=1NTSBYIFMKX0A&keywords=kings+leopold%27s+ghost&qid=1648309631&sprefix=kings+leo%2Caps%2C467&sr=8-1']
}

var books = []

for (book in bookInfo) {
  books.push(book);
}

books.sort()

var div = document.createElement("div");
div.className = "intro books"
body.appendChild(div);
// creating all cells
let recText = "⭐️  "

for (var i = 0; i < books.length; i += 1) {
  // creates a table row
  let par = document.createElement("p");
  par.className = "intro books"

  var bookName = books[i];
  let bookDetails = bookInfo[bookName]
  let bookAuthor = bookDetails[1];
  let bookDescription = bookDetails[0];
  let isRec = bookDetails[2];
  var bookLink = bookDetails[3];

  let nameText = `<button class="button" onclick="window.open( ' ${bookLink} ','_blank')">${bookName}</button>`

  par.className = "bookDescription";
  var colon = ": ";

  if (bookDescription == "") {
    colon = "";
  }

  let text = [nameText, " (", bookAuthor, ")" ,colon, bookDescription].join("");

 // let text = bookName + ' ' + `<button class="button" onclick="window.open(bookLink,'_blank')">${item}</button>` +
  if (isRec == true) {
     text = [recText, nameText, " (", bookAuthor, ")", colon, bookDescription].join("");
  }

  let buttonId = [books[i]];

 // buttonId.forEach(item => {
 //   text = text.replace(item, `<button class="button" onclick="window.open(bookLink,'_blank')">${item}</button>`);
 //d });

  par.insertAdjacentHTML('afterbegin', text);
  div.appendChild(par);

}


