'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ModalCards.css';

export default function ModalCards({ items }: { items: any[] }) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedItem = items.find(item => item.id === selectedId);

  return (
    <div className="mc-container">
      <div className="mc-grid">
        {items.map(item => (
          <motion.div 
            key={item.id}
            layoutId={`card-${item.id}`} 
            onClick={() => setSelectedId(item.id)} 
            className="mc-card"
          >
            <div className="mc-image-container">
              <motion.img 
                src={item.image} 
                alt={item.title} 
                layoutId={`image-${item.id}`} 
                className="mc-image"
              />
            </div>
            <div className="mc-card-content">
              <motion.h3 layoutId={`title-${item.id}`} className="mc-title">
                {item.title}
              </motion.h3>
              <motion.p layoutId={`subtitle-${item.id}`} className="mc-subtitle">
                {item.subtitle}
              </motion.p>
              
              <div style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={(e) => e.stopPropagation()} 
                  className="mc-card-link"
                >
                  Read Article
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}>
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && selectedItem && (
          <>
            <motion.div 
              className="mc-overlay" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setSelectedId(null)} 
            />
            <div className="mc-modal-wrapper" onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedId(null);
            }}>
              <motion.div layoutId={`card-${selectedItem.id}`} className="mc-modal">
                <button className="mc-close-btn" onClick={() => setSelectedId(null)}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                
                <div className="mc-modal-image-container">
                  <img 
                    src={selectedItem.image} 
                    alt={selectedItem.title} 
                    className="mc-modal-image"
                  />
                </div>
                
                <div className="mc-modal-content">
                  <motion.h3 layoutId={`title-${selectedItem.id}`} className="mc-modal-title">
                    {selectedItem.title}
                  </motion.h3>
                  <motion.p layoutId={`subtitle-${selectedItem.id}`} className="mc-modal-subtitle">
                    {selectedItem.subtitle}
                  </motion.p>
                  
                  <div className="mc-modal-details">
                    <p style={{ marginBottom: "1.5rem" }}>{selectedItem.description}</p>
                    <a href={selectedItem.link} target="_blank" rel="noopener noreferrer" className="mc-btn">
                      Read Full Article ↗
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
