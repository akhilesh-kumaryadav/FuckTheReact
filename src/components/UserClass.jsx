import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count0: 0,
      count1: 1,
    };
  }

  render() {
    const { name, address, phone } = this.props;
    const { count0, count1 } = this.state;
    console.log(this.props);
    return (
      <div className="user">
        <p>Count0 - {count0}</p>
        <p>Count1 - {count1}</p>
        <h2>Name - {name}</h2>
        <p>Address - {address}</p>
        <p>Contact - {phone}</p>
      </div>
    );
  }
}

export default UserClass;
