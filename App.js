
/* <div>
    <div>
        <h1></h1>
    </div>
</div> */


const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child1" },
        [React.createElement("h1", {}, "I'm an h1 tag"), React.createElement("h2", {}, "I'm an h2 tag")]), React.createElement("div", { id: "child2" },
            [React.createElement("h1", {}, "I'm an h1 tag") ,React.createElement("h2", {}, "I'm an h2 tag")])]
);



// const heading=React.createElement("h1",{id:"heading",xyz:"abc"},"Hello World from React!");

// console.log(parent);   //rerurn an object

// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);


// const heading = React.createElement("h1", { id: "heading" }, "Hello World from Namaste React!");

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);