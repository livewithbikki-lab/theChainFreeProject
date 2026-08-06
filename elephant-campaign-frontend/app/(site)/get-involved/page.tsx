import type { Metadata } from 'next';
import VolunteerForm from '@/components/VolunteerForm';

export const metadata: Metadata = {
  title: 'Get involved',
};

export default function GetInvolvedPage() {
  return (
    <article className="entry">
      <header className="entry-header">
        <h1 className="entry-title">Get involved</h1>
      </header>
      <div className="entry-content" style={{ maxWidth: '100%' }}>
        <p style={{ textAlign: 'left' }}>
          The Chain Free Project welcomes volunteers, visitors seeking ethical
          elephant experiences, and supporters who want to help free working
          elephants in Sauraha. Fill in the form below and our team will respond
          as soon as possible.
        </p>
        <VolunteerForm />
      </div>
    </article>
  );
}
