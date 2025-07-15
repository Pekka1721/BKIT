export default function Services() {
  const servicesData = [
    {
      title: "Trainings",
      description: "Unlock your potential with our industry-aligned training programs tailored for students and professionals. Whether you're diving into Java, Python, .NET, or AI, our hands-on approach ensures you build real-world skills that matter.",
      points: [
        "College / Corportate Trainings",
        "Java/Python/.Net/AI",
        "Less Fee than all over India",
        "Placement Support",
      ],
    },
    {
      title: "Mocks App",
      description: "Prepare with confidence using My Mocks App — your ultimate platform for in-person and AI-powered mock interviews designed to simulate real hiring experiences.",
      points: [
        "All-inclusive technical mock interviews",
        "AI-driven or real-time expert-led mocks",
        "Instantly generated performance reports",
        "Experience real-world interviews",
      ],
    },
    {
      title: "Job Portal",
      description: "Discover a smarter way to land your dream job. Our AI-powered Job Portal connects you with real-time job opportunities, exclusive internships, and a strong HR recruiter network across industries",
      points: [
"Fresh job openings updated in real-time",
"Internship programs for students and freshers",
"Connect directly with verified HR professionals",
"AI Resume Builder to craft winning resumes",
      ],
    },
  ];
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 text-center lg:text-left">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600">
            Accelerate your career with industry-aligned tech programs.
            Master in-demand skills through expert-led training.
            Build real-world projects and become job-ready.
            Learn, code, and grow with our AI-powered learning platform.
          </p>
        </div>

        {/* Card Grid Section */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:mt-16">
          {servicesData.map((service, index) => (
            <div key={index} className="relative">
              <div className="absolute inset-px rounded-lg bg-white" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] p-8 sm:p-10 hover:bg-indigo-50">
                <h3 className="text-lg font-medium tracking-tight text-gray-950 text-center">{service.title}</h3>
                <p className="mt-2 text-sm text-gray-600 text-center">{service.description}</p>
                <ul className="mt-4 list-disc list-inside text-sm text-gray-700">
                  {service.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5" />
            </div>
          ))}
          <div className="mt-10 flex flex-wrap flex-row items-center justify-space-between gap-x-6 lg:justify-start">
            <div className="flex flex-wrap">
                <p className="text-xl font-bold  text-gray-900 mb-2 hover:text-indgo-600">
              Be ready to <span className="text-indigo-600">K</span>ick start your careers with our IT Solutions.
              
              </p>
            </div>
             <a
                href="https://api.whatsapp.com/send/?phone=%2B919951677333&text&type=phone_number&app_absent=0" target="_blank"
                className="rounded-md bg-indigo-100 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {' '}
                Get started{' '}
              </a>
            </div>
              
             
              
            </div>
        </div>
      </div>
    
  );
}
