import React, { useState } from "react";
import "pretty-checkbox/dist/pretty-checkbox.min.css";
import Checkbox from "./common/Checkbox";

type PredictionTableProps = {
  teams: string[];
  isEditing?: boolean;
};

const PredictionTable: React.FC<PredictionTableProps> = ({
  teams,
  isEditing = false,
}) => {
  const [checked, setChecked] = useState(false);

  return (
    <table>
      <tr>
        {isEditing && <th>🔒</th>}
        <th>Position</th>
        <th>Team</th>
      </tr>
      {teams.map((team, index) => {
        return (
          <tr key={team}>
            {isEditing && (
              <td>
                {/* TODO: Make its own component */}
                <Checkbox
                  checked={checked}
                  handleChange={(ev) => {
                    setChecked(ev.target.checked);
                  }}
                />
              </td>
            )}
            <td>{index + 1}</td>
            <td>{team}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default PredictionTable;
