function loadData() {

  var $body = $('body');
  var $wikiElem = $('#wikipedia-links');
  var $nytHeaderElem = $('#nytimes-header');
  var $nytElem = $('#nytimes-articles');
  var $greeting = $('#greeting');

  // clear out old data before new request
  $wikiElem.text("");
  $nytElem.text("");

  // load streetview

  // YOUR CODE GOES HERE!
  var streetVal = $('#street').val();
  var cityVal = $('#city').val();
  var fullAddress = streetVal + ', ' + cityVal;

  $greeting.text('So you want to live on ' + streetVal + '?');

  var streetviewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + fullAddress + '';
  $body.append('<img class="bgimg" src="' + streetviewUrl + '">');

  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  url += '?' + $.param({
    'api-key': "0122ecaf55c14881a64e98307423ad88"
  });

  $.getJSON(url, function(data) {
    console.log(data);
    var item = data.response.docs;
    console.log(item);
  });

  return false;
};

$('#form-container').submit(loadData);
