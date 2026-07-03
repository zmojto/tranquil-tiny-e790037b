const monthMap: Record<string, number> = {
  "január": 1, "januára": 1,
  "február": 2, "februára": 2,
  "marec": 3, "marca": 3,
  "apríl": 4, "apríla": 4,
  "máj": 5, "mája": 5,
  "jún": 6, "júna": 6,
  "júl": 7, "júla": 7,
  "august": 8, "augusta": 8,
  "september": 9, "septembra": 9,
  "október": 10, "októbra": 10,
  "november": 11, "novembra": 11,
  "december": 12, "decembra": 12,
};

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Parses Slovak retreat date strings such as:
 * - "15. – 22. marca 2027"                → same-month range
 * - "28. septembra – 4. októbra 2026"     → cross-month range
 * - "30. júla – 2. august 2026"           → cross-month (nominative)
 * Returns null for unparseable strings (e.g. "Júl 2027 – termín sa upresní").
 */
export function parseRetreatDates(
  dates: string
): { startDate: string; endDate: string } | null {
  const lower = dates.toLowerCase();

  // same-month: "15. – 22. marca 2027"
  let m = lower.match(
    /(\d{1,2})\.\s*[–-]\s*(\d{1,2})\.\s*([a-záäčďéíĺľňóôŕšťúýž]+)\s+(\d{4})/
  );
  if (m) {
    const mo = monthMap[m[3]];
    if (mo) {
      return {
        startDate: `${m[4]}-${pad(mo)}-${pad(+m[1])}`,
        endDate: `${m[4]}-${pad(mo)}-${pad(+m[2])}`,
      };
    }
  }

  // cross-month: "28. septembra – 4. októbra 2026"
  m = lower.match(
    /(\d{1,2})\.\s*([a-záäčďéíĺľňóôŕšťúýž]+)\s*[–-]\s*(\d{1,2})\.\s*([a-záäčďéíĺľňóôŕšťúýž]+)\s+(\d{4})/
  );
  if (m) {
    const mo1 = monthMap[m[2]];
    const mo2 = monthMap[m[4]];
    if (mo1 && mo2) {
      const year = +m[5];
      const startYear = mo1 > mo2 ? year - 1 : year;
      return {
        startDate: `${startYear}-${pad(mo1)}-${pad(+m[1])}`,
        endDate: `${year}-${pad(mo2)}-${pad(+m[3])}`,
      };
    }
  }

  return null;
}
