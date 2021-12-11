import { techType } from "../../@types/types";
import { FormattedMessage } from "react-intl";
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

export const Participation = ({ percent }: any) => (
  <span style={{ whiteSpace: "nowrap", backgroundColor: "#cccccc" }}>
    <span>
      <code className="code"> &lt; </code>
    </span>
    <FormattedMessage id="myparticipation" /> {`${percent}%`}{" "}
    <code className="code">&#47;&gt;</code>
  </span>
);
