import React from 'react';

function Header(
        { title, subtitle }: {title?: string; subtitle?: string}
    ) {
    return (
        <header>
            {title && <h1>{title}</h1>}
            {subtitle && <h2>{subtitle}</h2>}
        </header>
    )
}

export default Header;