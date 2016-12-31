export default function ({ html }) {
  return `
<html lang="en">
  <head><title>HELLO DOLLY!</title></head>
  <body id="body">
    <div id="outlet">
      ${html}
    </div>
  </body>
</html>
`
}
