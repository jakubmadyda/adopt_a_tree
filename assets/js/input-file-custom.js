// -------------------------------------
// FILE INPUT: CUSTOM: IMAGE PREVIEW
// Uses the FileReader API
//  - Parameters:
//    - input {DOM element} : The file input
//    - imgId {string} : The ID of the image element where the thumbnail should appear

function readURL(input, imgId) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      document.getElementById(imgId).src = e.target.result;
    };

    reader.readAsDataURL(input.files[0]);
  }
}