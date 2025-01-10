import React from "react";
import Layout from "../components/Layout";

function Blogs() {
  const blogs = [
    {
      title: "The Future of AI in Business",
      excerpt: "Exploring how AI is transforming modern businesses...",
      date: "2024-01-07",
      category: "Technology",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "Digital Transformation Trends",
      excerpt: "Key trends shaping digital transformation in 2024...",
      date: "2024-01-06",
      category: "Digital",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "UX Design Best Practices",
      excerpt: "Essential UX design principles for modern applications...",
      date: "2024-01-05",
      category: "Design",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "The Rise of Edge Computing",
      excerpt: "How edge computing is revolutionizing data processing...",
      date: "2024-01-04",
      category: "Technology",
      image: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <Layout>
      <div className="container py-5">
        <h1 className="text-center mb-5">Our Blog</h1>
        <div className="row g-4">
          {blogs.map((blog, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src={blog.image}
                  className="card-img-top"
                  alt={blog.title}
                />
                <div className="card-body">
                  <div className="mb-2">
                    <span className="badge bg-primary">{blog.category}</span>
                  </div>
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text">{blog.excerpt}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      {new Date(blog.date).toLocaleDateString()}
                    </small>
                  </p>
                  <button className="btn btn-outline-primary">Read More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Blogs;
