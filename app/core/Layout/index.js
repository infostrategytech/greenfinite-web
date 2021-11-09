import React from 'react'
import Header from '../Header'

function AppLayout({ children }) {
    return (
        <>
            {/* header */}
            <Header />
            {children}
            {/* footer */}
            <h2>Footer</h2>
        </>
    )
}

export default AppLayout
