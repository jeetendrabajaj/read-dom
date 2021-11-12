var tab_title = '';
var tab_url = '';
let parseHtml = document.getElementById("parseHtml");
let d1 = document.querySelector("#id1");
alert(d1.textContent);
// function display_h1 (results){
//   h1=results;
//   document.querySelector("#id1").innerHTML = "<p>tab url: " + tab_url + "</p><p>tab title: " + tab_title + "</p><p>dom h1: " + h1 + "</p>";
// }
// function display_img (results){
//     alert(results.length);
//     document.querySelector("#id1").innerHTML += "Img: <img src='"+results.src+"'/>";
// }
// chrome.tabs.query({active: true}, function(tabs) {
//   var tab = tabs[0];
//   console.log("--------------------");
//   console.log(tab);
//   console.log("--------------------");
//   tab_title = tab.title;
//   tab_url = tab.url;
//   chrome.tabs.executeScript(tab.id, {
//     code: 'document.querySelector("h1").textContent'
//   }, display_h1);
//   chrome.tabs.executeScript(tab.id, {
//     code: 'document.getElementsByTagName("img")'
//   }, display_img);
// });


// When the button is clicked, inject setPageBackgroundColor into current page

parseHtml.addEventListener("click", async () => {
    
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
  
      target: { tabId: tab.id },
  
      function: getPageHTML,
  
    });
  
  });
  
  // The body of this function will be executed as a content script inside the
  
  // current page
  
  function getPageHTML() {
      alert("123");
    console.log("----------------");
    var images = document.getElementsByTagName("img");
    alert(d1.textContent);
    //document.querySelector("#id1").innerHTML = "Img: <img src='"+images[0].src+"'/>";
    //document.querySelector("#id1").innerHTML = "<p>456767</p>";
    //alert(images.length);
   // alert(images[0].src);
    // for (var i = 0; i < images.length; i++) {
    //     var image = images[i];
    //     document.querySelector("#id1").innerHTML += "Img: <img src='"+image.src+"'/>";
    // }
    // chrome.storage.sync.get("color", ({ color }) => {
  
    //   document.body.style.backgroundColor = color;
  
    // });
  
  }