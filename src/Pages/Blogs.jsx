import { blogsData } from "../BlogsData.jsx";
export function Blogs() {
  return blogsData.map((ele) => (
    <Blog
      source={ele.image}
      blogName={ele.blogName}
      description={ele.description}
      time={ele.time}
      link={ele.link}
      key={ele.id}
    />
  ));
}
function Blog({ source, blogName, description, time, link }) {
  return (
    <div className="Blog-Container container">
      <div className="Blog container-fluid">
        <img src={source} alt="" className="Blog-Image"></img>
        <div className="Blog-Text">
          <a className="Blog-Name" href={link}>
            {blogName}
          </a>
          <p className="Blog-Description">{description}</p>
        </div>
        <span className="Blog-Time-To-Read">{time}</span>
      </div>
    </div>
  );
}
