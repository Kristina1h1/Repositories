import React from "react";

class User extends React.Component{

    componentWillUnmount(){
        alert("Пользователь удален");
    }

    render(){
        return(
            <div>
                <ul>
                    <li>Name: Petr</li>
                    <li>Email: petr@mail.ru</li>
                    <li>Contact: +3 999 123-45-67</li>
                </ul>
            </div>
        )
    }
}

export default User;