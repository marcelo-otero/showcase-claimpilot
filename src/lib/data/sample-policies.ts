export interface Policy {
  policyId: string;
  holderName: string;
  policyStatus: "active" | "expired" | "cancelled";
  coverageType: string;
  deductible: number;
  coverageLimit: number;
  startDate: string;
  endDate: string;
  coveredPerils: string[];
}

export const samplePolicies: Policy[] = [
  {
    policyId: "POL-AUTO-1001",
    holderName: "James Mitchell",
    policyStatus: "active",
    coverageType: "auto comprehensive",
    deductible: 500,
    coverageLimit: 50000,
    startDate: "2025-06-01",
    endDate: "2026-06-01",
    coveredPerils: [
      "collision",
      "comprehensive",
      "liability",
      "uninsured motorist",
      "medical payments",
    ],
  },
  {
    policyId: "POL-AUTO-1002",
    holderName: "Sarah Chen",
    policyStatus: "active",
    coverageType: "auto liability only",
    deductible: 1000,
    coverageLimit: 25000,
    startDate: "2025-09-15",
    endDate: "2026-09-15",
    coveredPerils: ["liability", "uninsured motorist"],
  },
  {
    policyId: "POL-HOME-2001",
    holderName: "Robert and Linda Thompson",
    policyStatus: "active",
    coverageType: "homeowners HO-3",
    deductible: 2500,
    coverageLimit: 350000,
    startDate: "2025-03-01",
    endDate: "2026-03-01",
    coveredPerils: [
      "fire",
      "lightning",
      "windstorm",
      "hail",
      "theft",
      "vandalism",
      "water damage (sudden)",
      "falling objects",
      "weight of ice/snow",
    ],
  },
  {
    policyId: "POL-HOME-2002",
    holderName: "Maria Garcia",
    policyStatus: "active",
    coverageType: "homeowners HO-3",
    deductible: 1500,
    coverageLimit: 275000,
    startDate: "2025-11-01",
    endDate: "2026-11-01",
    coveredPerils: [
      "fire",
      "lightning",
      "windstorm",
      "hail",
      "theft",
      "vandalism",
      "water damage (sudden)",
      "falling objects",
    ],
  },
  {
    policyId: "POL-AUTO-1003",
    holderName: "David Park",
    policyStatus: "expired",
    coverageType: "auto comprehensive",
    deductible: 750,
    coverageLimit: 40000,
    startDate: "2024-01-15",
    endDate: "2025-01-15",
    coveredPerils: [
      "collision",
      "comprehensive",
      "liability",
      "uninsured motorist",
    ],
  },
  {
    policyId: "POL-LIAB-3001",
    holderName: "Green Valley Shopping Center LLC",
    policyStatus: "active",
    coverageType: "commercial general liability",
    deductible: 5000,
    coverageLimit: 1000000,
    startDate: "2025-07-01",
    endDate: "2026-07-01",
    coveredPerils: [
      "bodily injury",
      "property damage",
      "personal injury",
      "advertising injury",
      "products-completed operations",
    ],
  },
  {
    policyId: "POL-AUTO-1004",
    holderName: "Karen Williams",
    policyStatus: "active",
    coverageType: "auto comprehensive",
    deductible: 500,
    coverageLimit: 75000,
    startDate: "2026-02-28",
    endDate: "2027-02-28",
    coveredPerils: [
      "collision",
      "comprehensive",
      "liability",
      "uninsured motorist",
      "medical payments",
      "rental reimbursement",
    ],
  },
];
