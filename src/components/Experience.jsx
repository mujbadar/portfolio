import { experience, education, accomplishments } from '../data/content';

export default function Experience() {
  return (
    <section id="experience" className="relative isolate bg-gray-100/50 dark:bg-gray-900/50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-primary-500/10 to-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="section-container">
        <h2 className="section-title">Experience</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-purple-500 to-primary-500 transform md:-translate-x-1/2 pointer-events-none" />

          <div className="space-y-12">
            {experience.map((job, index) => (
              <div
                key={job.id}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 transform -translate-x-1/2 z-10">
                  <div className="w-4 h-4 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full animate-ping opacity-20" />
                </div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="card">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 text-sm font-medium bg-gradient-to-r from-primary-500/10 to-purple-500/10 text-primary-600 dark:text-primary-400 rounded-full">
                        {job.period}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {job.title}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                      {job.company}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {job.tech.map((tech) => (
                        <span key={tech} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <svg className="w-6 h-6 mr-3 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
            Education
          </h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {education.map((edu) => (
              <div key={edu.school} className="card">
                <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                  {edu.school}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  {edu.degree}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Accomplishments */}
        {accomplishments && accomplishments.length > 0 && (
          <div className="mt-16 relative z-10 pointer-events-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <svg className="w-6 h-6 mr-3 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-6-6h12" />
              </svg>
              Accomplishments
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {accomplishments.map((item) => (
                <div key={item.url} className="card flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    {item.year && <span className="font-semibold text-gray-700 dark:text-gray-200">{item.year}</span>}
                    {item.source && (
                      <>
                        <span>•</span>
                        <span>{item.source}</span>
                      </>
                    )}
                  </div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 font-semibold hover:underline flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12l-7.5 7.5m-9-15L12 12l-7.5 7.5" />
                    </svg>
                    {item.title}
                  </a>
                  {item.note && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
