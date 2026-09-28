import React from "react";

class Footer extends React.Component {

    render() {
        let { copyright } = this.props;
        return (
            <footer style={{
                background: "#14161f",
                color: "#e4e6eb",
                padding: "14px",
                fontWeight: "bold",
                textAlign: "center",
                marginTop: "auto",
                borderTop: "1px solid #353a4d"
            }}>
                <p>{copyright}</p>
            </footer>
        )
    }
}

export default Footer;