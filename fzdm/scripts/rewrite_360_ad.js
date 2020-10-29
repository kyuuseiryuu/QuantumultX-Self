const contentJS = `
document.querySelector('#xuanfu_news_id').remove();
document.querySelectorAll('newsfeed').forEach(e => e.remove());
document.querySelectorAll('center').forEach(e => e.remove());
document.querySelectorAll('cmx').forEach(e => e.remove());
document.querySelectorAll('center').forEach(e => e.remove());
`;

$done({ body: contentJS });
