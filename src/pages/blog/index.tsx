import SEO from "../../components/seo";

const Blog = () => (
  <>
    <SEO title="Blog" />
    <div style={{ height: "calc(100vh - 93px)" }}>
      <div
        style={{
          width: "45%",
          maxWidth: "550px",
          borderLeft: "6px solid blueviolet",
          margin: "30px auto",
          textAlign: "center",
          backgroundColor: "white",
          padding: "15px",
          boxShadow: "0px 0px 5px 0px #cccccca6",
          minWidth: "225px",
          //-webkit-box-shadow: 0px 0px 5px 0px #cccccca6;
          //-moz-box-shadow: 0px 0px 5px 0px #cccccca6;
          //borderTopColor: "red",
        }}
      >
        <h2>This content is going to be available soon</h2>
        <span style={{ fontSize: 25 }}>Thank you !</span>
      </div>
    </div>
  </>
);
export default Blog;
