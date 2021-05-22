// +------------------------------------------------------------------------+
// | @author        : Michael Arawole (HENT Technologies)
// | @author_url    : https://logad.net
// | @author_email  : henttech@gmail.com
// +------------------------------------------------------------------------+
// | Copyright (c) 2021 HENT Technologies. All rights reserved.
// +------------------------------------------------------------------------+
// Last updated : 22 May, 2021

/* SEE usage.js ON HOW TO USE THESE FUNCTIONS */

// +----------------------------+
// | Cookies (Set, get, delete)
// +----------------------------+
// Create cookie
function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

// Get cookie value
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

// Delete cookie
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

// Ajax requests handler
function ajax_request(url, data, form = true) {
    if(form == false){
        var send = $.ajax({
            url: url,
            type: "POST",
            data: data,
            dataType: "json",
            cache: false,
            error: function (xhr) {
                if (xhr.status == 404 || xhr.status == 500) {
                    alert("An unexpected error seems to have occurred. Now that we know, we're working to fix it ☺. ERROR : "+xhr.status);
                }
            },
        });
    }
    if(form == true){
        var send = $.ajax({
            url: url,
            type: "POST",
            data: data,
            dataType: "json",
            cache: false,
            contentType: false,
            processData: false,
            error: function (xhr) {
                if (xhr.status == 404 || xhr.status == 500) {
                    alert("An unexpected error seems to have occurred. Now that we know, we're working to fix it ☺. ERROR : "+xhr.status);
                }
            },
        });
    }
    return send;
}

// Redirect page using javascript (Personally, i find window.href.. stressful)
function redirect(url, reload = false) {
	if (!reload) {
		window.location.href = url;
	}
	else {
        window.location.reload(true);
	}
}
