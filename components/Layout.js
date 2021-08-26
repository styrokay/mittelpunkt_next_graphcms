import React from 'react'

const Layout = ({ children }) => {
    return (
        <>
            <h1>This is the header</h1>
            <div>
                {children}

            </div>
            <h1>This is the FOOTER</h1>
        </>
    )
}

export default Layout
