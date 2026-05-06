import type { Audit } from "@/types/portfolio";

type AuditTableProps = {
  audits: Audit[];
};

function severityClass(severity: Audit["severity"]) {
  if (severity === "high") return "bg-[var(--severity-high-bg)] text-[var(--severity-high-text)]";
  if (severity === "medium") return "bg-[var(--severity-medium-bg)] text-[var(--severity-medium-text)]";
  return "bg-[var(--severity-low-bg)] text-[var(--severity-low-text)]";
}

export function AuditTable({ audits }: AuditTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-[var(--border-default)] bg-[var(--bg-card)] shadow-sm">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-[var(--surface-muted)] text-[var(--text-secondary)]">
          <tr>
            <th className="px-4 py-3 font-semibold">Area</th>
            <th className="px-4 py-3 font-semibold">Finding</th>
            <th className="px-4 py-3 font-semibold">Action</th>
            <th className="px-4 py-3 font-semibold">Severity</th>
          </tr>
        </thead>
        <tbody>
          {audits.map((audit) => (
            <tr key={audit.id} className="border-t border-[var(--border-default)] align-top">
              <td className="px-4 py-3 text-[var(--text-primary)]">{audit.area}</td>
              <td className="px-4 py-3 text-[var(--text-secondary)]">{audit.finding}</td>
              <td className="px-4 py-3 text-[var(--text-secondary)]">{audit.action}</td>
              <td className="px-4 py-3">
                <span className={`rounded-full px-2 py-1 text-xs font-medium uppercase ${severityClass(audit.severity)}`}>
                  {audit.severity}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
