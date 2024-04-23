import { formatDate } from "./date-formatter";

const fmt1 = formatDate("YYYY-MM-DD", new Date());
console.log({ fmt1 });

const fmt2 = formatDate("DD-MMM-YY", new Date("2024-01-11"));
console.log({ fmt2 });

console.log('formatDate("YYYY-MM-DD", new Date()) ->', fmt1);
console.log('formatDate("DD-MMM-YY", new Date("2024-01-11")) ->', fmt2);

const fmt3 = formatDate("DD-MMM-YYYY", new Date("2024-01-11"));
const fmt4 = formatDate("DD-MM-YY", new Date("2024-01-9"));
console.log({ fmt3 });
console.log({ fmt4 });
