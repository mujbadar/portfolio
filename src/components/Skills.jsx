import { skills } from '../data/content';

const skillCategories = [
  { key: 'frontend', label: 'Frontend', icon: '🎨' },
  { key: 'backend', label: 'Backend', icon: '⚙️' },
  { key: 'infrastructure', label: 'Infrastructure', icon: '☁️' },
  { key: 'concepts', label: 'Concepts', icon: '💡' },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <div key={category.key} className="card">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{category.icon}</span>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {category.label}
                </h3>
              </div>
              <ul className="space-y-2">
                {skills[category.key].map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center text-gray-600 dark:text-gray-400"
                  >
                    <svg className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
