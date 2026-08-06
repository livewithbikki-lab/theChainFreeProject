import Link from "next/link";
import {
  CAMPAIGN,
  WHATSAPP_URL,
  campaignProgress,
  formatNpr,
} from "@/lib/content";

export default function CampaignProgress({ compact = false }: { compact?: boolean }) {
  const pct = campaignProgress();

  return (
    <div className={`progress-card${compact ? " is-compact" : ""}`}>
      {!compact && <h3 className="progress-title">Rescue fund progress</h3>}
      <div className="progress-meta">
        <span>
          <strong>{formatNpr(CAMPAIGN.raisedNpr)}</strong> raised
        </span>
        <span>Goal {formatNpr(CAMPAIGN.goalNpr)}</span>
      </div>
      <div
        className="progress-track"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Campaign fundraising progress"
      >
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>
      <p className="progress-note">
        {pct}% funded · {CAMPAIGN.status}
      </p>
      {!compact && (
        <div className="progress-actions">
          <Link href="/get-involved" className="btn">
            Support the rescue
          </Link>
          <a
            href={WHATSAPP_URL}
            className="btn btn-ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp us
          </a>
        </div>
      )}
    </div>
  );
}
