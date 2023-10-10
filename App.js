const originalRoot = document.getElementById("root1");
originalRoot.addEventListener("click", (e) => console.log("clicked on root"));

const parent = React.createElement("h1", {}, "Hello world!");

const root = ReactDOM.createRoot(originalRoot);

console.log(originalRoot);
console.log(root);
console.log("root: ", root == originalRoot);

root.render(parent);
