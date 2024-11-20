import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, address, phone } = this.props;
    console.log(this.props);
    return (
      <div className="user">
        <h2>Name - {name}</h2>
        <p>Address - {address}</p>
        <p>Contact - {phone}</p>
      </div>
    );
  }
}

export default UserClass;
