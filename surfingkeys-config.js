api.mapkey('ymd', "Copy current page's link with markdown", function() {
  const url = new URL(window.location.href);
  var title = window.document.title.replace(/(<|>)/g, '\\$1')
  api.Clipboard.write(`[${title}](${url.href})`);
});