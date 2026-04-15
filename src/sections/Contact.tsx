import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '../components/Button';
import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import emailjs from '@emailjs/browser';

// ✅ Types
type ContactInfoItem = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
};

type FormData = {
  name: string;
  email: string;
  message: string;
};

type SubmitStatus = {
  type: 'success' | 'error' | null;
  message: string;
};

// ✅ Contact Info
const contactInfo: ContactInfoItem[] = [
  {
    icon: Mail,
    label: 'Email',
    value: 'samuel.esezobor076@gmail.com',
    href: 'samuel.esezobor076@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+2347038954801',
    href: 'tel:+2347038954801',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Lagos, Nigeria',
    href: '#',
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({
    type: null,
    message: '',
  });

  // ✅ Handlers
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.');
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
          year: new Date().getFullYear(),
        },
        publicKey,
      );

      setSubmitStatus({
        type: 'success',
        message: "Message sent successfully! I'll get back to you soon.",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error: any) {
      console.error('EmailJS error:', error);

      setSubmitStatus({
        type: 'error',
        message: error?.text || error?.message || 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id='contact' className='py-16 relative overflow-hidden'>
      <div className='container mx-auto px-6 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 mx-auto'>
          {/* Form */}
          <div className='glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300'>
            <form className='w-full space-y-6' onSubmit={handleSubmit}>
              <div className='w-full'>
                <label htmlFor='name' className='block text-sm font-medium mb-2'>
                  Name
                </label>
                <input
                  id='name'
                  type='text'
                  required
                  placeholder='Your name...'
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all'
                />
              </div>

              <div className='w-full'>
                <label htmlFor='email' className='block text-sm font-medium mb-2'>
                  Email
                </label>
                <input
                  id='email'
                  type='email'
                  required
                  placeholder='your@email.com'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all'
                />
              </div>

              <div className='w-full'>
                <label htmlFor='message' className='block text-sm font-medium mb-2'>
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder='Your message...'
                  className='w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none'
                />
              </div>

              <Button className='w-full' type='submit' size='lg' disabled={isLoading}>
                {isLoading ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message
                    <Send className='w-5 h-5' />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3
                     p-4 rounded-xl ${
                       submitStatus.type === 'success'
                         ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                         : 'bg-red-500/10 border border-red-500/20 text-red-400'
                     }`}
                >
                  {submitStatus.type === 'success' ? (
                    <CheckCircle className='w-5 h-5 shrink-0' />
                  ) : (
                    <AlertCircle className='w-5 h-5 shrink-0' />
                  )}
                  <p className='text-sm'>{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className='space-y-6 animate-fade-in animation-delay-400'>
            <div className='glass rounded-3xl p-8'>
              <h3 className='text-lg font-semibold mb-6'>Contact Information</h3>
              <div className='space-y-4'>
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className='flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group'
                  >
                    <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                      <item.icon className='w-5 h-5 text-primary' />
                    </div>
                    <div>
                      <div className='text-sm text-muted-foreground'>{item.label}</div>
                      <div className='font-medium'>{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            {/* Availability Card */}
            <div className='glass rounded-3xl p-8 border border-primary/30'>
              <div className='flex items-center gap-3 mb-4'>
                <span className='w-3 h-3 bg-green-500 rounded-full animate-pulse' />
                <span className='font-medium'>Currently Available</span>
              </div>
              <p className='text-muted-foreground text-sm'>
                I'm currently open to new opportunities and exciting projects. Whether you need a full-time engineer or
                a freelance consultant, let's talk!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
