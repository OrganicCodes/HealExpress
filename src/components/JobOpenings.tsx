import { MapPin, Clock, Users, Briefcase } from 'lucide-react'

export default function JobOpenings() {
  const jobOpenings = [
    {
      title: 'Emergency Medicine Doctor',
      department: 'Medical',
      location: 'Delhi, Mumbai, Bangalore',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Join our medical team to provide emergency care and supervise ambulance operations.',
      requirements: [
        'MBBS with MD in Emergency Medicine',
        'Valid medical license',
        'Experience in emergency medicine',
        'Leadership skills'
      ],
      posted: '2 days ago'
    },
    {
      title: 'Paramedic',
      department: 'Medical',
      location: 'Multiple Cities',
      type: 'Full-time',
      experience: '1-3 years',
      description: 'Provide emergency medical care and support during patient transport.',
      requirements: [
        'Diploma in Paramedical Sciences',
        'BLS/ACLS certification',
        'Valid driving license',
        'Good communication skills'
      ],
      posted: '1 week ago'
    },
    {
      title: 'Software Engineer',
      department: 'Technology',
      location: 'Remote/Hybrid',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Develop and maintain our healthcare technology platform and mobile applications.',
      requirements: [
        'B.Tech in Computer Science',
        'Experience with React/Node.js',
        'Healthcare domain knowledge',
        'Problem-solving skills'
      ],
      posted: '3 days ago'
    },
    {
      title: 'Customer Support Executive',
      department: 'Operations',
      location: 'Patna, Delhi',
      type: 'Full-time',
      experience: '1-2 years',
      description: 'Handle customer inquiries and provide support for emergency services.',
      requirements: [
        'Graduate in any discipline',
        'Excellent communication skills',
        'Multilingual preferred',
        'Customer service experience'
      ],
      posted: '5 days ago'
    },
    {
      title: 'Fleet Manager',
      department: 'Operations',
      location: 'Mumbai, Chennai',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Manage ambulance fleet operations and ensure optimal service delivery.',
      requirements: [
        'MBA in Operations/Logistics',
        'Fleet management experience',
        'Analytical skills',
        'Team management skills'
      ],
      posted: '1 week ago'
    },
    {
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'Delhi',
      type: 'Full-time',
      experience: '4-6 years',
      description: 'Develop and execute marketing strategies to promote our services.',
      requirements: [
        'MBA in Marketing',
        'Digital marketing experience',
        'Healthcare industry knowledge',
        'Creative thinking'
      ],
      posted: '4 days ago'
    }
  ]

  const departments = ['All', 'Medical', 'Technology', 'Operations', 'Marketing', 'HR']

  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Current Job Openings
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore exciting career opportunities and find your perfect role at HealExpress
          </p>
        </div>

        {/* Department Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {departments.map((dept, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                dept === 'All' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {jobOpenings.map((job, index) => (
            <div key={index} className="medical-card group hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    {job.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <span className="flex items-center space-x-1">
                      <Briefcase className="h-4 w-4" />
                      <span>{job.department}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{job.type}</span>
                    </span>
                  </div>
                </div>
                <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full">
                  {job.experience}
                </span>
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {job.description}
              </p>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                <ul className="space-y-1">
                  {job.requirements.slice(0, 3).map((req, reqIndex) => (
                    <li key={reqIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>{req}</span>
                    </li>
                  ))}
                  {job.requirements.length > 3 && (
                    <li className="text-sm text-blue-600 font-medium">
                      +{job.requirements.length - 3} more requirements
                    </li>
                  )}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-sm text-gray-500">Posted {job.posted}</span>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Jobs Found */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Don't see a position that matches your skills?
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
            Submit Your Resume
          </button>
        </div>
      </div>
    </section>
  )
}
