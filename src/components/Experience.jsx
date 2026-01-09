import { experience, education } from '../data/content';

export default function Experience() {
  return (
    <section id="experience" className="bg-gray-50 dark:bg-gray-800/50">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experience.map((job, index) => (
              <div
                key={job.id}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-600 rounded-full transform -translate-x-1/2 border-4 border-white dark:border-gray-900 z-10" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="card">
                    <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                      {job.period}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1">
                      {job.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      {job.company}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mt-3">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
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
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Education</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {education.map((edu) => (
              <div key={edu.school} className="card">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {edu.school}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {edu.degree}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
