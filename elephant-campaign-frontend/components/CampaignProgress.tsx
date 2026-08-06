import Link from "next/link";
import {
  CAMPAIGN,
  campaignProgress,
  formatNpr,
} from "@/lib/content";

export default function CampaignProgress() {
  const pct = campaignProgress();

  return (
    <div className="progress-box">
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
      >
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>
      <p className="progress-note">
        {pct}% funded · {CAMPAIGN.status}
      </p>
      <p style={{ marginTop: "1rem", marginBottom: 0 }}>
        <Link href="/get-involved" className="btn">
          Support this fund
        </Link>
      </p>
    </div>
  );
}
