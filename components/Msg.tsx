"use client";

import React, { useState } from 'react';

export default function ButtonMessage() {
    const [msg, setMsg] = useState("");  // État pour le message

    const handleClick = () => {
        setMsg("Vous avez cliqué sur le bouton !");
    };

    return (
        <div>
            <button type="button" onClick={handleClick}>
                Cliquez ici
            </button>
            <p>{msg}</p> {/* Affiche le message lorsqu'on clique */}
        </div>
    );
}
