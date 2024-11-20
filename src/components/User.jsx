import { useState } from "react";

const User = () => {
  const [count0] = useState(0);
  const [count1] = useState(1);

  return (
    <div className="user">
      <p>count0 - {count0}</p>
      <p>count1 - {count1}</p>
      <h2>AKhilesh</h2>
      <p>Location - Kanpur</p>
      <p>Contact Number - 7522089744</p>
    </div>
  );
};

export default User;
