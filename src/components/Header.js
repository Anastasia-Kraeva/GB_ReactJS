import React from 'react';
import { Link } from "@material-ui/core";
import {useSelector} from "react-redux";

export function Header() {
    const name = useSelector(state => state.profile.name);

    return (
        <>
            <Link to="/profile">Мой профиль: {name}</Link>
            <h1>Чат</h1>
        </>
    )
}