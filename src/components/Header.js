import React from 'react';
import { Link } from "@material-ui/core";

export default function Header() {
    return (
        <>
            <Link to="/profile">Мой профиль</Link>
            <h1>Чат</h1>
        </>
    )
}
//почему Link не меняет путь?