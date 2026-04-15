import { Code2, Lightbulb, Rocket, Users } from 'lucide-react';

type THighlightProps = {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

const dataHighlights: THighlightProps[] = [
  {
    id: 1,
    icon: Code2,
    title: 'Scalable Architecture',
    description: 'Designing backend systems and APIs that scale efficiently and handle high traffic with ease.',
  },
  {
    id: 2,
    icon: Rocket,
    title: 'Performance Optimization',
    description:
      'Improving system performance through efficient queries, caching strategies, and optimized code execution.',
  },
  {
    id: 3,
    icon: Users,
    title: 'API Design & Integration',
    description: 'Building robust RESTful APIs and integrating third-party services for seamless system communication.',
  },
  {
    id: 4,
    icon: Lightbulb,
    title: 'Problem Solving',
    description: 'Breaking down complex business requirements into reliable and maintainable technical solutions.',
  },
];

const About = () => {
  return (
    <section id='about' className='py-16 relative overflow-hidden'>
      <div className='container mx-auto px-6 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Left Column */}
          <div className='space-y-8'>
            <div className='animate-fade-in'>
              <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>About Me</span>
            </div>
            <h2 className='text-3xl md:text-4xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground'>
              Designing scalable systems,
              <span className='font-serif italic font-normal text-white'> powering modern applications.</span>
            </h2>
            <div className='space-y-4 text-muted-foreground animate-fade-in animation-delay-200'>
              <p>
                I'm a backend-focused software engineer with over 4 years of experience building scalable, reliable
                systems that power real-world applications. I specialize in designing APIs, handling complex business
                logic, and ensuring systems perform efficiently under load.
              </p>
              <p>
                My core expertise spans across ASP.NET, Java (Spring Boot), and Node.js (NestJS), with strong experience
                in database design using PostgreSQL, MongoDB, and Redis. While backend development is my strength, I
                also work with frontend technologies like React and Next.js to deliver complete, end-to-end solutions.
              </p>
              <p>
                I focus on writing clean, maintainable code and building systems that are easy to scale, monitor, and
                evolve over time. I enjoy solving complex engineering problems and contributing to products that have
                real impact.
              </p>
            </div>
            <div className='glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300'>
              <p className='text-lg font-medium italic text-foreground'>
                "I build systems that are reliable, scalable, and designed to handle real-world complexity — software
                that not only works, but continues to perform as it grows."
              </p>
            </div>
          </div>
          {/* Right Column - Highlights */}
          <div className='grid sm:grid-cols-2 gap-6'>
            {dataHighlights.map((item) => (
              <div
                key={item.title}
                className='glass p-6 rounded-2xl animate-fade-in'
                style={{ animationDelay: `${item.id * 100}ms` }}
              >
                <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20'>
                  <item.icon className='w-6 h-6 text-primary' />
                </div>
                <h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
                <p className='text-sm text-muted-foreground'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
