let ajaxreq = false;
let ajaxCallback;

// ajaxRequest: Sets up a Request
function ajaxRequest(filename) {
  try {
    ajaxreq = new XMLHttpRequest();
  } catch (error) {
    try {
      ajaxreq = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (error) {
      return false;
    }
  }
  ajaxreq.open("GET", filename, true);
  ajaxreq.onreadystatechange = ajaxResponse;
  ajaxreq.send(null);

  // ajaxREsponse: Wait for response and calls a function
  function ajaxResponse() {
    if (ajaxreq.readyState != 4) return;
    if (ajaxreq.status == 200) {
      // if the request succeeds...
      if (ajaxCallback) ajaxCallback();
    } else alert("Request Failed: " + ajaxreq.statusText);
  }
  return true;
}
