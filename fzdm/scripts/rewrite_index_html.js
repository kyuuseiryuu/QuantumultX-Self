const content = `
<script>
  setInterval(() => {
      document.querySelectorAll('[data-type="close111"]').forEach(e => e.click());
  });
</script>
`
const body = $response.body.replace('</html>', '') + content + '</html>';

$done({ body });


