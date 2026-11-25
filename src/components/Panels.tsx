// Product panels for the four steps. Built as real, dense UI with specific sample
// content: no window chrome, no skeleton lines (audit V2/V3).
// Swap for real screenshots when the product team supplies them (DEP1).
import type { Dictionary } from "@/content";
import { IconCheckSeal, IconDoc } from "./icons";

type T = Dictionary["panels"];

export function ComposePanel({ p, sample }: { p: T["compose"]; sample: string }) {
  return (
    <div className="panel">
      <div className="panel-head">
        <span>{p.head}</span>
        <span className="tag">{p.draft}</span>
      </div>
      <div className="panel-body">
        <div className="file">
          <IconDoc />
          <span className="grow">{p.file}</span>
          <small>{p.pages}</small>
        </div>
        {p.recipients.map((r, i) => (
          <div className="row" key={r.name}>
            <span className="order">{i + 1}</span>
            <span className="grow">{r.name}</span>
            <span className={r.role === p.recipients[0].role ? "tag seal" : "tag"}>{r.role}</span>
          </div>
        ))}
        <span className="mini-btn">{p.send}</span>
      </div>
      <div className="panel-foot">{sample}</div>
    </div>
  );
}

export function SignPanel({ p, sample }: { p: T["sign"]; sample: string }) {
  return (
    <div className="panel">
      <div className="panel-head">
        <span className="grow">{p.head}</span>
        <small>{p.page}</small>
      </div>
      <div className="panel-body">
        <div className="text-lines">
          {p.lines.map((l) => (
            <p key={l}>{l}</p>
          ))}
        </div>
        <div className="sign-box">{p.box}</div>
        <span className="check">
          <IconCheckSeal />
          {p.verified}
        </span>
        <span className="mini-btn">{p.finish}</span>
      </div>
      <div className="panel-foot">{sample}</div>
    </div>
  );
}

export function SealPanel({ p, sample }: { p: T["seal"]; sample: string }) {
  return (
    <div className="panel">
      <div className="panel-head">
        <span>{p.head}</span>
        <span className="tag ok">{p.status}</span>
      </div>
      <div className="panel-body">
        <ul className="log">
          {p.events.map((e) => (
            <li key={e.what}>
              <span className="dot" />
              <span>{e.what}</span>
              <time className="mono ltr">{e.when}</time>
            </li>
          ))}
        </ul>
      </div>
      <div className="panel-foot">{sample}</div>
    </div>
  );
}

export function VerifyPanel({ p, sample }: { p: T["verify"]; sample: string }) {
  return (
    <div className="panel">
      <div className="panel-head">
        <span>{p.head}</span>
        <small className="mono ltr">{p.file}</small>
      </div>
      <div className="panel-body">
        <span className="check">
          <IconCheckSeal />
          {p.verdict}
        </span>
        <p style={{ color: "var(--ink-2)" }}>{p.verdictSub}</p>
        {p.rows.map((r) => (
          <div className="row" key={r.who}>
            <span className="grow">{r.who}</span>
            <small style={{ color: "var(--ink-3)" }}>{r.how}</small>
            <span className="tag ok mono">PAdES-LT</span>
          </div>
        ))}
      </div>
      <div className="panel-foot">{sample}</div>
    </div>
  );
}
