
import React, { useState } from 'react';
import { Check } from 'lucide-react';
import './PageSelector.css';

interface PageSelectorProps {
  pages: string[];
  onDone: (selectedPages: string[]) => void;
}

const PageSelector: React.FC<PageSelectorProps> = ({ pages, onDone }) => {
  const [selectedPages, setSelectedPages] = useState<string[]>(['All pages']);
  
  const isAllPagesSelected = selectedPages.includes('All pages');
  
  const handlePageSelect = (page: string) => {
    setSelectedPages((prev) => {
      // If "All pages" is clicked
      if (page === 'All pages') {
        if (isAllPagesSelected) {
          return [];
        } else {
          // Select all pages when "All pages" is clicked
          return ['All pages', ...pages.filter(p => p !== 'All pages')];
        }
      }
      
      // If any other page is clicked
      const isSelected = prev.includes(page);
      let newSelection: string[];
      
      if (isSelected) {
        // Remove page from selection
        newSelection = prev.filter(p => p !== page);
        // If "All pages" was selected, remove it too
        if (isAllPagesSelected) {
          newSelection = newSelection.filter(p => p !== 'All pages');
        }
      } else {
        // Add page to selection
        newSelection = [...prev, page];
        // If all individual pages are now selected, add "All pages" too
        if (newSelection.filter(p => p !== 'All pages').length === pages.length - 1) {
          newSelection.push('All pages');
        }
      }
      
      return newSelection;
    });
  };
  
  const handleDoneClick = () => {
    onDone(selectedPages);
  };
  
  return (
    <div className="page-selector">
      <div className="page-selector-container">
        <div className="page-list">
          {pages.map((page) => (
            <div 
              key={page}
              className="page-item"
              onClick={() => handlePageSelect(page)}
            >
              <div className={`checkbox ${selectedPages.includes(page) ? 'checked' : ''}`}>
                {selectedPages.includes(page) && (
                  <Check size={14} className="check-icon" />
                )}
              </div>
              <span className="page-name">{page}</span>
            </div>
          ))}
        </div>
        
        <button 
          className="done-button"
          onClick={handleDoneClick}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default PageSelector;
