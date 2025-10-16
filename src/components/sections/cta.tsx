"use client";

import Section from "@/components/section";
import { LightRays } from "@/components/ui/light-rays"
import { RainbowButton } from "@/components/magicui/rainbow-button"
import { Input } from "../ui/input";
import { useState } from "react";
import { subscribeToNewsletter } from "@/lib/supabase";
import { CheckCircle, AlertCircle } from "lucide-react";

export default function CtaSection() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setMessage({ type: 'error', text: 'Please enter your email address' });
      return;
    }

    if (!email.includes('@')) {
      setMessage({ type: 'error', text: 'Please enter a valid email address' });
      return;
    }

    setIsLoading(true);
    setMessage(null);

    try {
      const result = await subscribeToNewsletter(email);
      
      if (result.success) {
        setMessage({ type: 'success', text: 'Congratulations! You have successfully subscribed to our newsletter!' });
        setEmail("");
      } else {
        setMessage({ type: 'error', text: result.error || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Something went wrong. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Section
      id="cta"
      title="Subscribe for the most valuable insights and updates in form of a Monthly Newsletter"
      className="bg-primary/10 rounded-xl"
    > 
      <LightRays />
      
      <form onSubmit={handleSubmit} className="flex flex-col w-full sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
        <Input 
          type="email" 
          placeholder="Your Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          className="flex-1"
        />
        <RainbowButton 
          type="submit"
          variant="default" 
          className="w-full sm:w-auto"
          disabled={isLoading}
        >
          {isLoading ? "Subscribing..." : "Subscribe Now"}
        </RainbowButton>
      </form>

      {message && (
        <div className={`mt-4 p-4 rounded-lg flex items-center space-x-2 ${
          message.type === 'success' 
            ? 'bg-green-50 text-green-800 border border-green-200' 
            : 'bg-red-50 text-red-800 border border-red-200'
        }`}>
          {message.type === 'success' ? (
            <CheckCircle className="w-5 h-5 text-green-600" />
          ) : (
            <AlertCircle className="w-5 h-5 text-red-600" />
          )}
          <span className="text-sm font-medium">{message.text}</span>
        </div>
      )}
    </Section>
  );
}
