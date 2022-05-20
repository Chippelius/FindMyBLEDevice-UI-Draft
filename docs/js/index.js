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

  const SELECTED = "ble-button-1";
  let selectedDevice = document.getElementById("selectedDevice");
  let deviceButtons = document.getElementsByClassName("ble-button");
  deviceButtons[0].style.fontWeight = "700";
  deviceButtons[0].style.color = "rgb(20, 115, 165)";
  selectedDevice.textContent = deviceButtons[0].textContent;
  for(const button of deviceButtons) {
    button.onclick = () => {
      for(const otherButton of deviceButtons) {
        otherButton.style.fontWeight = "";
        otherButton.style.color = "";
      }
      button.style.fontWeight = "700";
      button.style.color = "rgb(20, 115, 165)";
      selectedDevice.textContent = button.textContent;
      window.toggleOverlay();
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
  //helpContainer.style.display = "none";

  window.toggleHelp = function() {
    if(!helpVisible) {
      helpContainer.style.display = "block";
      helpVisible = true;
    } else {
      helpContainer.style.display = "none";
      helpVisible = false;
    }
  }




  let mains = Array.prototype.slice.call(document.getElementsByClassName("main"), 0).reverse();
  let backButton = document.getElementById("backButton");
  let switchContainer = document.getElementById("switchContainer");
  let switchGPS = document.getElementById("switchGPS");
  let switchBluetooth = document.getElementById("switchBluetooth");

  window.setMain = function(i) {
    for(let j=0; j<mains.length; ++j) {
      mains[j].style.left = "" + ((j - i) * 100) + "%";
    }
    if(i === 0) {
      backButton.style.width = "1px";
      backButton.style.paddingLeft = "0px";
      //backButton.style.paddingRight = "0px";
      switchContainer.style.top = "-63px";
    } else {
      backButton.style.width = "55px";
      backButton.style.paddingLeft = "20px";
      //backButton.style.paddingRight = "15px";
      switchContainer.style.top = "0px";
      if(i === 1) {
        switchGPS.style.backgroundColor = 'rgb(73, 80, 88)';
        switchBluetooth.style.backgroundColor = 'rgb(46, 52, 57)';
      } else {
        switchGPS.style.backgroundColor = 'rgb(46, 52, 57)';
        switchBluetooth.style.backgroundColor = 'rgb(73, 80, 88)';
      }
    }
  }

})();