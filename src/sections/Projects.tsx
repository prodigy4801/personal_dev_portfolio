import { ArrowUpRight, Server } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { AnimatedBorderButton } from '../components/AnimatedBorderButton';

type TProjectType = 'fullstack' | 'frontend' | 'backend';

type TProjectProps = {
  id: number;
  title: string;
  description: string;
  image?: string; // optional now
  tags: string[];
  link?: string;
  github?: string;
  type: TProjectType;
};

const dataProjects: TProjectProps[] = [
  {
    id: 1,
    title: 'Contakt Management System',
    description:
      'a SaaS CRM platform enabling businesses to engage customers via WhatsApp with integrated payments and automation. ',
    image: '/projects/usecontakt_img.png',
    tags: ['Next JS', 'Typescript', 'Spring Boot Java', 'SQL'],
    link: 'https://usecontakt.com',
    github: '#',
    type: 'fullstack',
  },
  {
    id: 2,
    title: 'Cunningham Global Travels',
    description:
      'Cunningham Global Travels is a modern travel and car rental platform enabling users to discover destinations, browse rentals, and book travel services online. ',
    image: '/projects/cunningham_travels_img.png',
    tags: ['Next.js', 'Typescript', 'ASP.NET', 'C#', 'Amadeus', 'Stripe', 'PostgreSQL', 'Tailwind'],
    link: 'https://www.cunninghamglobaltravels.com/',
    github: '#',
    type: 'fullstack',
  },
  {
    id: 3,
    title: 'Betaslides',
    description:
      'Betaslides is a marketplace platform where professional designers outsource their designs work whether it be Presentation, Digital posters, Logo or Product Mockups.',
    image: '/projects/betaslides.png',
    tags: ['ASP.NET', 'C#', 'Hangfire', 'Vue JS', 'GDSN', 'GLN', 'GTIN'],
    link: 'https://betaslides.com/',
    github: '#',
    type: 'fullstack',
  },
  {
    id: 4,
    title: 'Enterprise API Services (GS1 Nigeria)',
    description:
      'Designed and developed secure, scalable API services for product identification and data exchange systems, supporting standards like GTIN and GLN. Focused on high availability, data integrity, and integration with third-party enterprise systems.',
    tags: ['ASP.NET', 'C#', 'REST APIs', 'GDSN', 'GLN', 'GTIN', 'PostgreSQL'],
    type: 'backend',
  },
];

const Projects = () => {
  return (
    <section id='projects' className='py-16 relative overflow-hidden'>
      {/* Bg glows */}
      <div className='absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl' />
      <div className='absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl' />
      <div className='container mx-auto px-6 relative z-10'>
        {/* Section Header */}
        <div className='text-center mx-auto max-w-3xl mb-16'>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>
            Featured Work
          </span>
          <h2 className='text-3xl md:text-4xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>
            Projects that
            <span className='font-serif italic font-normal text-white'> make an impact.</span>
          </h2>
          <p className='text-muted-foreground animate-fade-in animation-delay-200'>
            A selection of my recent work, from complex web applications to innovative tools that solve real-world
            problems.
          </p>
        </div>
        {/* Projects Grid */}
        <div className='grid md:grid-cols-2 gap-8'>
          {dataProjects.map((project) => (
            <div
              key={project.id}
              className='group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1'
              style={{ animationDelay: `${project.id * 100}ms` }}
            >
              {/* Image */}
              <div className='relative overflow-hidden aspect-video'>
                {project.type !== 'backend' && project.image ? (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                    />
                    <div
                      className='absolute inset-0
                bg-linear-to-t from-card via-card/50
                 to-transparent opacity-60'
                    />
                    <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                      <a
                        href={project.link}
                        className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <ArrowUpRight className='w-5 h-5' />
                      </a>
                      <a
                        href={project.github}
                        className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'
                      >
                        <FaGithub className='w-5 h-5' />
                      </a>
                    </div>
                  </>
                ) : (
                  <div className='w-full h-full flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-primary/10 to-transparent'>
                    <Server className='w-10 h-10 text-primary opacity-70' />
                    <span className='text-sm text-muted-foreground'>Backend Service</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className='p-6 space-y-4'>
                <div className='flex items-start justify-between'>
                  <h3 className='text-lg font-semibold group-hover:text-primary transition-colors'>{project.title}</h3>
                  <ArrowUpRight
                    className='w-5 h-5
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1
                   group-hover:-translate-y-1 transition-all'
                  />
                </div>
                <p className='text-muted-foreground text-sm'>{project.description}</p>
                <div className='flex flex-wrap gap-1'>
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className='px-2 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* View All CTA */}
        <div className='text-center mt-12 animate-fade-in animation-delay-500'>
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className='w-5 h-5' />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};

export default Projects;
