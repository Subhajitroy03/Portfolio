'use client';

import { motion } from 'framer-motion';
import './EditorialJournal.css';

export default function EditorialJournal({ articles }: { articles: any[] }) {

  return (
    <div className="ej-container">
      {/* Hero Section */}
      <div className="ej-hero">
        <div>
          <div className="ej-hero-title-wrap">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="ej-hero-title"
            >
              THE BLOG
            </motion.h1>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="ej-hero-subtitle"
          >
            Engineering notes, experiments, <br/>
            and things I learned while building software.
          </motion.p>
        </div>
      </div>

      {/* Articles List */}
      <div className="ej-articles-list" style={{ display: "flex", flexDirection: "column", gap: "2rem", paddingBottom: "4rem" }}>
        {articles.map((article, index) => {
          const num = (index + 1).toString().padStart(2, '0');
          return (
            <motion.a 
              key={article.id}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="ej-featured"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="ej-feat-image-wrap">
                <motion.img layoutId={`img-${article.id}`} src={article.image} alt={article.title} className="ej-feat-image" />
              </div>
              <div className="ej-feat-content">
                <div className="ej-feat-meta">
                  <span>{article.category}</span>
                  <span>·</span>
                  <span>{num}</span>
                </div>
                <motion.h2 layoutId={`title-${article.id}`} className="ej-feat-title">{article.title}</motion.h2>
                <motion.p layoutId={`subtitle-${article.id}`} className="ej-feat-subtitle">{article.subtitle}</motion.p>
                <motion.p layoutId={`desc-${article.id}`} className="ej-feat-desc" style={{ marginTop: '1rem', fontSize: '1.1rem', lineHeight: '1.6', opacity: 0.8 }}>
                  {article.description}
                </motion.p>
                <div className="ej-feat-footer">
                  <span>{article.readTime}</span>
                  <span>{article.date}</span>
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>


    </div>
  );
}
