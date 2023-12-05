"use client";

const Message = ( { msg, bgColor } ) => {
    let styles = {
        padding: "1rem",
        textAlign: "center",
        width: "40%", // Establecer el ancho a "auto"
        color: "#fff",
        fontWeight: "bold",
        backgroundColor: bgColor,
        margin: "15px auto 15px auto",
      };
    return (
        <div style={styles}>
        <p>{msg}</p>
        {/* <p dangerouslySetInnerHTML={{ __html: msg }} /> */}
        </div>
    )
}

export default Message;