const body = `
const id = setInterval(() => {}, 1000);
for (let i = 0; i <= id; i++ ) {
    clearInterval(i);
}
document.body.style.paddingTop = "0px";
const children = document.body.children;
children[children.length - 1].remove();
`
$done({ body });
