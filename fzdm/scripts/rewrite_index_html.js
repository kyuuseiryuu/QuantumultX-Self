const content = `
<script>
  setInterval(() => {
      document.querySelectorAll('[data-type="close111"]').forEach(e => e.click());
  });
</script>
`
const body = $response.body + content;

$done({ body });


