import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, getOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      getOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      getOnlineStatus(true);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
