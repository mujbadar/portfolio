import { useEffect, useState } from 'react';

const typeColors = {
  Professional: 'from-blue-500 to-cyan-500',
  Consulting: 'from-purple-500 to-pink-500',
  Independent: 'from-amber-500 to-orange-500',
};

function ScreenshotGallery({ screenshots, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!screenshots || screenshots.length === 0) {
    return (
      <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center">
        <div className="text-center p-4">
          <svg className="w-10 h-10 mx-auto text-gray-400 dark:text-gray-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-sm text-gray-400 dark:text-gray-500">Screenshot coming soon</span>
        </div>
      </div>
    );
  }

  const goToPrevious = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative group">
      <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
        <img
          src={screenshots[currentIndex]}
          alt={`${title} screenshot ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {screenshots.length > 1 && (
        <>
          {/* Navigation arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-white w-4'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-black/50 text-white text-xs">
            {currentIndex + 1} / {screenshots.length}
          </div>
        </>
      )}
    </div>
  );
}

export default function ProjectModal({ project, isOpen, onClose }) {
  const [expandedSubProject, setExpandedSubProject] = useState(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setExpandedSubProject(null);
    }
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden bg-white dark:bg-gray-900 rounded-2xl shadow-2xl animate-slideUp">
        {/* Gradient header accent */}
        <div className={`h-1.5 bg-gradient-to-r ${typeColors[project.type] || 'from-primary-500 to-purple-500'}`} />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-6px)] p-6 md:p-8">
          {/* Header */}
          <div className="mb-6">
            <span className={`inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-md bg-gradient-to-r ${typeColors[project.type] || 'from-primary-500 to-purple-500'} text-white mb-3`}>
              {project.type}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              {project.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Main project screenshots */}
          {!project.hasSubProjects && project.screenshots && project.screenshots.length > 0 && (
            <div className="mb-6">
              <ScreenshotGallery screenshots={project.screenshots} title={project.title} />
            </div>
          )}

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Contributions</h3>
              <ul className="space-y-3">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start text-gray-600 dark:text-gray-400">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Sub-projects (for DMN) */}
          {project.hasSubProjects && project.subProjects && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Hightlights Within This Role</h3>
              <div className="space-y-4">
                {project.subProjects.map((subProject) => (
                  <div
                    key={subProject.id}
                    className="bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                  >
                    {/* Sub-project header - always visible */}
                    <button
                      onClick={() => setExpandedSubProject(
                        expandedSubProject === subProject.id ? null : subProject.id
                      )}
                      className="w-full p-5 flex items-center justify-between text-left hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
                    >
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                          {subProject.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-1">
                          {subProject.description}
                        </p>
                      </div>
                      <div className="ml-4 flex items-center gap-3">
                        {subProject.liveUrl && (
                          <a
                            href={subProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        )}
                        <svg
                          className={`w-5 h-5 text-gray-400 transition-transform ${
                            expandedSubProject === subProject.id ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>

                    {/* Expanded content */}
                    {expandedSubProject === subProject.id && (
                      <div className="px-5 pb-5 border-t border-gray-200 dark:border-gray-700">
                        <div className="pt-5">
                          {/* Screenshots gallery */}
                          <div className="mb-4">
                            <ScreenshotGallery
                              screenshots={subProject.screenshots}
                              title={subProject.title}
                            />
                          </div>

                          <p className="text-gray-600 dark:text-gray-400 mb-4">
                            {subProject.description}
                          </p>

                          {/* Tech tags */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {subProject.tech.map((tech) => (
                              <span key={tech} className="text-xs px-2.5 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-md">
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Sub-project links */}
                          {subProject.liveUrl && (
                            <div className="flex items-center gap-3">
                              <a
                                href={subProject.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                              >
                                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                View Live
                              </a>
                              {subProject.liveUrlNote && (
                                <span className="text-xs text-gray-500 dark:text-gray-500 flex items-center">
                                  <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  {subProject.liveUrlNote}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Single project links */}
          {!project.hasSubProjects && (project.liveUrl || project.github) && (
            <div className="space-y-3">
              <div className="flex flex-wrap gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    {project.liveUrlLabel || 'View Live'}
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    View Code
                  </a>
                )}
              </div>
              {project.liveUrlNote && (
                <p className="text-sm text-gray-500 dark:text-gray-500 flex items-center">
                  <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {project.liveUrlNote}
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
