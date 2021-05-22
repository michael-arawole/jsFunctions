// Set cookie (3 = 3 days)
setCookie('cookie_name', 'cookie_value', 3);

// Get cookie
console.log(getCookie('cookie_name'));

// Delete cookie
eraseCookie('cookie_name');


// Ajax request (form example)
$("form#ajax-form").on("submit", function(event) {
  event.preventDefault();
  var formData = new FormData($(this)[0]);
  
  /* If your form element has attr "action", you can uncomment the next line */
  // url_to_file = $(this).attr("action");
  
  /* else */
  url_to_file = "./url-to-file";
  
  // call ajax request
  var req = ajax_request(url_to_file, formData);
  req.done(function (data) {
    // success!, perform action
  });
  req.fail(function (xhr) {
    // failed
  });
});

// Ajax request (using custom data)
data = {
  data_1:'custom data',
  data_2:'custom data 2'
};
var req = ajax_request("./url-to-file", data, false);
req.done(function(data){
  // success
});
req.fail(function(xhr){
  console.log(xhr.StatusText);
  // failed
});

// Redirect
redirect("./url");
