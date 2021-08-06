import React from "react";
import "../style/list.css";
import { IState as IProps } from "../App";

const List: React.FC<IProps> = ({ people }) => {
    const renderList = (): JSX.Element[] => {
        return people.map(person => (
            <li className="list__item" key={person.name}>
                <div className="list__header">
                    <img
                        className="list__image"
                        src={person.url}
                        alt="person"
                    />
                    <h2>{person.name}</h2>
                </div>
                <p>{person.age} years old</p>
                <p>{person.note}</p>
            </li>
        ));
    };

    return <ul className="list">{renderList()}</ul>;
};

export default List;
