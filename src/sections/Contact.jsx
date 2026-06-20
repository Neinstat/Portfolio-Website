import React, { useState } from 'react';
import { Send, CheckCircle, Mail, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitting(true);
      try {
        const response = await fetch("https://formsubmit.co/ajax/mandreanrizqp@gmail.com", {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: `New Portfolio Message from ${formData.name}`,
            _replyto: formData.email
          })
        });
        
        if (response.ok) {
          setIsSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => {
            setIsSubmitted(false);
          }, 5000);
        } else {
          alert("Failed to send message. Please contact me directly at mandreanrizqp@gmail.com.");
        }
      } catch (error) {
        console.error("FormSubmit error:", error);
        alert("An error occurred. Please contact me directly at mandreanrizqp@gmail.com.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div>
      {/* Main Split Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '42% 58%',
        gap: '40px',
        alignItems: 'start'
      }} className="contact-split-grid">
        
        {/* Left Column: Greeting and info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <span style={{
              fontSize: '11px',
              fontWeight: '800',
              textTransform: 'uppercase',
              color: 'var(--color-text-muted)',
              letterSpacing: '2px'
            }}>
              Connect
            </span>
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(28px, 4vw, 36px)',
              fontWeight: '900',
              marginTop: '6px',
              lineHeight: '1.15',
              textTransform: 'uppercase',
              color: 'var(--color-charcoal)'
            }}>
              Let's Build<br />Something<br />Amazing.
            </h3>
          </div>

          <p style={{
            fontSize: '13px',
            color: 'var(--color-text-muted)',
            lineHeight: '1.6',
            fontWeight: '500'
          }}>
            Whether you want to consult on data engineering pipelines, discuss network traffic analytics dashboards, or collaborate on visual creations, feel free to drop a line!
          </p>

          {/* Quick Contact Specs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px', fontWeight: '700', color: 'var(--color-charcoal)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mail size={14} color="var(--color-red)" />
              <span>mandreanrizqp@gmail.com</span>
            </div>
          </div>

          {/* Available for freelance pill */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(229, 37, 33, 0.08)',
            padding: '8px 16px',
            borderRadius: '20px',
            color: 'var(--color-charcoal)',
            alignSelf: 'flex-start'
          }}>
            <span style={{
              width: '8px',
              height: '8px',
              backgroundColor: 'var(--color-red)',
              borderRadius: '50%',
              display: 'inline-block'
            }} />
            <span style={{ fontSize: '10px', fontWeight: '800', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
              Open to opportunities
            </span>
          </div>

          {/* Footer branding details */}
          <div style={{
            marginTop: '30px',
            borderTop: '1px solid rgba(0,0,0,0.05)',
            paddingTop: '20px',
            fontSize: '11px',
            color: 'var(--color-text-muted)',
            fontWeight: '500'
          }}>
            <p>© {new Date().getFullYear()} Muhammad Andrean Rizq Prasetio.</p>
            <p style={{ marginTop: '2px', opacity: 0.8 }}>Surabaya, Indonesia.</p>
          </div>
        </div>

        {/* Right Column: Contact Card Form */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          padding: '24px',
          boxShadow: 'var(--shadow-card)',
          border: '1px solid rgba(0,0,0,0.03)'
        }}>
          {isSubmitted ? (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '30px 10px',
              textAlign: 'center',
              gap: '12px'
            }}>
              <CheckCircle size={40} color="var(--color-red)" />
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: '800', color: 'var(--color-charcoal)' }}>
                Message Sent!
              </h4>
              <p style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                Thank you for reaching out. I will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label htmlFor="name" style={{ fontSize: '10px', fontWeight: '800', textTransform: 'uppercase', color: 'var(--color-text-muted)', letterSpacing: '0.5px' }}>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="clean-input"
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label htmlFor="email" style={{ fontSize: '10px', fontWeight: '800', textTransform: 'uppercase', color: 'var(--color-text-muted)', letterSpacing: '0.5px' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email"
                  className="clean-input"
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label htmlFor="message" style={{ fontSize: '10px', fontWeight: '800', textTransform: 'uppercase', color: 'var(--color-text-muted)', letterSpacing: '0.5px' }}>
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your project requirements..."
                  className="clean-input"
                  style={{ resize: 'vertical' }}
                />
              </div>

              <button 
                type="submit"
                className="btn-cta primary"
                style={{ 
                  width: '100%', 
                  marginTop: '8px',
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
                disabled={isSubmitting}
              >
                <Send size={13} />
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

export default Contact;
