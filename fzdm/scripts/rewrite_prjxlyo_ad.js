const body = `
setInterval(() => {
  document.querySelectorAll("[data-type='close111']").forEach(e => e.click());
});
document.querySelectorAll('center').forEach(e => e.remove());
`
$done({ body });
