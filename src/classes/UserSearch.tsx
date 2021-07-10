import { Component } from "react";

interface User {
    name: string;
    age: number;
}

interface UserSearchProps {
    users: User[]
}

interface UserSearchState {
    name: string;
    user: { name: string; age: number } | undefined;
}

class UserSearch extends Component<UserSearchProps> {

    state: UserSearchState = {
        name: '',
        user: undefined
    };

    onClick = () => {
        const foundUser = this.props.users.find((user) => {
            return user.name === this.state.name;
        });

        this.setState({ user: foundUser });
    }

    render() {
        const {user, name } = this.state;
        return <div>
            UserSearch
            <input value={name} onChange={e => this.setState({ name: e.target.value})} />
            <button onClick={this.onClick}>Find User</button>
            <div>
                {user && user.name}
                {user && user.age}
            </div>
    </div>
    }
};

export default UserSearch;