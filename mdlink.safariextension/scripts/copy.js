safari.application.addEventListener('command', function(event) {
  if (event.command !== 'copy') {
    return;
  }

  var tab = event.target.browserWindow.activeTab;
  var url = tab.url;
  var title = tab.title;

  var md = "[" + title + "](" + url + ")"
  window.prompt("Copy to clipboard: Cmd+C, Enter", md);
}, false);
