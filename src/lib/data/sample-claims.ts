export interface SampleClaim {
  id: string;
  claimantName: string;
  policyId: string;
  claimType: "auto" | "home" | "liability";
  dateOfIncident: string;
  description: string;
  expectedSeverity: "low" | "medium" | "high" | "critical";
}

export const sampleClaims: SampleClaim[] = [
  // --- Auto Claims ---
  {
    id: "CLM-001",
    claimantName: "James Mitchell",
    policyId: "POL-AUTO-1001",
    claimType: "auto",
    dateOfIncident: "2026-03-10",
    description:
      "I was rear-ended at a red light on Main Street by another driver who was not paying attention. Minor damage to my rear bumper and taillight assembly. No injuries. The other driver admitted fault and we exchanged insurance information. Police report was filed, case #2026-0310-445.",
    expectedSeverity: "low",
  },
  {
    id: "CLM-002",
    claimantName: "Sarah Chen",
    policyId: "POL-AUTO-1002",
    claimType: "auto",
    dateOfIncident: "2026-03-08",
    description:
      "My car was broken into overnight while parked in my apartment complex lot. The driver side window was smashed and my laptop bag, GPS unit, and about $200 in cash were stolen. I filed a police report the next morning, case #2026-0308-112. The window will need replacement and there are scratches on the door panel from the break-in.",
    expectedSeverity: "medium",
  },
  {
    id: "CLM-003",
    claimantName: "James Mitchell",
    policyId: "POL-AUTO-1001",
    claimType: "auto",
    dateOfIncident: "2026-02-15",
    description:
      "Multi-vehicle accident on I-95 during heavy rain. A semi-truck jackknifed ahead of me and I could not stop in time. I struck the guardrail trying to avoid the truck and was then hit by another vehicle from behind. My car is likely totaled. I was taken to the ER with neck pain and a possible concussion. Two other vehicles involved. Highway patrol responded, incident #HP-2026-0215-89.",
    expectedSeverity: "critical",
  },
  {
    id: "CLM-004",
    claimantName: "Sarah Chen",
    policyId: "POL-AUTO-1002",
    claimType: "auto",
    dateOfIncident: "2026-03-12",
    description:
      "Hail storm damaged my vehicle while it was parked at work. Multiple dents on the hood, roof, and trunk. One small crack in the windshield. No other vehicles involved. Several coworkers had similar damage.",
    expectedSeverity: "medium",
  },
  // --- Home Claims ---
  {
    id: "CLM-005",
    claimantName: "Robert Thompson",
    policyId: "POL-HOME-2001",
    claimType: "home",
    dateOfIncident: "2026-03-05",
    description:
      "Came home from vacation to find a burst pipe under the kitchen sink. Water had been running for approximately 3 days. The kitchen floor (hardwood) is warped and buckled. Water damage extends into the adjacent dining room. Cabinets under the sink are destroyed. Professional water extraction company has been called and documented the damage. Mold remediation may be needed.",
    expectedSeverity: "high",
  },
  {
    id: "CLM-006",
    claimantName: "Maria Garcia",
    policyId: "POL-HOME-2002",
    claimType: "home",
    dateOfIncident: "2026-03-01",
    description:
      "During last week's storm, a large oak tree branch fell on the roof of my garage, puncturing through the roofing material. Rain has gotten inside and damaged some stored items. The branch also took down part of the gutter on that side of the house. No structural damage to the main house.",
    expectedSeverity: "medium",
  },
  {
    id: "CLM-007",
    claimantName: "Robert Thompson",
    policyId: "POL-HOME-2001",
    claimType: "home",
    dateOfIncident: "2026-02-20",
    description:
      "Someone broke into our home through the back door while we were at work. They took a 65-inch TV, my wife's jewelry box with several valuable pieces, a laptop, and a tablet. Total estimated value of stolen items is around $8,000. The back door frame is damaged. We have a Ring doorbell that captured footage of two individuals. Police report filed, case #2026-0220-334.",
    expectedSeverity: "medium",
  },
  {
    id: "CLM-008",
    claimantName: "Linda Thompson",
    policyId: "POL-HOME-2001",
    claimType: "home",
    dateOfIncident: "2026-01-15",
    description:
      "Kitchen fire started when a grease pan was left unattended on the stove. Fire was contained to the kitchen but there is significant smoke damage throughout the first floor. Kitchen cabinets, countertops, appliances, and flooring need full replacement. Smoke damage to living room furniture and curtains. Fire department responded and documented. We are staying in a hotel while repairs are assessed.",
    expectedSeverity: "critical",
  },
  // --- Liability Claims ---
  {
    id: "CLM-009",
    claimantName: "Patricia Johnson",
    policyId: "POL-LIAB-3001",
    claimType: "liability",
    dateOfIncident: "2026-03-02",
    description:
      "A customer slipped and fell on a wet floor in the main corridor of our shopping center near the food court. The area had been mopped but the wet floor sign had blown over. The customer reports knee pain and a bruised hip. She was assisted by security and declined an ambulance but says she will be seeing her doctor. Incident report filed by security team. CCTV footage retained.",
    expectedSeverity: "medium",
  },
  {
    id: "CLM-010",
    claimantName: "Michael Torres",
    policyId: "POL-LIAB-3001",
    claimType: "liability",
    dateOfIncident: "2026-02-28",
    description:
      "A piece of ceiling tile fell in one of the tenant spaces (Suite 204) and struck a customer on the head. The customer has a visible laceration and was taken to urgent care by a family member. Building maintenance has been called to inspect the ceiling. The tile appeared to have water damage from a slow roof leak. Tenant is requesting compensation for lost business during the closure of their store for inspection.",
    expectedSeverity: "high",
  },
  // --- Fraud indicator claims ---
  {
    id: "CLM-011",
    claimantName: "Karen Williams",
    policyId: "POL-AUTO-1004",
    claimType: "auto",
    dateOfIncident: "2026-03-13",
    description:
      "My brand new car was in a terrible accident and is completely totaled. I was driving on a back road with no witnesses and hit a deer, then the car flipped into a ditch. The car is worth about $72,000 and I just got my insurance policy two weeks ago. I need the full coverage limit paid out immediately. The car has been towed to my cousin's auto shop for assessment.",
    expectedSeverity: "high",
  },
  {
    id: "CLM-012",
    claimantName: "Maria Garcia",
    policyId: "POL-HOME-2002",
    claimType: "home",
    dateOfIncident: "2026-03-11",
    description:
      "I had a break-in and my entire collection of designer handbags was stolen. There were 15 Louis Vuitton, Chanel, and Hermes bags worth approximately $250,000 total. Also stolen were cash in a home safe ($15,000) and various electronics. The burglar somehow got in without triggering my alarm system and there are no signs of forced entry. I was away for the weekend and discovered it when I returned. I don't have receipts for most of the bags as they were purchased over many years.",
    expectedSeverity: "high",
  },
  {
    id: "CLM-013",
    claimantName: "James Mitchell",
    policyId: "POL-AUTO-1001",
    claimType: "auto",
    dateOfIncident: "2026-03-14",
    description:
      "My car caught fire while parked in my garage last night. The fire department put it out but the car is a total loss and there is also some damage to the garage wall. I'm not sure what caused the fire. I had recently been having some electrical issues with the car. I need to claim the full value of the vehicle plus the garage repairs. The car was worth at least $45,000.",
    expectedSeverity: "high",
  },
  // --- Coverage gap / ambiguous claims ---
  {
    id: "CLM-014",
    claimantName: "David Park",
    policyId: "POL-AUTO-1003",
    claimType: "auto",
    dateOfIncident: "2026-03-09",
    description:
      "Someone backed into my parked car in a grocery store parking lot and drove away. There is significant damage to the front fender, hood, and headlight on the passenger side. A security camera at the store may have footage. No injuries since no one was in my car at the time.",
    expectedSeverity: "medium",
  },
  {
    id: "CLM-015",
    claimantName: "Sarah Chen",
    policyId: "POL-AUTO-1002",
    claimType: "auto",
    dateOfIncident: "2026-03-06",
    description:
      "A tree fell on my car during the windstorm last Thursday. The roof is caved in and all windows on the driver side are shattered. The car may be totaled. I had it towed to a body shop. No one was in the car at the time since it was parked in my driveway.",
    expectedSeverity: "high",
  },
  // --- Ambiguous / escalation claim ---
  {
    id: "CLM-016",
    claimantName: "Robert Thompson",
    policyId: "POL-HOME-2001",
    claimType: "home",
    dateOfIncident: "2026-02-01",
    description:
      "We've noticed cracks forming in our foundation walls over the past several months and the basement floor has started to buckle in one area. A structural engineer we hired says it could be related to the drought last summer causing soil shrinkage, or it could be a long-term settling issue. We're not sure if this is a covered event or normal wear and tear. The engineer estimates repairs at $45,000 to $65,000. We want to understand if any portion of this is covered under our homeowners policy.",
    expectedSeverity: "high",
  },
];
