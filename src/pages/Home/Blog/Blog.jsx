// src/pages/Home/Blog/Blog.jsx

import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-area grid-style default-padding bottom-less bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="site-heading text-center">
              <h4>From the blog</h4>
              <div className="devider"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="blog-items">
          <div className="row">
            <div className="single-item col-lg-4 col-md-6">
              <div className="item blog">
                <div className="thumb">
                  <img src="/img/blogs/financing.jpeg" alt="Thumb" />
                </div>
              </div>
            </div>

            <div className="single-item col-lg-4 col-md-6">
              <div className="item blog">
                <div className="thumb">
                  <img src="/img/blogs/good_governance.jpeg" alt="Thumb" />
                </div>
              </div>
            </div>

            <div className="single-item col-lg-4 col-md-6">
              <div className="item">
                <div className="thumb blog">
                  <img src="/img/blogs/hsitory.jpeg" alt="Thumb" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
