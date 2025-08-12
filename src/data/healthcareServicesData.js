// src/data/healthcareServicesData.js
import {
  FaPhoneAlt,
  FaFileMedical,
  FaFileInvoiceDollar,
  FaWallet,
  FaClinicMedical,
  FaIdCard,
} from "react-icons/fa";

export const healthcareServices = [
  {
    id: "ar-caller",
    title: "AR Caller",
    description:
      "Efficient accounts receivable follow-up to ensure timely reimbursement from insurance providers.",
    icon: FaPhoneAlt,
    features: [
      "Insurance follow-up",
      "Claim status checks",
      "Denial management",
      "Patient follow-up for balances",
      "A/R aging report handling",
      "Daily productivity reporting",
    ],
    image:
      "https://i.pinimg.com/736x/eb/24/b9/eb24b91c97f40e4ab8c180ee9f4cab9c.jpg",
  },
  {
    id: "medical-coding",
    title: "Medical Coding",
    description:
      "Accurate medical coding services to ensure compliant billing and reduced denials.",
    icon: FaFileMedical,
    features: [
      "ICD-10, CPT, and HCPCS coding",
      "Specialty-specific coding expertise",
      "Chart audits and compliance checks",
      "Coding for inpatient and outpatient services",
      "Certified coders (CPC, CCS, etc.)",
      "Coding accuracy and productivity reports",
    ],
    image:
      "https://i.pinimg.com/736x/b6/96/ee/b696ee610d8aac5441d3d68cf64f6242.jpg",
  },
  {
    id: "medical-billing",
    title: "Medical Billing",
    description:
      "Comprehensive billing services that improve revenue cycle efficiency and reduce claim denials.",
    icon: FaFileInvoiceDollar,
    features: [
      "Charge entry and claim submission",
      "Payment posting and reconciliation",
      "Insurance and patient billing",
      "Denial management and appeals",
      "AR follow-up",
      "Monthly reports and analytics",
    ],
    image:
      "https://i.pinimg.com/1200x/8f/0b/cd/8f0bcd2b0f382cd60f64f751d4b1b239.jpg",
  },
  {
    id: "accounts-receivable",
    title: "Accounts Receivable",
    description:
      "Optimize collections and improve cash flow with our AR management services.",
    icon: FaWallet,
    features: [
      "Timely follow-up on unpaid claims",
      "Reduction in aging receivables",
      "Claim reprocessing and appeals",
      "Patient billing and collection support",
      "Detailed AR reports",
      "Denial trends analysis",
    ],
    image:
      "https://i.pinimg.com/736x/46/f5/af/46f5afaab78a7b359ad4f2cb7885fde4.jpg",
  },
  {
    id: "practice-management",
    title: "Practice Management Services",
    description:
      "Streamline your practice operations with complete management solutions.",
    icon: FaClinicMedical,
    features: [
      "Patient scheduling and registration",
      "Insurance verification and authorization",
      "Medical records management",
      "Billing and collections",
      "Reporting and analytics",
      "Compliance and documentation support",
    ],
    image:
      "https://i.pinimg.com/1200x/76/6e/bd/766ebd5336ec62afa06586a0b8b21717.jpg",
  },
  {
    id: "insurance-verification",
    title: "Insurance & Eligibility Verification",
    description:
      "Accurate insurance verification services to prevent claim denials and delays.",
    icon: FaIdCard,
    features: [
      "Verification of insurance coverage",
      "Real-time eligibility checks",
      "Pre-authorization and referrals",
      "Updating patient insurance records",
      "Coordination of benefits",
      "Verification logs and reports",
    ],
    image:
      "https://i.pinimg.com/736x/9d/a8/f7/9da8f78885641ff93edd38a6d857292a.jpg",
  },
];
