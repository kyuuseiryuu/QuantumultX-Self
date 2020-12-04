const content = `
  <script>
    setInterval(() => {
      document.querySelectorAll('[data-type="close111"]').forEach(e => e.click());
    });
  </script>
</html>
`
const body = $response.body.replace('</html>', content);

$done({ body });
