import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Campaign',
  description:
    'Support the Elephant Rescue Fund and help free a working tourist elephant in Sauraha, Chitwan.',
};

export default function CampaignPage() {
  return (
    <article className="entry">
      <header className="entry-header">
        <h1 className="entry-title">Elephant Rescue Fund</h1>
      </header>
      <div className="entry-content">
        <p>
          Picture this: dawn in Sauraha. Mist over the Rapti. An elephant who
          once waited for tourists under a heavy saddle instead steps into soft
          grass — no chain biting at her leg, no timetable pulling her away from
          the river.
        </p>
        <p>
          <strong>That is what this campaign is for.</strong> We are raising
          funds to buy out a working tourist elephant, bring her into permanent
          sanctuary care, and give her a lifetime of dignity. Every rupee goes
          where it matters — rescue, veterinary healing, food, shelter, and the
          people who will care for her every day.
        </p>
        <p>
          Commercial riding keeps elephants busy for guests, but it often keeps
          them bound. Chains. Hooks. Hours of stillness. We believe Nepal’s
          elephants deserve a different ending — and we are writing it with
          anyone willing to help.
        </p>

        <div className="callout">
          <h3>Active pledge</h3>
          <p>
            <strong>Campaign goal:</strong> Rs. 2,000,000
          </p>
          <p>
            We are finalising rescue arrangements now. Candidate details will be
            shared as soon as contracts are complete. Your gift does not wait in
            a vague fund — it becomes freedom, medicine, shade, and care.
          </p>
          <Link href="/get-involved" className="btn">
            Help free an elephant
          </Link>
        </div>

        <h2>What your kindness covers</h2>
        <ul>
          <li>Negotiating a fair release from commercial work</li>
          <li>Urgent veterinary checks and healing treatment</li>
          <li>Chain-free shelter, daily fodder, and forest time</li>
          <li>Fair pay for mahouts trained in gentle, cooperative care</li>
          <li>Local education that grows ride-free tourism in Sauraha</li>
        </ul>

        <h2>Three promises we keep</h2>
        <p>
          <strong>Sanctuary &amp; safety.</strong> Rescue is not a photo moment.
          It is a lifelong home — medical care, rest, grazing, and protection
          from ever returning to the saddle.
        </p>
        <p>
          <strong>Dignity for mahouts.</strong> The people closest to elephants
          deserve pride in their craft. We invest in training, steady work, and
          methods built on trust instead of force.
        </p>
        <p>
          <strong>Wonder without harm.</strong> Visitors can still meet
          elephants — by walking nearby, preparing food, and watching river
          baths — with soft footsteps and full hearts.
        </p>

        <p>
          If you have ever looked into an elephant’s eyes and felt something
          larger than words, this is your invitation. Be part of the day a chain
          comes off for good.
        </p>
        <p>
          Ready to help?{' '}
          <Link href="/get-involved">Send us a message</Link> or reach us on{' '}
          <a
            href="https://wa.me/9779865345753?text=Hi!%20I%20want%20to%20support%20The%20Chain%20Free%20Project."
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          . We would love to welcome you into this story.
        </p>
      </div>
    </article>
  );
}
