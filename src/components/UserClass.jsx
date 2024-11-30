import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {
        name: "Dummy name",
        location: "Dummy Location",
      },
    };

    // console.log(this.props.name + "Child constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "Child mounted");
    const userData = await fetch(
      "https://api.github.com/users/akhilesh-kumaryadav",
    );

    const userDataJson = await userData.json();
    console.log(userDataJson);

    this.setState({
      userData: userDataJson,
    });
  }

  render() {
    // console.log(this.props.name + "Child renders");
    const { name, location } = this.state.userData;

    return (
      <div className="user">
        <h2>Name - {name}</h2>
        <p>Address - {location}</p>
      </div>
    );
  }
}

export default UserClass;
