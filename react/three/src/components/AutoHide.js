import React from "react";

class AutoHide extends React.Component {

    state = { visible: true }

    componentDidMount() {
        this.timer = setTimeout(() => {
            this.setState({ visible: false });
        }, 2000);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {
        if (!this.state.visible) return null;

        return (
            <div
                style={{
                    display: "inline-block",
                    backgroundColor: "yellow",
                    padding: "10px 20px",
                    margin: "15px 0"
                }}
            >
                <h1 style={{ margin: 0 }}>Hello</h1>
            </div>
        );
    }
}

export default AutoHide;