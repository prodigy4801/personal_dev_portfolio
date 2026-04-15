import React from 'react';
import { Button } from '../components/Button';
import { ArrowRight, ChevronDown, Download } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { AnimatedBorderButton } from '../components/AnimatedBorderButton';

const dataSkils: string[] = [
  'ASP.Net',
  'Spring Boot Java',
  'Nest JS',
  'Node JS',
  'TypeScript',
  'React',
  'Next JS',
  'Vue',
  'PostgreSQL',
  'SQL',
  'Oracle',
  'Redis',
  'Docker',
  'Azure',
  'Vercel',
  'Tailwind CSS',
  'Prisma',
  'Jest',
  'Cypress',
  'JUnit 5',
  'Figma',
  'Git',
  'GitHub Actions',
];
type TSocialProps = {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  color: string;
};
const socials: TSocialProps[] = [
  { icon: FaGithub, href: '#', color: 'hover:text-[#181717]' }, // GitHub black
  { icon: FaLinkedin, href: '#', color: 'hover:text-[#0A66C2]' }, // LinkedIn blue
  { icon: FaTwitter, href: '#', color: 'hover:text-[#1DA1F2]' }, // Twitter blue
];

const Hero = () => {
  return (
    <section className='relative min-h-screen flex items-center overflow-hidden'>
      {/* Bg */}
      <div className='absolute inset-0'>
        <img src='/hero-banner-img.jpg' alt='Hero image' className='w-full h-full object-cover opacity-40' />
        <div className='absolute inset-0 bg-linear-to-b from-background/20 via-background/70 to-background' />
      </div>

      {/* Green Dots */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {[...Array(50)].map((_, i) => (
          <div
            className='absolute w-1 h-1 rounded-full opacity-60'
            style={{
              backgroundColor: '#da291c',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      {/* Content */}
      <div className='container mx-auto px-6 pt-32 pb-20 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Column - Text Content */}
          <div className='space-y-8'>
            <div className='animate-fade-in'>
              <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary'>
                <span className='w-2 h-2 bg-primary rounded-full animate-pulse' />
                Software Engineer • Backend Specialist
              </span>
            </div>
            {/* Headline */}
            <div className='space-y-4'>
              <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold leading-tight animate-fade-in animation-delay-100'>
                Building <span className='text-primary glow-text'>scalable systems</span>
                <br />
                that power modern
                <br />
                <span className='font-serif italic font-normal text-white'>digital products.</span>
              </h1>
              <p className='text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200'>
                Hi, I'm Samuel Esezobor - I specialize in building reliable, scalable systems and APIs that handle
                real-world complexity — helping businesses ship faster and scale confidently.
              </p>
            </div>
            {/* CTAs */}
            <div className='flex flex-wrap gap-4 animate-fade-in animation-delay-300'>
              <Button size='default'>
                Contact Me <ArrowRight className='w-5 h-5' />
              </Button>
              <AnimatedBorderButton>
                <Download className='w-5 h-5' />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className='flex items-center gap-4 animate-fade-in animation-delay-400'>
              <span className='text-sm text-muted-foreground'>Follow me: </span>
              {socials.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  className={`p-2 rounded-full glass transition-all duration-300 ${social.color}`}
                >
                  {<social.icon className='w-5 h-5' />}
                </a>
              ))}
            </div>
          </div>
          {/* Right Column - Profile Image */}
          <div className='relative animate-fade-in animation-delay-300'>
            {/* Profile Image */}
            <div className='relative max-w-md mx-auto'>
              <div
                className='absolute inset-0
              rounded-3xl bg-linear-to-br
              from-primary/30 via-transparent
              to-primary/10 blur-2xl animate-pulse'
              />
              <div className='relative glass rounded-3xl glow-border'>
                <img
                  src='/my_personal_pics.jpg'
                  alt='Samuel Esezobor'
                  className='w-full aspect-4/5 object-cover rounded-2xl'
                />

                {/* Floating Badge */}
                <div className='absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float'>
                  <div className='flex items-center gap-3'>
                    <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse' />
                    <span className='text-sm font-medium'>Available for work</span>
                  </div>
                </div>

                {/* Stats Badge */}
                <div className='absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500'>
                  <div className='text-xl font-bold text-primary'>4+</div>
                  <div className='text-xs text-gray-200'>Years Of Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className='mt-20 animate-fade-in animation-delay-600'>
          <p className='text-sm text-muted-foreground mb-6 text-center'>Technologies I work with</p>
          <div className='relative overflow-hidden'>
            <div
              className='absolute left-0 top-0 bottom-0 w-32
             bg-linear-to-r from-background to-transparent z-10'
            />
            <div
              className='absolute right-0 top-0 bottom-0 w-32
             bg-linear-to-l from-background to-transparent z-10'
            />
            <div className='flex animate-marquee'>
              {[...dataSkils, ...dataSkils].map((skill, idx) => (
                <div key={idx} className='shrink-0 px-8 py-4'>
                  <span className='text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors'>
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className='absolute bottom-8 left-1/2 -translate-x-1/2
      animate-fade-in animation-delay-800'
      >
        <a
          href='#about'
          className='flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group'
        >
          <span className='text-xs uppercase tracking-wider'>Scroll</span>
          <ChevronDown className='w-6 h-6 animate-bounce' />
        </a>
      </div>
    </section>
  );
};

export default Hero;
