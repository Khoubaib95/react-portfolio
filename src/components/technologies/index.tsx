export type techPropType = {
  name: string;
  color: string;
};
export const Tech = (props: techPropType) => (
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

export const ES6 = () => (
  <div
    className="skills"
    style={{
      color: "#f5c434",
      backgroundColor: "#f5c4342e",
      borderColor: "#f5c434",
    }}
  >
    JavaScript ES6
  </div>
);

export const TypeScript = () => (
  <div
    className="skills"
    style={{
      color: "#2f74c0",
      backgroundColor: "#2f74c02e",
      borderColor: "#2f74c0",
    }}
  >
    TypeScript
  </div>
);

export const Html5 = () => (
  <div
    className="skills"
    style={{
      color: "#dd4b25",
      backgroundColor: "#dd4b252e",
      borderColor: "#dd4b25",
    }}
  >
    HTML 5
  </div>
);

export const Css3 = () => (
  <div
    className="skills"
    style={{
      color: "#2962e9",
      backgroundColor: "#2962e92e",
      borderColor: "#2962e9",
    }}
  >
    CSS 3
  </div>
);
export const MongoDB = () => (
  <div
    className="skills"
    style={{
      color: "#93dd53",
      backgroundColor: "#91dc5029",
      borderColor: "#96df56",
    }}
  >
    MongoDB
  </div>
);
export const Expressjs = () => (
  <div
    className="skills"
    style={{
      color: "#7e7e7e",
      backgroundColor: "#7e7e7e2e",
      borderColor: "#7e7e7e",
    }}
  >
    Express js
  </div>
);

export const Reactjs = () => (
  <div
    className="skills"
    style={{
      backgroundColor: "#5ed3f32e",
      color: "#5ed3f3",
      borderColor: "#5ed3f3",
    }}
  >
    React js
  </div>
);
export const Nodejs = () => (
  <div
    className="skills"
    style={{
      backgroundColor: "#8ac52a2e",
      color: "#8ac52e",
      borderColor: "#8ac52a",
    }}
  >
    Node js
  </div>
);

export const Redux = () => (
  <div
    className="skills"
    style={{
      color: " #7752bd",
      borderColor: "#7752bd",
      backgroundColor: "#7752bd2e",
    }}
  >
    Redux
  </div>
);

export const Nestjs = () => (
  <div
    className="skills"
    style={{
      color: "#e44344",
      backgroundColor: "#e443442e",
      borderColor: "#e44344",
    }}
  >
    Nest js
  </div>
);
export const Nextjs = () => (
  <div
    className="skills"
    style={{
      color: "#000000",
      backgroundColor: "#0000002e",
      borderColor: "#000000",
    }}
  >
    Next js
  </div>
);
