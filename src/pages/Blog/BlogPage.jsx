import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './BlogPage.css';

const posts = [
  {
    id: 1,
    title: "DELIVERING A GOOD PRESENTATION: TIPS FOR A GOOD PROJECT DEFENCE",
    date: "2025-08-20",
    excerpt:
      "In the academic world, it is a routine convention that having studied for a period, students are required to do researches, make findings, choose a topic and develop good and quality content for such topic...",
    fullContent: `In the academic world, it is a routine convention that having studied for a period, students are required to do researches, make findings, choose a topic and develop good and quality content for such topic. In most cases, final year project topics are selected from a pool of available ones by students and approved by their tutors before they commence work on it.`,
    readCount: 4608,
    link: "#",
    topic: "Project Presentations",
  },
  {
    id: 2,
    title: "HOW TO CHOOSE A GOOD PROJECT TOPIC",
    date: "2025-08-20",
    excerpt:
      "The educational curriculum states that in order to be awarded a degree after graduating, there is a need to carry out research in a field of study. Consequently, this is done at the final year level in all university institutions...",
    fullContent: `The educational curriculum states that in order to be awarded a degree after the graduating, there is need to carry out a research in a field of study. Consequently, this is done at the final year level in all university institutions. A lot of students have challenge when it comes to choosing a research topic. This is as a result of the fact that they lack knowledge on the process.`,
    readCount: 4120,
    link: "#",
    topic: "Research Tips",
  },
  // Add more posts...
];

const topics = [
  "Project Presentations",
  "Research Tips",
  "Academic Writing",
  "Digital Transformation",
  "Education Policy",
  "Student Life",
];

const BlogPage = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [expandedPostId, setExpandedPostId] = useState(null);

  const filteredPosts = selectedTopic
    ? posts.filter(post => post.topic === selectedTopic)
    : posts;

  const toggleExpand = (id) => {
    setExpandedPostId(prev => (prev === id ? null : id));
  };

  return (
    <div className="blog-page-container">
      <div className="blog-sidebar">
        <h3>Topics</h3>
        <ul>
          {topics.map((topic, idx) => (
            <li
              key={idx}
              className={selectedTopic === topic ? "active" : ""}
              onClick={() => setSelectedTopic(topic)}
              role="button"
              tabIndex={0}
              onKeyPress={() => setSelectedTopic(topic)}
            >
              {topic}
            </li>
          ))}
          <li
            className={!selectedTopic ? "active" : ""}
            onClick={() => setSelectedTopic(null)}
            role="button"
            tabIndex={0}
            onKeyPress={() => setSelectedTopic(null)}
          >
            All topics
          </li>
        </ul>
      </div>

      <div className="blog-posts">
        <h2 className="page-title">RECENT BLOG POSTS</h2>

        {filteredPosts.length > 0 ? (
          filteredPosts.map(({ id, title, date, excerpt, fullContent, readCount, link }) => (
            <div
              key={id}
              className="post-card"
              data-aos="fade-up"
              data-aos-delay={id * 100}
            >
              <h3 className="post-title">{title}</h3>
              <p className="post-date">Posted on {date}</p>
              <p className="post-excerpt">{excerpt}</p>

              <AnimatePresence initial={false}>
                {expandedPostId === id && (
                  <motion.div
                    key="expand"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ overflow: "hidden" }}
                    className="post-full-content"
                  >
                    <p>{fullContent}</p>
                    <a href={link} target="_blank" rel="noopener noreferrer" className="read-original">
                      Read Original Post
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="post-footer">
                <button
                  className="read-more"
                  onClick={() => toggleExpand(id)}
                >
                  {expandedPostId === id ? "Read Less" : "Read More"}
                </button>
                <span className="read-count" title={`${readCount} reads`}>
                  <i className="fas fa-eye"></i> {readCount}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p>No posts found for this topic.</p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
