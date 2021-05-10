import React from 'react'

export default function Footer() {
    var footerStyle={
        position: "relative",
        top: "100vh",
        width: "100%"
    }
    return (
        <div className="bg-dark text-light text-center py-3" style={footerStyle}>
            Copyright &copy; MyTodosList.com @2021
        </div>
    )
}
