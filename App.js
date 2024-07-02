/* <div id="parent">
     <div id="child">
        <h1>i'm h1 tag</h1>
        <h2>i'm h2 tag</h2>
    </div>
<div id="child2">
        <h1>i'm h1 tag</h1>
        <h2>i'm h2 tag</h2>
    </div>

</div> */

// ReactElement(Object) => HTML(Browser Understandings)


const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
    ]),
    React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
    ]),
]);
    
    //JSX
    console.log(parent); // object
    const root = ReactDOM.createRoot(document.getElementById("header"));
    root.render(parent);
   