import React from 'react';
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

export function Header() {
    const name = useSelector(state => state.profile.name);
    const history = useHistory();

    return (
        <>
            <a onClick={() => {history.push("/profile");}}>Мой профиль: {name}</a>
            <h1>Чат</h1>
        </>
    )
}
