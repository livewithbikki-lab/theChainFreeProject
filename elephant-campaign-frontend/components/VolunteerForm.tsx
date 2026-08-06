'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';

export default function VolunteerForm() {
  const [formType, setFormType] = useState<'volunteer' | 'booking'>('volunteer');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact_handle: '',
    type: 'volunteer',
    date: '',
    guests: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string[]>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleTypeChange = (type: 'volunteer' | 'booking') => {
    setFormType(type);
    setFormData({ ...formData, type, date: '', guests: '' });
    setFormErrors({});
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormErrors({});
    setIsSubmitting(true);

    const payload = {
      ...formData,
      guests: formData.guests ? parseInt(formData.guests, 10) : null,
      date: formData.type === 'booking' ? formData.date : null,
    };

    const baseApiUrl = process.env.NEXT_PUBLIC_API_URL;
    const isMissingEnv =
      !baseApiUrl || baseApiUrl === 'undefined' || baseApiUrl.trim() === '';
    const apiUrl = isMissingEnv ? 'http://localhost:8000/api' : baseApiUrl;

    try {
      const response = await fetch(`${apiUrl}/volunteer`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setFormSubmitted(true);
        setFormData({
          name: '',
          email: '',
          contact_handle: '',
          type: formType,
          date: '',
          guests: '',
          message: '',
        });
      } else {
        const errorData = await response.json();
        if (response.status === 422 && errorData.errors) {
          setFormErrors(errorData.errors);
        } else {
          alert('Sorry, something went wrong. Please try again.');
        }
      }
    } catch {
      alert(
        isMissingEnv
          ? 'Could not reach the server. API URL is not configured.'
          : 'Could not reach the server. Please try again later.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const tomorrow = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  };

  return (
    <div className="form-card">
      <div className="form-tabs">
        <button
          type="button"
          className={formType === 'volunteer' ? 'active' : undefined}
          onClick={() => handleTypeChange('volunteer')}
        >
          Volunteer
        </button>
        <button
          type="button"
          className={formType === 'booking' ? 'active' : undefined}
          onClick={() => handleTypeChange('booking')}
        >
          Book visit
        </button>
      </div>

      {formSubmitted ? (
        <div className="form-success">
          <p>
            <strong>Thank you.</strong> We received your message and will reply
            soon.
          </p>
          <button type="button" className="btn" onClick={() => setFormSubmitted(false)}>
            Send another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            placeholder="Your name"
          />
          {formErrors.name && <p className="error-text">{formErrors.name[0]}</p>}

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="you@email.com"
          />
          {formErrors.email && <p className="error-text">{formErrors.email[0]}</p>}

          <label htmlFor="contact_handle">WhatsApp (optional)</label>
          <input
            id="contact_handle"
            name="contact_handle"
            value={formData.contact_handle}
            onChange={handleInputChange}
            placeholder="+977 ..."
          />

          {formType === 'booking' && (
            <>
              <label htmlFor="date">Preferred date</label>
              <input
                id="date"
                type="date"
                name="date"
                min={tomorrow()}
                value={formData.date}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="guests">Guests</label>
              <input
                id="guests"
                type="number"
                name="guests"
                min={1}
                max={50}
                value={formData.guests}
                onChange={handleInputChange}
                required
                placeholder="2"
              />
            </>
          )}

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            placeholder={
              formType === 'volunteer'
                ? 'How would you like to help?'
                : 'Any notes for your visit?'
            }
          />

          <button type="submit" className="btn" disabled={isSubmitting}>
            {isSubmitting ? 'Sending…' : 'Send'}
          </button>
        </form>
      )}
    </div>
  );
}
