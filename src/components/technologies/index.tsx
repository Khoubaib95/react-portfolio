import { techType } from "../../@types/types";

export const Bage = (props: techType) => (
  <div
    className="skills"
    style={{
      color: `#${props.color}`,
      backgroundColor: `#${props.color}2e`,
      borderColor: `#${props.color}`,
    }}
  >
    {props.name}
  </div>
);
