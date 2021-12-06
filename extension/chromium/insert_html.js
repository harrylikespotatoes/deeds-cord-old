fetch(chrome.runtime.getURL('/html/html1.html')).then(r => r.text()).then(html => {
  document.getElementById("top-menu").insertAdjacentHTML('afterbegin', html);


});
