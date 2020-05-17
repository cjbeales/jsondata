var jsonData = [];

// Json Request
var request = new XMLHttpRequest();
request.open('GET', '/assets/json/quotes.json', true);

request.onload = function () {
  if (this.status >= 200 && this.status < 400) {
    // Success!
    console.log("success");

    var data = JSON.parse(this.response);

    let quotes = data.quotes;

    for (let i = 0; i < quotes.length; i++) {
      jsonData.push(quotes[i]);
    }

  } else {
    // We reached our target server, but it returned an error
    console.log('error');
  }
};

request.onerror = function () {
  // There was a connection error of some sort
};

request.send();

console.log(jsonData);