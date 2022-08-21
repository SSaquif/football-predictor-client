import React from "react";

const Dashboard: React.FC<React.PropsWithChildren> = () => {
  return (
    <ul>
      <li>
        <button>Create a League</button>
      </li>
      <li>
        <button>Leagues</button>
      </li>
      <li>
        <button>Rules</button>
      </li>
    </ul>
  );
};

export default Dashboard;