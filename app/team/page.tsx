import type { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Team - Meet the Acme Corporation Team',
  description: 'Meet the talented team behind Acme Corporation. Learn about our leadership, engineering team, and customer success specialists who make it all possible.',
};

export default function TeamPage() {
  const lastUpdated = new Date().toISOString().split('T')[0];
  const teamVersion = '2.1.0';

  const leadership = [
    {
      name: 'Sarah Johnson',
      role: 'Chief Executive Officer',
      bio: 'Sarah brings over 15 years of experience in SaaS leadership. Previously served as VP of Product at TechCorp.',
      email: 'sarah.johnson@acme.com',
      linkedin: 'sarah-johnson-acme'
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      bio: 'Michael is a serial entrepreneur and full-stack engineer with expertise in cloud architecture and scalable systems.',
      email: 'michael.chen@acme.com',
      linkedin: 'michael-chen-cto'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Chief Operating Officer',
      bio: 'Emily specializes in operations and customer success, with a track record of scaling businesses from startup to enterprise.',
      email: 'emily.rodriguez@acme.com',
      linkedin: 'emily-rodriguez-coo'
    }
  ];

  const departments = [
    {
      name: 'Engineering',
      count: 85,
      description: 'Our engineering team builds and maintains our platform, ensuring reliability, security, and performance.'
    },
    {
      name: 'Product',
      count: 25,
      description: 'The product team designs user experiences and defines features that solve real business problems.'
    },
    {
      name: 'Sales & Marketing',
      count: 45,
      description: 'Our sales and marketing team helps businesses discover and adopt our solutions.'
    },
    {
      name: 'Customer Success',
      count: 60,
      description: 'Customer success specialists ensure our clients get maximum value from our platform.'
    },
    {
      name: 'Support',
      count: 35,
      description: 'Support team provides 24/7 assistance to help customers resolve issues quickly.'
    }
  ];

  return (
    <main className="min-h-screen p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className={`${lusitana.className} text-4xl font-bold mb-2`}>
          Our Team
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          Meet the talented individuals who make Acme Corporation a leader in business management solutions
        </p>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {leadership.map((leader, idx) => (
              <div
                key={idx}
                itemScope
                itemType="https://schema.org/Person"
                className="bg-white p-6 rounded-lg shadow-sm border"
              >
                <h3 className="text-xl font-semibold mb-2" itemProp="name">
                  {leader.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3" itemProp="jobTitle">
                  {leader.role}
                </p>
                <p className="text-gray-700 text-sm mb-4" itemProp="description">
                  {leader.bio}
                </p>
                <div className="text-sm text-gray-600">
                  <p itemProp="email">{leader.email}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Our Departments</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {departments.map((dept, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold">{dept.name}</h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                    {dept.count} members
                  </span>
                </div>
                <p className="text-gray-700">{dept.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Join Our Team</h2>
          <p className="text-gray-700 mb-4">
            We're always looking for talented individuals to join our mission. We offer competitive salaries, 
            comprehensive benefits, flexible work arrangements, and opportunities for growth.
          </p>
          <div className="space-y-2 text-gray-700 mb-4">
            <p><strong>Current Openings:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Senior Full-Stack Engineer (Remote)</li>
              <li>Product Manager - Analytics</li>
              <li>Customer Success Manager</li>
              <li>DevOps Engineer</li>
              <li>UX Designer</li>
            </ul>
          </div>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            View Open Positions
          </Link>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-sm border mb-8">
          <h2 className="text-2xl font-semibold mb-4">Company Culture</h2>
          <p className="text-gray-700 mb-4">
            At Acme, we foster a culture of innovation, collaboration, and continuous learning. 
            Our team members enjoy:
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <ul className="space-y-2">
              <li>✓ Flexible work hours and remote options</li>
              <li>✓ Comprehensive health and dental insurance</li>
              <li>✓ Professional development budget</li>
              <li>✓ Stock options and competitive equity</li>
            </ul>
            <ul className="space-y-2">
              <li>✓ Generous vacation and paid time off</li>
              <li>✓ Team building events and retreats</li>
              <li>✓ Modern office spaces with great amenities</li>
              <li>✓ Mentorship and career growth opportunities</li>
            </ul>
          </div>
        </section>

        <div className="text-sm text-gray-500 text-center pt-4 border-t">
          <p>Team Page Version: <span data-version={teamVersion}>{teamVersion}</span></p>
          <p>Last Updated: <time dateTime={lastUpdated}>{lastUpdated}</time></p>
        </div>

        <div className="flex gap-4 mt-6">
          <Link
            href="/"
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}

