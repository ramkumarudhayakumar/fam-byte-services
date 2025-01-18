"use client";
import React, { useEffect, useRef, useState } from "react";
import "../styles/blogs/OurBlog.css";

export default function OurBlog() {
  const cardRef = useRef(null);
  const h1Ref = useRef(null);
  const [cardVisible, setCardVisible] = useState(false);
  const [h1Visible, setH1Visible] = useState(false);

  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === cardRef.current) {
            setCardVisible(true);
          }
          if (entry.target === h1Ref.current) {
            setH1Visible(true);
          }
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5,
    });

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    if (h1Ref.current) {
      observer.observe(h1Ref.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
      if (h1Ref.current) {
        observer.unobserve(h1Ref.current);
      }
    };
  }, []);

  const headingRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const heading = headingRef.current;
      if (!heading) return;

      const rect = heading.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = (e.clientX - centerX) * 0.02;
      const distanceY = (e.clientY - centerY) * 0.02;

      heading.style.transform = `translate(${distanceX}px, ${distanceY}px)`;
    };

    const handleMouseLeave = () => {
      if (headingRef.current) {
        headingRef.current.style.transform = "translate(0, 0)";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const blogs = [
    {
      title: "The Future of AI in Business",
      excerpt: "Exploring how AI is transforming modern businesses...",
      date: "2024-01-07",
      category: "Technology",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Digital Transformation Trends",
      excerpt: "Key trends shaping digital transformation in 2024...",
      date: "2024-01-06",
      category: "Digital",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "UX Design Best Practices",
      excerpt: "Essential UX design principles for modern applications...",
      date: "2024-01-05",
      category: "Design",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "The Rise of Edge Computing",
      excerpt: "How edge computing is revolutionizing data processing...",
      date: "2024-01-04",
      category: "Technology",
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  return (
    <section className="OurBlog">
      <div className="container py-5">
        <h1
          ref={h1Ref}
          className={`text-center OurBlog-heading mb-2 ${
            h1Visible ? "is-visible" : ""
          }`}
        >
          Our Blog
        </h1>
        <h1
          ref={headingRef}
          className="text-center OurBlog-mousemovingH1 mb-4"
          style={{ transition: "transform 0.2s ease-out" }}
        >
          OUR BLOG
        </h1>
        <div className="row g-4">
          {blogs.map((blog, ind) => (
            <BlogCard
              key={ind}
              blog={blog}
              index={ind}
              cardRef={cardRef}
              cardVisible={cardVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogCard({ blog, index, cardRef, cardVisible }) {
  return (
    <div className="col-md-6 col-lg-3">
      <div
        ref={cardRef}
        className={`card h-100 blog-card ${cardVisible ? "animate" : ""}`}
        style={{
          transitionDelay: cardVisible ? `${index * 0.1}s` : "0s", // Delay only if visible
        }}
      >
        <img
          src={blog.image || "/placeholder.svg"}
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
  );
}
