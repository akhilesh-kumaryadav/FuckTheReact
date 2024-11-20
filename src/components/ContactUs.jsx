import React from "react";
import UserClass from "./UserClass";

class ContactUs extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent mounted");
  }

  render() {
    console.log("Parent renders");
    return (
      <div>
        <h1>Contact Us</h1>
        <p>Mobile Number - 7522089744</p>

        <UserClass name="Abinaya" address="Madurai" phone="9999600564" />
      </div>
    );
  }
}

// const ContactUs = () => {
//   console.log("Parent renders");
//   return (
//     <div>
//       <h1>Contact Us</h1>
//       <p>Mobile Number - 7522089744</p>

//       <UserClass name="Abinaya" address="Madurai" phone="9999600564" />
//     </div>
//   );
// };

export default ContactUs;
