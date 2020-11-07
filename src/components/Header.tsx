import React from 'react';

type HeaderProps = {
    title?: string;
    subtitle?: string;
}

function Header(
        { title, subtitle }: HeaderProps
    ) {
    return (
        <header>
            {title && <h1>{title}</h1>}
            {subtitle && <h2>{subtitle}</h2>}
        </header>
    )
}

export default Header;