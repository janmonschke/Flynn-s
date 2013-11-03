jQuery(function(){
  window.DEBUG_MESSAGES = false;
  window.DEBUG_WINDOWING = false;
  windowingInitialize();

  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/testroms/Tetris.gb', true);
  xhr.responseType = 'blob';
  xhr.onload = function(e) {
    if (this.status == 200) {
      // Note: .response instead of .responseText
      // var blob = new Blob([this.response], {type: 'image/png'});
      var fr = new FileReader();
      fr.onload = function(){
        start(document.getElementById('mainCanvas'), this.result);
      }
      fr.readAsBinaryString(this.response);
    }
  };
  xhr.send();

  // try {
  //   //Gecko 1.9.2+ (Standard Method)
  //   var binaryHandle = new FileReader();
  //   binaryHandle.onload = function () {
  //     if (this.readyState == 2) {
  //       cout("file imported.", 0);
  //       try {
  //         import_save(this.result);
  //         refreshStorageListing();
  //       }
  //       catch (error) {
  //         alert(error.message + " file: " + error.fileName + " line: " + error.lineNumber);
  //       }
  //     }
  //     else {
  //       cout("importing file, please wait...", 0);
  //     }
  //   }
  //   binaryHandle.readAsBinaryString(this.files[this.files.length - 1]);
  // }

});