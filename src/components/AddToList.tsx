import React, { useState } from "react";
import "../style/addToList.css";
import { IState as Props } from "../App";

interface IProps {
    people: Props["people"];
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
    const [ input, setInput ] = useState({
        name: "",
        age: "",
        url: "",
        note: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (): void => {
        if (!input.name || !input.age || !input.url) {
            return;
        }

        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                url: input.url,
                note: input.note,
            },
        ]);

        setInput({
            name: "",
            age: "",
            url: "",
            note: "",
        });
    };

    return (
        <div className="form">
            <input
                type="text"
                placeholder="Name"
                className="form__input"
                value={input.name}
                onChange={handleChange}
                name="name"
            />
            <input
                type="text"
                placeholder="Age"
                className="form__input"
                value={input.age}
                onChange={handleChange}
                name="age"
            />
            <input
                type="text"
                placeholder="Image Url"
                className="form__input"
                value={input.url}
                onChange={handleChange}
                name="url"
            />
            <textarea
                placeholder="Note"
                className="form__textarea"
                value={input.note}
                onChange={handleChange}
                name="note"
            />
            <button onClick={handleSubmit} className="form__button">
                Add to list
            </button>
        </div>
    );
};

export default AddToList;
