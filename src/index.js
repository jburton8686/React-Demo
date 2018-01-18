import React from "react";
import ReactDOM from "react-dom";

// var MyTitle = function (props) {
//     return React.createElement(
//         "div",
//         null,
//         React.createElement("h1", { style: { color: props.color } }, props.title)
//     );
// };
const titles = ["cookies are good", "Star Wars is ok", "Eggnog is nasty"];
//console.log(titles.join());

var MyTitle = props => {
    const style = { color: props.color };
    return (
        <div>
            <h1 style={style}>{props.title}</h1>
        </div>
    );
};

const MyFirstComponent = () => {
    const listItems = titles.map(title => <li>{title}</li>);
    return <ul>{listItems}</ul>;
};




// {/* <div>
//     {/* <MyTitle title="Hey There!" color="fuchsia" />
//         <MyTitle title="Go Army!!" color="olive" />
//         <MyTitle title="MMM Cookies" color="orange" /> */}
// </div>
// }; */}


// var MyFirstComponent = function () {
//     return React.createElement(
//         "div",
//         null,
//         React.createElement(MyTitle, { color: "fuchsia", title: "Hey There!" }),
//         React.createElement(MyTitle, { color: "olive", title: "Go Army!!" }),
//         React.createElement(MyTitle, { color: "orange", title: "MMMM Cookies..." })
//     );
// }

ReactDOM.render(
    React.createElement(MyFirstComponent),
    document.getElementById("root")
);