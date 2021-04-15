import React, {useState} from 'react';
import {AUTORS} from "../utils/constans";
import {TextField, Button} from "@material-ui/core";

export function Input({onAddMessage}) {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddMessage({
            sender: AUTORS.ME, 
            text: value,
            id: null,
        });
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField value={value} onChange={handleChange}/>
            <Button color="primary" type="submit">Отправить</Button>
            {/* <input type="submit" /> */}
        </form>
    )
}