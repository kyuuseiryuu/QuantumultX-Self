const contentJS = `
try {
  document.querySelector('#xuanfu_news_id').remove();
} catch() {}
try {
  document.querySelector('[data-type="close111"]').click();
} catch() {}
document.querySelectorAll('newsfeed').forEach(e => e.remove());
document.querySelectorAll('center').forEach(e => e.remove());
document.querySelectorAll('cmx').forEach(e => e.remove());
document.querySelectorAll('center').forEach(e => e.remove());
`;

$done({ body: contentJS });
