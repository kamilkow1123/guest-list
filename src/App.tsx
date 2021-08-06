import React, { useState } from "react";
import AddToList from "./components/AddToList";
import List from "./components/List";
import "./style/app.css";

export interface IState {
    people: {
        name: string;
        age: number;
        url: string;
        note?: string;
    }[];
}

function App() {
    const [ people, setPeople ] = useState<IState["people"]>([
        {
            name: "John Mayer",
            url: "https://jazzsoul.pl/images//2019/02/john-mayer-lede-cc.jpg",
            age: 44,
            note: "Shouldn't matter but it does",
        },
        {
            name: "Chris Martin",
            url:
                "https://cdn.natemat.pl/4c0cd1880af4188e078e76b3280a0e86,0,0,0,0.jpg",
            age: 44,
            note: "When you try your best but you don't succeed",
        },
    ]);

    return (
        <div className="home-container">
            <div className="home">
                <h1>People invited to my party</h1>
                <List people={people} />
                <AddToList people={people} setPeople={setPeople} />
            </div>
        </div>
    );
}

export default App;
