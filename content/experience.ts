/** Roles and schooling, as the CV states them. Dates are the CV's. */
export interface Role {
  title: string;
  org: string;
  orgUrl?: string;
  place: string;
  dates: string;
}

export const roles: readonly Role[] = [
  {
    title: "Founder · Product & Engineering",
    org: "Neetter",
    orgUrl: "https://neetter.com",
    place: "Boston, MA",
    dates: "May 2026 – Present",
  },
  {
    title: "Teaching & Research Assistant",
    org: "Northeastern University, D’Amore-McKim School of Business",
    place: "Boston, MA",
    dates: "Jan 2026 – Jul 2026",
  },
  {
    title: "English Instructor",
    org: "Gaba Corporation",
    place: "Tokyo, Japan",
    dates: "Jan 2025 – Aug 2025",
  },
];

export interface School {
  degree: string;
  school: string;
  unit: string;
  place: string;
  dates: string;
  gpa: string;
}

export const schools: readonly School[] = [
  {
    degree: "Master of Science in Information Systems",
    school: "Northeastern University",
    unit: "College of Engineering",
    place: "Boston, MA",
    dates: "Jan 2025 – Dec 2026",
    gpa: "3.84",
  },
  {
    degree: "Bachelor of Fine Arts in New Media, Concentration in Computational Media",
    school: "Toronto Metropolitan University",
    unit: "RTA School of Media",
    place: "Toronto, Canada",
    dates: "Sep 2017 – Jun 2022",
    gpa: "3.4",
  },
];
