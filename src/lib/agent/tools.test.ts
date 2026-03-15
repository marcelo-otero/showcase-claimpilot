import { describe, it, expect } from "vitest";
import {
  executeClassifyClaim,
  executeLookupPolicy,
  executeAssessFraud,
  executeEstimateResolution,
} from "./tools";

describe("classifyClaim", () => {
  it("classifies a simple auto collision claim", () => {
    const result = executeClassifyClaim({
      claimText:
        "I was rear-ended at a red light. Minor damage to bumper. No injuries.",
    });
    expect(result.claimType).toBe("auto");
    expect(result.severity).toBe("low");
    expect(result.coverageArea).toBe("collision");
  });

  it("classifies a high-severity home fire claim", () => {
    const result = executeClassifyClaim({
      claimText:
        "Kitchen fire destroyed cabinets and appliances. Smoke damage throughout first floor. Staying in hotel.",
    });
    expect(result.claimType).toBe("home");
    expect(result.severity).toBe("critical");
    expect(result.coverageArea).toBe("fire");
  });

  it("classifies a liability slip-and-fall claim", () => {
    const result = executeClassifyClaim({
      claimText:
        "A customer slipped on a wet floor and fell. Reports knee pain and bruised hip.",
    });
    expect(result.claimType).toBe("liability");
    expect(result.coverageArea).toBe("bodily injury");
  });

  it("uses provided claim type hint", () => {
    const result = executeClassifyClaim({
      claimText: "Something happened and things got damaged.",
      claimType: "home",
    });
    expect(result.claimType).toBe("home");
  });

  it("extracts dollar amounts as key details", () => {
    const result = executeClassifyClaim({
      claimText: "Stolen items worth approximately $8,000 from my home.",
    });
    expect(result.keyDetails.some((d) => d.includes("$8,000"))).toBe(true);
  });

  it("detects critical severity for multi-vehicle with injuries", () => {
    const result = executeClassifyClaim({
      claimText:
        "Multi-vehicle accident. Car totaled. Taken to ER with concussion. Multiple parties involved.",
    });
    expect(result.severity).toBe("critical");
  });
});

describe("lookupPolicy", () => {
  it("finds an active auto policy", () => {
    const result = executeLookupPolicy({ policyId: "POL-AUTO-1001" });
    expect(result.policyStatus).toBe("active");
    expect(result.isActive).toBe(true);
    expect(result.coverageType).toBe("auto comprehensive");
    expect(result.coveredPerils).toContain("collision");
  });

  it("finds an expired policy", () => {
    const result = executeLookupPolicy({ policyId: "POL-AUTO-1003" });
    expect(result.policyStatus).toBe("expired");
    expect(result.isActive).toBe(false);
  });

  it("returns not_found for unknown policy", () => {
    const result = executeLookupPolicy({ policyId: "POL-FAKE-9999" });
    expect(result.policyStatus).toBe("not_found");
    expect(result.isActive).toBe(false);
    expect(result.coveredPerils).toEqual([]);
  });
});

describe("assessFraud", () => {
  it("returns low risk for a straightforward claim", () => {
    const result = executeAssessFraud({
      claimText:
        "Rear-ended at a red light. Minor bumper damage. Police report filed.",
      claimType: "auto",
      severity: "low",
      policyStartDate: "2025-06-01",
      dateOfIncident: "2026-03-10",
      coverageLimit: 50000,
    });
    expect(result.riskLevel).toBe("low");
    expect(result.riskScore).toBeLessThan(25);
  });

  it("flags new policy with high claim amount", () => {
    const result = executeAssessFraud({
      claimText:
        "My brand new car worth $72,000 is totaled. Need full coverage limit paid out immediately. Car at my cousin's shop.",
      claimType: "auto",
      severity: "high",
      policyStartDate: "2026-02-28",
      dateOfIncident: "2026-03-13",
      coverageLimit: 75000,
    });
    expect(result.riskLevel).toBe("high");
    expect(result.indicators.length).toBeGreaterThan(2);
    expect(result.indicators.some((i) => i.includes("inception"))).toBe(true);
    expect(result.indicators.some((i) => i.includes("family member"))).toBe(true);
  });

  it("flags no forced entry in theft claim", () => {
    const result = executeAssessFraud({
      claimText:
        "Break-in with no signs of forced entry. Alarm not triggered. No receipts for stolen items.",
      claimType: "home",
      severity: "high",
      policyStartDate: "2025-11-01",
      dateOfIncident: "2026-03-11",
      coverageLimit: 275000,
    });
    expect(result.riskLevel).toBe("medium");
    expect(result.indicators.some((i) => i.includes("forced entry"))).toBe(
      true
    );
  });

  it("caps risk score at 100", () => {
    const result = executeAssessFraud({
      claimText:
        "Total loss. $200,000 claimed immediately. No witnesses. No receipts. At cousin's shop. No signs of forced entry.",
      claimType: "home",
      severity: "critical",
      policyStartDate: "2026-03-01",
      dateOfIncident: "2026-03-05",
      coverageLimit: 100000,
    });
    expect(result.riskScore).toBeLessThanOrEqual(100);
  });
});

describe("estimateResolution", () => {
  it("denies claim with expired policy", () => {
    const result = executeEstimateResolution({
      claimType: "auto",
      severity: "medium",
      coverageArea: "collision",
      policyStatus: "expired",
      isActive: false,
      deductible: 750,
      coverageLimit: 40000,
      fraudRiskLevel: "low",
      fraudIndicators: [],
      claimSummary: "Medium-severity auto claim.",
    });
    expect(result.resolutionPath).toBe("deny");
    expect(result.confidence).toBe("high");
    expect(result.estimatedPayout.min).toBe(0);
  });

  it("escalates high fraud risk claim", () => {
    const result = executeEstimateResolution({
      claimType: "auto",
      severity: "high",
      coverageArea: "comprehensive",
      policyStatus: "active",
      isActive: true,
      deductible: 500,
      coverageLimit: 75000,
      fraudRiskLevel: "high",
      fraudIndicators: ["new policy", "cousin's shop", "immediate payment"],
      claimSummary: "Suspicious total loss claim.",
    });
    expect(result.resolutionPath).toBe("escalate");
    expect(result.confidence).toBe("low");
    expect(result.nextSteps.some((s) => s.includes("SIU"))).toBe(true);
  });

  it("approves low-severity low-risk claim", () => {
    const result = executeEstimateResolution({
      claimType: "auto",
      severity: "low",
      coverageArea: "collision",
      policyStatus: "active",
      isActive: true,
      deductible: 500,
      coverageLimit: 50000,
      fraudRiskLevel: "low",
      fraudIndicators: [],
      claimSummary: "Simple rear-end collision.",
    });
    expect(result.resolutionPath).toBe("approve");
    expect(result.confidence).toBe("high");
    expect(result.estimatedPayout.min).toBeGreaterThan(0);
  });

  it("investigates medium fraud risk claim", () => {
    const result = executeEstimateResolution({
      claimType: "home",
      severity: "medium",
      coverageArea: "theft",
      policyStatus: "active",
      isActive: true,
      deductible: 1500,
      coverageLimit: 275000,
      fraudRiskLevel: "medium",
      fraudIndicators: ["no forced entry"],
      claimSummary: "Theft with some suspicious indicators.",
    });
    expect(result.resolutionPath).toBe("investigate");
  });

  it("denies claim with policy not found", () => {
    const result = executeEstimateResolution({
      claimType: "auto",
      severity: "low",
      coverageArea: "collision",
      policyStatus: "not_found",
      isActive: false,
      deductible: 0,
      coverageLimit: 0,
      fraudRiskLevel: "low",
      fraudIndicators: [],
      claimSummary: "Claim with unknown policy.",
    });
    expect(result.resolutionPath).toBe("deny");
  });
});
