import React from 'react';

const FolderCard = ({
  label = 'Folder',
  title = 'Untitled Project',
  subtitle = 'Design Exploration',
  image = '',
  color = 'var(--color-red)',
  tabText = 'WORK',
  tags = [],
  onClick
}) => {
  return (
    <div 
      className="stable-folder-card" 
      onClick={onClick}
      style={{ '--folder-tab-color': color }}
    >
      {/* Folder Tab sticking out at top */}
      <div className="stable-folder-tab">
        {tabText}
      </div>

      {/* Image Preview Box */}
      <div className="stable-folder-img-box">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'var(--bg-canvas)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '11px',
            color: 'var(--color-text-muted)',
            fontWeight: '700',
            textAlign: 'center',
            padding: '12px'
          }}>
            <span style={{ fontSize: '20px', marginBottom: '4px' }}>📁</span>
            {label} Dossier
          </div>
        )}
      </div>

      {/* Info Content Box */}
      <div className="stable-folder-content">
        <div className="stable-folder-info">
          <h4>{title}</h4>
          <p>{subtitle}</p>
        </div>

        {/* Tags badges */}
        {tags.length > 0 && (
          <div className="tech-badge-list">
            {tags.slice(0, 3).map((tag, idx) => (
              <span key={idx} className="tech-badge">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

export default FolderCard;
