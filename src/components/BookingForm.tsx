import { useState } from 'react';

export const BookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    location: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your consultation request! We\'ll contact you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="wellness-card max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-semibold text-foreground mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="wellness-input"
            placeholder="Your full name"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="wellness-input"
            placeholder="(330) 000-0000"
          />
        </div>
      </div>
      
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="wellness-input"
          placeholder="your@email.com"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="service" className="block text-sm font-semibold text-foreground mb-2">
            Service Interest *
          </label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="wellness-select"
          >
            <option value="">Select a service</option>
            <option value="weight-loss">Weight Loss Consultation</option>
            <option value="botox">Botox Consultation</option>
            <option value="filler">Dermal Filler Consultation</option>
            <option value="wellness">Wellness Shots Consultation</option>
            <option value="general">General Consultation</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="location" className="block text-sm font-semibold text-foreground mb-2">
            Preferred Location *
          </label>
          <select
            id="location"
            name="location"
            required
            value={formData.location}
            onChange={handleChange}
            className="wellness-select"
          >
            <option value="">Select location</option>
            <option value="home">My Home</option>
            <option value="office">My Office</option>
            <option value="other">Other Location</option>
          </select>
        </div>
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
          Message (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="wellness-textarea"
          placeholder="Tell us about your goals or any questions you have..."
        />
      </div>
      
      <button type="submit" className="btn-primary w-full">
        Schedule My Self-Love Consultation
      </button>
      
      <p className="text-sm text-muted-foreground text-center mt-4">
        By submitting this form, you agree to receive communications from Monet Aesthetics. 
        We respect your privacy and will never share your information.
      </p>
    </form>
  );
};