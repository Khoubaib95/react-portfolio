import SEO from "../../components/seo";
import { FormattedMessage } from "react-intl";

const Blog = () => (
  <>
    <SEO title="Blog" />
    <div id="blog-container" style={{}}>
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
        }}
      >
        <h2>
          <FormattedMessage id="blog.content" />
        </h2>
        <span style={{ fontSize: 25 }}>
          <FormattedMessage id="blog.thankyou" /> !
        </span>
      </div>
    </div>
  </>
);
export default Blog;
