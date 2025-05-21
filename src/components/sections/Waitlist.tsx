import { useState } from 'react';

interface WaitlistProps {
  title?: string;
}

export default function Waitlist({ title = 'Join the Waitlist' }: WaitlistProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    setStatus('loading');
    // Form will be handled by FormSubmit.co
    // Status and message will be managed by the service
  };

  return (
    <div className="mb-16 py-8 px-6 rounded-2xl bg-gradient-to-r from-[#FF3131]/10 to-[#FF914D]/10">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4 text-black">{title}</h2>
        <p className="text-gray-600 mb-6">
          Be the first to experience our app when it launches. Join our waitlist today!
        </p>

        <form
          action="https://formsubmit.co/holiemood@gmail.com"
          method="POST"
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input type="hidden" name="_subject" value="New Waitlist Signup!" />
          <input type="hidden" name="_autoresponse" value="Thanks for joining our waitlist! We'll keep you updated on our progress." />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="true" />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF3131] focus:border-transparent"
            disabled={status === 'loading' || status === 'success'}
            required
          />
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#FF3131] to-[#FF914D] text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Joining...' : 'Join Now'}
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 text-sm ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
