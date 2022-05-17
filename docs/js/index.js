(function() {


  let overlayContainer = document.getElementById("overlayContainer");
  let overlayVisible = false;
  let overlayPreviousBottom = overlayContainer.style.bottom;

  let overlayArrow = document.getElementById("overlayArrow");

  let overlayList = document.getElementById("overlayList");
  overlayList.style.position = "relative";
  overlayList.style.zIndex = 100;

  window.toggleOverlay = function() {
    if(!overlayVisible) {
      overlayContainer.style.bottom = 0;
      overlayArrow.style.transform = "rotate(180deg)";
      overlayVisible = true;
    } else {
      overlayContainer.style.bottom = overlayPreviousBottom;
      overlayArrow.style.transform = "";
      overlayVisible = false;
    }
  }




  let settingsContainer = document.getElementById("settingsContainer");
  let settingsVisible = false;

  window.toggleSettings = function() {
    if(!settingsVisible) {
      settingsContainer.style.right = "0%";
      settingsVisible = true;
    } else {
      settingsContainer.style.right = "-100%";
      settingsVisible = false;
    }
  }




  let helpContainer = document.getElementById("helpContainer");
  let helpVisible = false;
  //helpContainer.style.visibility = "hidden";
  //helpContainer.style.display = "block";

  window.toggleHelp = function() {
    if(!helpVisible) {
      helpContainer.style.display = "inherit";
      helpVisible = true;
    } else {
      helpContainer.style.display = "none";
      helpVisible = false;
    }
  }

})();