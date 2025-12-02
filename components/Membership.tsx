import React, { useState } from 'react';
import { Check, ArrowLeft, ArrowRight } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

interface MembershipProps {
  onBack: () => void;
}

const Membership: React.FC<MembershipProps> = ({ onBack }) => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  const plans = [
    {
      name: "Monthly",
      price: "₹2,500",
      duration: "/month",
      features: ["Access to Gym Floor", "General Trainer Support", "Locker Facility", "Free WiFi"],
      recommended: false
    },
    {
      name: "Quarterly",
      price: "₹6,500",
      duration: "/3 months",
      features: ["All Monthly Benefits", "1 Personal Training Session", "Body Composition Analysis", "Diet Consultation"],
      recommended: true
    },
    {
      name: "Annual",
      price: "₹18,000",
      duration: "/year",
      features: ["All Quarterly Benefits", "Free T-shirt & Shaker", "Priority Support", "Guest Pass (2/month)"],
      recommended: false
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-black text-white pb-20">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
          
          <RevealOnScroll width="100%">
            <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Membership Plans</h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                Choose the plan that fits your lifestyle. No hidden fees, just pure fitness.
                </p>
            </div>
          </RevealOnScroll>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {plans.map((plan, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <div className={`relative p-8 rounded-sm border transition-all duration-300 h-full flex flex-col ${
                plan.recommended 
                  ? 'bg-zinc-900 border-brand-red transform md:-translate-y-4 shadow-xl shadow-brand-red/10' 
                  : 'bg-black border-white/10 hover:border-brand-red/50'
              }`}>
                {plan.recommended && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-red text-white text-xs font-bold uppercase py-1 px-3 tracking-widest rounded-sm">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-3xl md:text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-500 text-sm mb-1">{plan.duration}</span>
                </div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                      <Check size={16} className="text-brand-red mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Free Trial Form */}
        <div id="trial-form" className="max-w-4xl mx-auto bg-zinc-900 border border-white/10 rounded-sm p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-white">Start Your Free Trial</h2>
              <p className="text-gray-400 mb-6">
                Experience The Sweat Society difference. Fill out the form to claim your 3-day guest pass.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-8 h-8 rounded-full bg-brand-red/20 flex items-center justify-center text-brand-red font-bold">1</div>
                  <span>Fill out your details</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-8 h-8 rounded-full bg-brand-red/20 flex items-center justify-center text-brand-red font-bold">2</div>
                  <span>Receive confirmation via SMS/Call</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-8 h-8 rounded-full bg-brand-red/20 flex items-center justify-center text-brand-red font-bold">3</div>
                  <span>Visit the gym & start training</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {formStatus === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 bg-green-900/20 border border-green-500/30 rounded-sm">
                  <Check className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Request Received!</h3>
                  <p className="text-gray-300">We'll contact you shortly to schedule your first visit.</p>
                  <button 
                    type="button" 
                    onClick={() => setFormStatus('idle')}
                    className="mt-6 text-sm text-green-500 hover:text-green-400 underline"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Full Name</label>
                    <input required type="text" className="w-full bg-black border border-white/10 p-3 text-white focus:border-brand-red focus:outline-none transition-colors rounded-sm" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Phone Number</label>
                    <input required type="tel" className="w-full bg-black border border-white/10 p-3 text-white focus:border-brand-red focus:outline-none transition-colors rounded-sm" placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                    <input required type="email" className="w-full bg-black border border-white/10 p-3 text-white focus:border-brand-red focus:outline-none transition-colors rounded-sm" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Fitness Goal</label>
                    <select className="w-full bg-black border border-white/10 p-3 text-white focus:border-brand-red focus:outline-none transition-colors rounded-sm">
                      <option>Weight Loss</option>
                      <option>Muscle Gain</option>
                      <option>General Fitness</option>
                      <option>Personal Training</option>
                    </select>
                  </div>
                  <button 
                    disabled={formStatus === 'submitting'}
                    type="submit" 
                    className="w-full bg-brand-red text-white font-bold uppercase tracking-widest py-4 mt-4 hover:bg-red-700 transition-colors rounded-sm flex items-center justify-center gap-2"
                  >
                    {formStatus === 'submitting' ? 'Processing...' : 'Claim Free Pass'}
                    {!formStatus && <ArrowRight size={18} />}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;