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
    setFormData({
      ...formData,
      type,
      date: '',
      guests: '',
    });
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
          alert(
            'Sorry, an error occurred: ' + (errorData.message || 'Server error')
          );
        }
      }
    } catch {
      let errorMsg =
        'Could not connect to the server. Please verify the backend is running!';
      if (isMissingEnv) {
        errorMsg +=
          '\n\n(Debugging Note: The NEXT_PUBLIC_API_URL environment variable is not defined.)';
      }
      alert(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getTomorrowString = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  return (
    <div className="classic-form">
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
          Book a visit
        </button>
      </div>

      {formSubmitted ? (
        <div className="form-success">
          <p>
            <strong>
              {formType === 'volunteer'
                ? 'Application received!'
                : 'Booking request received!'}
            </strong>
          </p>
          <p>
            {formType === 'volunteer'
              ? 'Thank you for joining our campaign. Our team will review your application and reach out shortly.'
              : 'Thank you. We have received your booking enquiry and will contact you to confirm availability.'}
          </p>
          <button type="button" className="btn" onClick={() => setFormSubmitted(false)}>
            Submit another request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            placeholder="Your name"
            className={formErrors.name ? 'field-error' : undefined}
          />
          {formErrors.name && (
            <p className="error-text">{formErrors.name[0]}</p>
          )}

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="name@example.com"
            className={formErrors.email ? 'field-error' : undefined}
          />
          {formErrors.email && (
            <p className="error-text">{formErrors.email[0]}</p>
          )}

          <label htmlFor="contact_handle">WhatsApp or Social (Optional)</label>
          <input
            id="contact_handle"
            type="text"
            name="contact_handle"
            value={formData.contact_handle}
            onChange={handleInputChange}
            placeholder="e.g. +977 980… or @yourhandle"
            className={formErrors.contact_handle ? 'field-error' : undefined}
          />
          {formErrors.contact_handle && (
            <p className="error-text">{formErrors.contact_handle[0]}</p>
          )}

          {formType === 'booking' && (
            <>
              <label htmlFor="date">Preferred Date</label>
              <input
                id="date"
                type="date"
                name="date"
                min={getTomorrowString()}
                value={formData.date}
                onChange={handleInputChange}
                required={formType === 'booking'}
                className={formErrors.date ? 'field-error' : undefined}
              />
              {formErrors.date && (
                <p className="error-text">{formErrors.date[0]}</p>
              )}

              <label htmlFor="guests">Number of Guests</label>
              <input
                id="guests"
                type="number"
                name="guests"
                min={1}
                max={50}
                value={formData.guests}
                onChange={handleInputChange}
                required={formType === 'booking'}
                placeholder="2"
                className={formErrors.guests ? 'field-error' : undefined}
              />
              {formErrors.guests && (
                <p className="error-text">{formErrors.guests[0]}</p>
              )}
            </>
          )}

          <label htmlFor="message">
            {formType === 'volunteer'
              ? 'How can you help?'
              : 'Notes or comments'}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            placeholder={
              formType === 'volunteer'
                ? 'Tell us why you want to support chain-free elephant welfare…'
                : 'Any requests or details…'
            }
            className={formErrors.message ? 'field-error' : undefined}
          />
          {formErrors.message && (
            <p className="error-text">{formErrors.message[0]}</p>
          )}

          <button type="submit" className="btn" disabled={isSubmitting}>
            {isSubmitting
              ? 'Submitting…'
              : formType === 'volunteer'
                ? 'Submit application'
                : 'Send booking enquiry'}
          </button>
        </form>
      )}
    </div>
  );
}
