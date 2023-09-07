import React from 'react'

export default function Modal({ children }) {
    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            position: 'fixed',
            background: '#00000096',
            left: 0,
            top: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            {children}
        </div>
    )
}
