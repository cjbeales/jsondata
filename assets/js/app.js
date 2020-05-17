// Json Request
var request = new XMLHttpRequest();
request.open('GET', '/assets/json/quotes.json', true);

request.onload = function () {
  if (this.status >= 200 && this.status < 400) {
    // Success!
    console.log("success");
    var data = JSON.parse(this.response);
    var quotes = data.quotes;

    (function getQuote() {
      var jsonData = [];

      for (let i = 0; i < quotes.length; i++) {
        let authors = quotes[i].author;
        jsonData.push(quotes[i]);
      }

      let randomQuote = jsonData[Math.floor(Math.random() * jsonData.length)];
      let quoteContainer = document.getElementById('quoteContainer');
      let quoteDiv = document.createElement('div');
      quoteDiv.className = "quote";
      let quoteText = document.createElement('h2');
      quoteText.innerHTML = randomQuote.quote;
      let quoteAuthor = document.createElement('p');
      quoteAuthor.innerHTML = randomQuote.author;

      // Appends
      quoteDiv.appendChild(quoteAuthor);
      quoteDiv.appendChild(quoteText);
      quoteContainer.appendChild(quoteDiv);

      document.getElementById('generate').addEventListener('click', getQuote)
    }());

  } else {
    // We reached our target server, but it returned an error
    console.log('error');
  }
};

request.onerror = function () {
  // There was a connection error of some sort
};

request.send();