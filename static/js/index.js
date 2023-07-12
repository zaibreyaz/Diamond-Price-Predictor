let submit = document.querySelector("form");
submit.addEventListener('submit',function(event) {
  event.preventDefault(); // prevent form from auto submitting.
  document.querySelector("#result-box").style.visibility="visible";
  document.querySelector("#details-main").style.filter="blur(8px)";

  // Assuming you have a variable called 'Result' in your Flask template
  var resultData = data.Result;

  // Display the result data in a pop-up using SweetAlert
  swal("ML Algorithm Result", resultData, "success");



});
