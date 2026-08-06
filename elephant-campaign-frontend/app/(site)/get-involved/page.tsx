import type { Metadata } from 'next';
import VolunteerForm from '@/components/VolunteerForm';

export const metadata: Metadata = {
  title: 'Get involved',
  description:
    'Volunteer, book an ethical visit, or support The Chain Free Project in Sauraha, Chitwan.',
};

export default function GetInvolvedPage() {
  return (
    <article className="entry">
      <header className="entry-header">
        <h1 className="entry-title">Get involved</h1>
      </header>
      <div className="entry-content" style={{ maxWidth: '100%' }}>
        <p style={{ textAlign: 'left' }}>
          Some people change a place by visiting gently. Others stay and work
          with their hands. Many help from far away with a message of support.
          All of them matter here.
        </p>
        <p style={{ textAlign: 'left' }}>
          If you want to <strong>volunteer</strong> with mahouts,{' '}
          <strong>book a ride-free experience</strong>, or simply tell us you
          stand with chain-free elephants — we are listening. Share a little
          about yourself below. We will write back with warmth and clear next
          steps.
        </p>
        <p style={{ textAlign: 'left' }}>
          Come as you are. Leave knowing you helped an elephant’s world grow
          softer.
        </p>
        <VolunteerForm />
      </div>
    </article>
  );
}
