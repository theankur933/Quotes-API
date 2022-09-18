let datajson = "";
let authordata = "";
const Clickbtn = () => {
  getData();
};

const TweetMe = () => {
  let link = `https://twitter.com/intent/tweet?text=${authordata.text}`;
  window.open(link);
};

const InstaMe = () => {
  let link = `https://www.instagram.com/create/story?text=${authordata.text}`;
  window.open(link);
};

const getData = () => {
  let datarandom = Math.floor(Math.random() * 100);
  let authors = document.getElementById("author");
  let quotes = document.getElementById("qutoes");

  authordata = datajson[datarandom];
  quotes.innerHTML = `${authordata.text}`;
  authordata == null
    ? (authors.innerHTML = "unknown")
    : (authors.innerHTML = `${authordata.author}`);
};

const getApi = async () => {
  const api = "https://type.fit/api/quotes";
  try {
    let data = await fetch(api);
    datajson = await data.json();
    getData();
  } catch {
    console.log("err");
  }
};

let clickbtn = document.getElementById("clickbtn");
clickbtn.addEventListener("click", Clickbtn);
let tweetme = document.getElementById("tweet");
tweetme.addEventListener("click", TweetMe);
let insta = document.getElementById("insta");
insta.addEventListener("click", InstaMe);
getApi();
