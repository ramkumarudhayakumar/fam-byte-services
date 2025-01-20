"use client";
import React, { useEffect, useRef, useState } from "react";
import "../styles/blogs/OurBlog.css";

export default function OurBlog() {
  const cardRefs = useRef([]);
  const h1Ref = useRef(null);
  const [cardVisible, setCardVisible] = useState({});
  const [h1Visible, setH1Visible] = useState(false);

  // IntersectionObserver for cards and heading
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.dataset.index) {
            const index = entry.target.dataset.index; // Get card index
            setCardVisible((prev) => ({ ...prev, [index]: true }));
          } else if (entry.target === h1Ref.current) {
            setH1Visible(true); // Set h1 visibility
          }
          observer.unobserve(entry.target); // Stop observing the target
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5, // Trigger when 50% of the element is visible
    });

    // Observe each card
    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Observe heading
    if (h1Ref.current) {
      observer.observe(h1Ref.current);
    }

    return () => {
      // Cleanup observers
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      if (h1Ref.current) {
        observer.unobserve(h1Ref.current);
      }
    };
  }, []);

  // Mouse movement effect for heading
  const headingRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const heading = document.querySelector(".OurBlog-mousemovingH1");
      if (heading) {
        const rect = heading.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Reduce the rotation sensitivity
        const rotateX = (e.clientY - centerY) * 0.02; // Subtle effect
        const rotateY = (centerX - e.clientX) * 0.02;

        // Apply a smaller scale for a minimal effect
        heading.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      }
    };

    const handleMouseLeave = () => {
      const heading = document.querySelector(".OurBlog-mousemovingH1");
      if (heading) {
        heading.style.transform =
          "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
        heading.style.transition = "transform 0.3s ease-out";
      }
    };

    const headingElement = document.querySelector(".OurBlog-mousemovingH1");
    if (headingElement) {
      headingElement.addEventListener("mousemove", handleMouseMove);
      headingElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (headingElement) {
        headingElement.removeEventListener("mousemove", handleMouseMove);
        headingElement.removeEventListener("mouseleave", handleMouseLeave);
      }
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
        {/* <h1
          ref={h1Ref}
          className={`text-center OurBlog-heading mb-2 ${
            h1Visible ? "is-visible" : ""
          }`}
        >
          Our Blog
        </h1> */}
        <h1
          ref={headingRef}
          className="text-center OurBlog-mousemovingH1 mb-4 pb-2"
          style={{ transition: "transform 0.2s ease-out" }}
        >
          Our Blog
        </h1>
        <div className="row g-4">
          {blogs.map((blog, index) => (
            <div
              className="col-md-6 col-lg-3"
              key={index}
              ref={(el) => (cardRefs.current[index] = el)} // Assign ref
              data-index={index} // Store index
            >
              <BlogCard
                blog={blog}
                index={index}
                cardVisible={!!cardVisible[index]} // Pass visibility
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogCard({ blog, index, cardVisible }) {
  return (
    <div
      className={`card h-100 blog-card ${cardVisible ? "animate" : ""}`}
      style={{
        transitionDelay: cardVisible ? `${index * 0.1}s` : "0s",
      }}
    >
      <img
        src={blog.image || "/placeholder.svg"}
        className="card-img-top"
        alt={blog.title}
      />
      <div className="card-body">
        <div className="mb-2">
          <span className="badge" style={{ background: `var(--bg-primary)` }}>
            {blog.category}
          </span>
        </div>
        <h5 className="card-title">{blog.title}</h5>
        <p className="card-text">{blog.excerpt}</p>
        <p className="card-text">
          <small className="text-muted">
            {new Date(blog.date).toLocaleDateString()}
          </small>
        </p>
        <button className="btn ourBlog-card-readmore-btn">Read More</button>
      </div>
    </div>
  );
}
