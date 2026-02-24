export interface IndividualAPI {
  slug: string;
  seoTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;
  parentCategory: string;
  parentSlug: string;
  longContent: string;
  features: string[];
  useCases: string[];
  faqs: { q: string; a: string }[];
}

export const individualApis: Record<string, IndividualAPI> = {
  "aadhaar-verification": {
    slug: "aadhaar-verification",
    seoTitle: "Aadhaar Verification API — Instant UIDAI Validation | VeriSekure",
    metaDescription: "Verify Aadhaar numbers in real-time against UIDAI databases. Instant demographic validation, e-KYC, and Aadhaar-based authentication for compliant onboarding.",
    headline: "Aadhaar Verification API",
    intro: "Validate Aadhaar card numbers instantly against UIDAI-compliant channels. Retrieve demographic data, confirm identity, and complete e-KYC in seconds — fully compliant with RBI and IRDAI mandates.",
    parentCategory: "Identity & KYC Verification",
    parentSlug: "identity-kyc",
    longContent: `Aadhaar verification is the cornerstone of digital identity validation in India. With over 1.3 billion Aadhaar numbers issued, it serves as the most widely accepted proof of identity across government and private sector applications. VeriSekure's Aadhaar Verification API enables businesses to validate Aadhaar numbers in real-time against UIDAI-approved channels, retrieving essential demographic data including the holder's name, date of birth, gender, and address.

For fintech companies, banks, NBFCs, and insurance firms, Aadhaar verification is not optional — it's a regulatory mandate. RBI's KYC Master Direction requires Aadhaar-based e-KYC for account opening, loan disbursement, and high-value transactions. IRDAI mandates Aadhaar verification for policy issuance and claims processing. Non-compliance can result in hefty penalties, license suspension, and reputational damage.

VeriSekure's API supports multiple verification modes. Aadhaar XML-based verification allows offline verification using digitally signed Aadhaar XML files downloaded by the user, ensuring privacy-first verification without biometric data. Aadhaar OTP-based e-KYC sends an OTP to the Aadhaar-linked mobile number, and upon successful verification, returns the individual's demographic details along with a photograph. This is the gold standard for remote digital onboarding.

Our Aadhaar Verification API also supports Aadhaar-to-PAN linking status checks, enabling businesses to verify whether a customer's Aadhaar and PAN are properly linked as mandated by the Income Tax Department. This is crucial for financial institutions that need to ensure tax compliance during onboarding.

The API is designed for sub-second response times with 99.9% uptime. It handles both individual and bulk verification requests, making it suitable for high-volume onboarding campaigns, re-verification drives, and periodic KYC updates. All data transmission is end-to-end encrypted, and we maintain strict data minimization practices — only the data necessary for verification is processed and returned.

Integration is straightforward with our RESTful API, detailed documentation, and SDKs for popular programming languages. Most businesses go live within 2-3 days of API access.`,
    features: [
      "Real-time Aadhaar number validation against UIDAI databases",
      "Demographic data retrieval (name, DOB, gender, address)",
      "OTP-based e-KYC for remote onboarding",
      "XML-based offline Aadhaar verification",
      "Aadhaar-PAN linking status check",
      "Bulk verification for high-volume processing",
      "Sub-second response times with 99.9% uptime",
      "End-to-end encrypted data transmission",
    ],
    useCases: [
      "Bank account opening with e-KYC",
      "Loan application identity verification",
      "Insurance policy issuance KYC",
      "Telecom SIM activation",
      "Government subsidy disbursement",
      "E-commerce seller verification",
      "Mutual fund and DEMAT account opening",
      "Digital wallet and UPI registration",
    ],
    faqs: [
      { q: "Is VeriSekure's Aadhaar Verification API UIDAI compliant?", a: "Yes. Our API uses UIDAI-approved channels and complies with all UIDAI regulations, AUA/KUA guidelines, and RBI KYC mandates for Aadhaar-based verification." },
      { q: "What data does the Aadhaar Verification API return?", a: "Depending on the verification mode, it returns the Aadhaar holder's name, date of birth, gender, address, and photograph (for OTP-based e-KYC). Biometric data is never processed or stored." },
      { q: "Can I verify Aadhaar numbers in bulk?", a: "Yes. Our API supports batch processing for bulk Aadhaar verification, suitable for re-KYC drives, periodic updates, and high-volume onboarding campaigns." },
      { q: "How fast are Aadhaar verification results?", a: "Most Aadhaar verifications complete in under 2 seconds. XML-based offline verification is near-instant as it validates the digital signature locally." },
      { q: "Does VeriSekure store Aadhaar data?", a: "No. We follow strict data minimization. Aadhaar data is processed in real-time and not stored on our servers, in compliance with UIDAI data handling guidelines." },
    ],
  },
  "pan-verification": {
    slug: "pan-verification",
    seoTitle: "PAN Verification API — Real-Time PAN Card Validation | VeriSekure",
    metaDescription: "Verify PAN card details instantly — validate PAN number, name, DOB, and active status in real-time. Essential for tax compliance and financial onboarding.",
    headline: "PAN Verification API",
    intro: "Instantly verify PAN card details including name, date of birth, and active status. Essential for financial services, tax compliance, and customer onboarding across all regulated industries.",
    parentCategory: "Identity & KYC Verification",
    parentSlug: "identity-kyc",
    longContent: `PAN (Permanent Account Number) verification is a fundamental requirement for financial transactions in India. Every individual and entity engaged in financial activities — from opening a bank account to filing tax returns — needs a valid PAN. VeriSekure's PAN Verification API enables businesses to instantly verify PAN card details against Income Tax Department records, confirming the PAN holder's name, date of birth, PAN status, and Aadhaar linking status.

For lending institutions, the PAN verification is the first checkpoint in the loan application process. It confirms the borrower's identity, validates their tax filing status, and checks whether the PAN is active, deactivated, or flagged. For merchants and e-commerce platforms, PAN verification is mandatory for sellers exceeding specified turnover thresholds under GST regulations.

VeriSekure's PAN Verification API goes beyond simple number validation. Our API performs name matching against the PAN database, helping businesses detect identity mismatches and potential fraud. The API returns the registered name, father's name (where available), date of birth or incorporation, PAN category (individual, company, HUF, etc.), and current PAN status.

PAN-to-Aadhaar linking verification is another critical feature. Since the Income Tax Department mandates Aadhaar-PAN linking for all PAN holders, businesses can use our API to verify whether a customer's PAN and Aadhaar are properly linked. Non-linked PANs may become inoperative, affecting the customer's ability to conduct financial transactions.

The API supports real-time individual verification and bulk batch processing. Financial institutions processing thousands of loan applications, insurance companies verifying policyholders, and marketplaces onboarding sellers can all leverage our high-throughput API infrastructure.

Our PAN Verification API delivers results in under 1 second with 99.9% uptime. Integration is simple with REST API endpoints, comprehensive documentation, and dedicated developer support. Most businesses complete integration within 1-2 days.`,
    features: [
      "Real-time PAN number validation against IT Department records",
      "Name, DOB, and category verification",
      "PAN active/deactivated/flagged status check",
      "Aadhaar-PAN linking status verification",
      "Name matching with fuzzy logic for fraud detection",
      "Bulk batch processing for high-volume use cases",
      "PAN category detection (Individual, Company, HUF, etc.)",
      "Sub-second response with 99.9% uptime",
    ],
    useCases: [
      "Loan application identity verification",
      "Bank account KYC compliance",
      "GST registration cross-verification",
      "Insurance policyholder verification",
      "Mutual fund investor onboarding",
      "E-commerce high-value seller verification",
      "Tax return filing validation",
      "Corporate vendor due diligence",
    ],
    faqs: [
      { q: "What details does PAN Verification return?", a: "The API returns the PAN holder's full name, date of birth or incorporation, PAN category (individual, company, HUF), PAN status (active/deactivated), and Aadhaar-PAN linking status." },
      { q: "Can PAN verification detect inactive PANs?", a: "Yes. The API checks PAN status and will flag PANs that have been deactivated, surrendered, or marked inoperative by the Income Tax Department." },
      { q: "Is PAN-Aadhaar linking status included?", a: "Yes. Our API verifies whether the PAN is linked to Aadhaar as mandated, helping you assess if the PAN may become inoperative due to non-linking." },
      { q: "How fast is PAN verification?", a: "PAN verification results are returned in under 1 second, enabling instant onboarding and real-time decision-making in your workflows." },
      { q: "Can I verify PANs in bulk?", a: "Yes. Our batch processing API allows you to verify thousands of PAN numbers in a single request, ideal for portfolio re-verification and compliance audits." },
    ],
  },
  "gst-verification": {
    slug: "gst-verification",
    seoTitle: "GST Verification API — Validate GSTIN Instantly | VeriSekure",
    metaDescription: "Verify GST registration, filing status, and business details in real-time. Detect fake GST numbers and ensure vendor compliance with VeriSekure's GST API.",
    headline: "GST Verification API",
    intro: "Instantly validate GSTIN authenticity, check filing compliance, and retrieve complete business registration details. Prevent GST fraud in vendor onboarding and B2B transactions.",
    parentCategory: "Business / KYB Verification",
    parentSlug: "business-kyb",
    longContent: `GST (Goods and Services Tax) verification is essential for every business engaged in B2B transactions in India. With over 14 million GST registrations across the country, ensuring that your vendors, suppliers, and business partners hold valid, active GST registrations is critical for tax compliance, input tax credit (ITC) claims, and fraud prevention.

VeriSekure's GST Verification API provides real-time validation of GSTIN (GST Identification Number) against the GSTN (GST Network) database. The API retrieves comprehensive business details including the legal name, trade name, registration date, registration type, constitution of business, principal place of business, and current compliance status.

GST fraud is a growing problem in India. Fake GST registrations are used to generate fraudulent invoices, claim bogus ITC, and create shell companies for tax evasion. Businesses that fail to verify their vendors' GST status risk losing ITC claims, facing tax penalties, and becoming unwitting participants in circular trading schemes. VeriSekure's API helps businesses identify cancelled, suspended, or fraudulent GST registrations before entering into transactions.

Our API provides detailed filing compliance data, showing whether the business has filed its GST returns on time. Regular filing indicates an active, compliant business, while irregular or non-filing patterns may signal potential risk. This is particularly valuable for lending institutions assessing business loan applications and marketplaces evaluating seller credibility.

The GST Verification API also supports GST return data retrieval, providing insights into the business's turnover, tax liability, and ITC claims. This data is invaluable for financial underwriting, credit assessment, and business intelligence applications.

For large enterprises and marketplaces managing thousands of vendor relationships, our API supports bulk GST verification with batch processing capabilities. Periodic re-verification ensures ongoing compliance and helps maintain a clean vendor ecosystem.

VeriSekure's GST API delivers results in real-time with high accuracy. Integration is seamless through REST API endpoints with comprehensive documentation and developer support.`,
    features: [
      "Real-time GSTIN validation against GSTN database",
      "Business legal name and trade name verification",
      "Registration type and constitution details",
      "Filing compliance status and history",
      "Cancelled/suspended GST detection",
      "GST return data and turnover insights",
      "Principal and additional place of business details",
      "Bulk batch verification for vendor management",
    ],
    useCases: [
      "Vendor and supplier onboarding verification",
      "Invoice validation for ITC claims",
      "Business loan underwriting assessment",
      "Marketplace seller GST compliance",
      "Supply chain due diligence",
      "Procurement fraud prevention",
      "Tax audit and compliance verification",
      "Enterprise vendor ecosystem management",
    ],
    faqs: [
      { q: "What details does GST Verification return?", a: "The API returns the legal name, trade name, registration date, type, constitution of business, principal place of business, filing status, and current compliance standing of the GSTIN holder." },
      { q: "Can it detect cancelled or fake GST registrations?", a: "Yes. The API checks the current status of the GSTIN and flags registrations that have been cancelled, suspended, or are under investigation by tax authorities." },
      { q: "Does it show GST filing compliance history?", a: "Yes. The API provides filing compliance data showing return filing patterns, which helps assess the business's operational health and regulatory compliance." },
      { q: "Can I verify GST numbers in bulk?", a: "Yes. Our batch processing API supports bulk GSTIN verification for managing large vendor ecosystems and periodic compliance audits." },
      { q: "How current is the GST data?", a: "We fetch data in real-time from the GST Network, ensuring you always get the latest registration status, filing history, and compliance information." },
    ],
  },
  "voter-id-verification": {
    slug: "voter-id-verification",
    seoTitle: "Voter ID Verification API — EPIC Card Validation | VeriSekure",
    metaDescription: "Verify Voter ID (EPIC) card details instantly. Validate name, age, address, and constituency from Election Commission records with VeriSekure API.",
    headline: "Voter ID Verification API",
    intro: "Instantly authenticate Voter ID (EPIC) card details against Election Commission of India records for identity and address verification in onboarding and KYC workflows.",
    parentCategory: "Identity & KYC Verification",
    parentSlug: "identity-kyc",
    longContent: `Voter ID verification provides a reliable secondary identity proof for KYC and onboarding processes across India. The Voter ID card, also known as the EPIC (Electors Photo Identity Card), is issued by the Election Commission of India and contains key demographic information including name, father's name, date of birth, gender, address, and photograph. VeriSekure's Voter ID Verification API enables real-time validation of EPIC numbers against Election Commission records.

Unlike Aadhaar and PAN, which are primarily financial identity documents, the Voter ID serves as a strong proof of identity and address — making it particularly valuable for address verification, residential confirmation, and demographic validation. Many customers who may not have an Aadhaar card or prefer not to use it can provide their Voter ID as an alternative KYC document.

VeriSekure's API validates the EPIC number and returns the cardholder's full name, father's or husband's name, age or date of birth, gender, address, polling station, constituency, and state. This comprehensive data enables businesses to verify both identity and address in a single API call, reducing onboarding friction and improving conversion rates.

The Voter ID Verification API is widely used in BFSI (Banking, Financial Services, and Insurance) for KYC compliance, in HR for background verification, in real estate for tenant screening, and in government applications for beneficiary validation. Insurance companies use it as an alternative identity proof during policy issuance and claims processing.

For businesses operating across rural India, Voter ID verification is especially important since the EPIC card has higher penetration in rural areas compared to other identity documents. This makes it an essential verification tool for microfinance institutions, rural banking correspondents, and government welfare programs.

Our API delivers results in under 2 seconds with high match accuracy. It supports both individual and bulk verification, handles name variations with fuzzy matching, and provides structured JSON responses for seamless integration into existing workflows.`,
    features: [
      "Real-time EPIC number validation",
      "Full demographic data retrieval",
      "Address and constituency verification",
      "Fuzzy name matching for variations",
      "Photo availability confirmation",
      "Bulk verification support",
      "Fast response under 2 seconds",
      "Structured JSON response format",
    ],
    useCases: [
      "Alternative KYC identity proof",
      "Address verification for lending",
      "Tenant screening in real estate",
      "Rural customer onboarding",
      "Insurance policy KYC",
      "Government beneficiary validation",
      "HR background verification",
      "Microfinance borrower identification",
    ],
    faqs: [
      { q: "What data does Voter ID verification return?", a: "It returns the cardholder's name, father's/husband's name, age/DOB, gender, address, polling station, constituency, and state from Election Commission records." },
      { q: "Is Voter ID accepted as KYC proof?", a: "Yes. Voter ID is listed as a valid Officially Valid Document (OVD) for KYC by RBI, IRDAI, and SEBI, making it accepted across banking, insurance, and securities sectors." },
      { q: "Can it be used for address verification?", a: "Yes. The Voter ID contains the registered address, making it effective for residential address confirmation during onboarding and background verification." },
      { q: "How accurate is name matching?", a: "Our API uses fuzzy matching algorithms to handle common name variations, transliteration differences, and abbreviations with high accuracy." },
      { q: "Does it work for rural areas?", a: "Yes. Voter ID has high penetration in rural India, making our API especially valuable for microfinance, rural banking, and government program verification." },
    ],
  },
  "passport-verification": {
    slug: "passport-verification",
    seoTitle: "Passport Verification API — Indian Passport Validation | VeriSekure",
    metaDescription: "Verify Indian passport details in real-time — validate passport number, name, expiry, and status. Essential for travel, immigration, and premium KYC.",
    headline: "Passport Verification API",
    intro: "Validate Indian passport details instantly — verify passport number, holder name, date of birth, and expiry status for premium KYC, travel, and immigration compliance.",
    parentCategory: "Identity & KYC Verification",
    parentSlug: "identity-kyc",
    longContent: `Passport verification is a premium identity check used in high-value customer onboarding, international banking, travel services, and immigration compliance. The Indian passport, issued by the Ministry of External Affairs, is one of the most trusted identity documents globally and contains critical information including the holder's name, date of birth, place of birth, nationality, passport number, issue date, and expiry date.

VeriSekure's Passport Verification API enables real-time validation of Indian passport details. The API verifies the passport number against official records, confirming its authenticity and current status. It returns the holder's full name, date of birth, passport type, issue date, expiry date, and file number — enabling businesses to verify identity with high confidence.

For banks and financial institutions, passport verification is often required for NRI (Non-Resident Indian) account opening, foreign exchange transactions, and international wire transfers. FEMA and RBI regulations mandate passport verification for certain categories of financial transactions involving non-resident Indians and foreign nationals.

Travel and hospitality companies use passport verification for booking validation, visa assistance services, and compliance with government reporting requirements. Hotels, airlines, and travel aggregators can automate guest verification using our API, reducing manual checking while meeting Ministry of Tourism and Bureau of Immigration compliance requirements.

Insurance companies use passport verification for international travel insurance policies, where verifying the passport's validity period is essential for policy issuance. Expired or soon-to-expire passports may affect coverage eligibility and claims processing.

Our Passport Verification API also supports passport-to-PAN and passport-to-Aadhaar cross-verification, enabling multi-document identity validation for enhanced due diligence. This is particularly valuable for high-value transactions, premium banking services, and enhanced KYC requirements.

The API delivers results in real-time with enterprise-grade reliability. Integration is straightforward through our RESTful API with comprehensive documentation.`,
    features: [
      "Real-time passport number validation",
      "Holder name and DOB verification",
      "Passport type and status confirmation",
      "Issue and expiry date retrieval",
      "File number verification",
      "Cross-verification with PAN and Aadhaar",
      "Support for all Indian passport types",
      "Enterprise-grade API reliability",
    ],
    useCases: [
      "NRI bank account opening",
      "Foreign exchange transaction compliance",
      "Travel booking verification",
      "International travel insurance",
      "Hotel and airline guest verification",
      "Visa application processing",
      "Premium customer onboarding",
      "Immigration compliance reporting",
    ],
    faqs: [
      { q: "What details does Passport Verification return?", a: "The API returns passport number, holder's name, date of birth, passport type, issue date, expiry date, file number, and current passport status." },
      { q: "Can it verify NRI passports?", a: "Yes. Our API verifies all Indian passports regardless of the holder's current residence, making it suitable for NRI customer onboarding and KYC." },
      { q: "Is passport verification mandatory for banking?", a: "For certain transactions involving NRIs, foreign exchange, and international transfers, passport verification is mandated by RBI and FEMA regulations." },
      { q: "How fast is passport verification?", a: "Results are typically returned in 2-3 seconds, enabling real-time verification during customer onboarding flows." },
      { q: "Can I cross-verify passport with other documents?", a: "Yes. Our platform supports cross-verification of passport details with PAN and Aadhaar for enhanced due diligence and multi-document KYC." },
    ],
  },
  "driving-license-verification": {
    slug: "driving-license-verification",
    seoTitle: "Driving License Verification API — DL Validation India | VeriSekure",
    metaDescription: "Verify driving license details in real-time — validate DL number, holder name, vehicle class, validity, and restrictions from transport authority records.",
    headline: "Driving License Verification API",
    intro: "Instantly verify driving license details including DL number, holder name, vehicle class, validity period, and restrictions from Regional Transport Authority databases across India.",
    parentCategory: "Identity & KYC Verification",
    parentSlug: "identity-kyc",
    longContent: `Driving License verification is essential for ride-hailing platforms, logistics companies, fleet operators, and any business that involves driver onboarding. VeriSekure's DL Verification API validates driving license numbers against Regional Transport Authority (RTA) databases across all Indian states and union territories, providing comprehensive license details in real-time.

The API returns the license holder's name, date of birth, address, license number, issue date, expiry date, vehicle class (LMV, HMV, MCWG, etc.), restrictions, and current license status. This information is critical for assessing whether a driver is authorized to operate specific vehicle types and whether their license is currently valid.

For ride-hailing platforms like Uber and Ola, DL verification is a non-negotiable step in driver onboarding. Platforms must ensure that every driver has a valid license for the vehicle category they intend to operate. Our API automates this check, reducing manual verification workload and speeding up the onboarding process from days to minutes.

Logistics and delivery companies use DL verification to validate drivers and delivery partners before assigning them routes and vehicles. Fleet management companies rely on our API for periodic license re-verification, ensuring ongoing compliance and identifying drivers whose licenses are approaching expiry or have been suspended.

Beyond mobility, DL verification is widely used as an identity proof for KYC purposes. The driving license serves as an Officially Valid Document (OVD) recognized by RBI, making it accepted for bank account opening, loan applications, and insurance KYC. Our API extracts and verifies the demographic data from the license for identity confirmation.

The API handles state-specific DL formats and numbering systems across India, providing a unified interface for nationwide verification. It supports both individual and bulk verification requests with sub-second response times and 99.9% uptime.`,
    features: [
      "Nationwide DL verification across all states",
      "Vehicle class and authorization details",
      "License validity and expiry monitoring",
      "Holder identity and address verification",
      "Restriction and endorsement details",
      "License suspension/revocation detection",
      "Bulk batch processing support",
      "Unified API for all state formats",
    ],
    useCases: [
      "Ride-hailing driver onboarding",
      "Delivery partner verification",
      "Fleet driver compliance management",
      "Vehicle rental customer verification",
      "KYC identity proof validation",
      "Insurance motor policy issuance",
      "Logistics company hiring",
      "Transport company regulatory compliance",
    ],
    faqs: [
      { q: "Does the API cover all Indian states?", a: "Yes. Our DL Verification API connects to transport authority databases across all Indian states and union territories for comprehensive nationwide coverage." },
      { q: "Can it check vehicle class authorization?", a: "Yes. The API returns detailed vehicle class information (LMV, HMV, MCWG, etc.) confirming which vehicle types the license holder is authorized to drive." },
      { q: "Does it detect suspended or revoked licenses?", a: "Yes. The API checks the current license status and flags licenses that have been suspended, revoked, or are under disqualification." },
      { q: "How fast is DL verification?", a: "Most DL verifications complete in under 2 seconds, enabling instant driver onboarding and real-time compliance checks." },
      { q: "Can I set up automatic expiry alerts?", a: "Yes. With periodic re-verification through our API, you can identify licenses approaching expiry and take proactive action." },
    ],
  },
  "bank-account-verification": {
    slug: "bank-account-verification",
    seoTitle: "Bank Account Verification API — Penny Drop & UPI | VeriSekure",
    metaDescription: "Verify bank account ownership and status instantly via penny drop, reverse penny drop, and UPI methods. Prevent misdirected payments and disbursement fraud.",
    headline: "Bank Account Verification API",
    intro: "Validate bank account ownership and active status instantly using penny drop, reverse penny drop, and UPI verification methods. Prevent payment fraud and ensure accurate disbursements.",
    parentCategory: "Financial & Banking Verification",
    parentSlug: "financial-banking",
    longContent: `Bank account verification is a critical step in lending, payroll processing, insurance claims, and any workflow that involves fund disbursement. Sending money to the wrong account — whether due to data entry errors, fraudulent claims, or identity theft — results in financial losses, recovery complications, and regulatory scrutiny. VeriSekure's Bank Account Verification API eliminates these risks by validating account ownership before any transaction.

Our API supports three verification methods: Penny Drop, Reverse Penny Drop, and UPI-based verification. Penny Drop verification deposits ₹1 into the provided bank account and retrieves the account holder's name from the bank's response. This confirms that the account exists, is active, and the holder's name can be matched against the expected beneficiary. It's the most reliable method for confirming account ownership.

Reverse Penny Drop works through UPI — the user initiates a ₹1 collection request from VeriSekure, and the bank's response confirms the account holder's name and account status. This method is faster and doesn't require a deposit, making it ideal for real-time verification during customer onboarding.

UPI-based verification validates the VPA (Virtual Payment Address) and retrieves the linked account holder's name. This is particularly useful for peer-to-peer payment platforms and apps where users transact via UPI IDs rather than account numbers.

For lending institutions, bank account verification is mandatory before loan disbursement. RBI guidelines require lenders to verify that the disbursement account belongs to the borrower. Our API automates this compliance requirement, reducing manual verification effort and speeding up the disbursement process.

Insurance companies use our API to verify claim settlement accounts, ensuring that payouts reach the rightful policyholder. Payroll processing companies verify employee bank accounts before the first salary transfer, preventing bounced transactions and payment delays.

The API also performs IFSC code validation and returns the bank name, branch details, and MICR code — providing complete account routing information in a single API call. It supports individual and bulk verification for enterprise use cases.`,
    features: [
      "Penny drop account ownership verification",
      "Reverse penny drop (UPI-based) verification",
      "VPA/UPI ID validation",
      "Account holder name retrieval and matching",
      "Account active/dormant status check",
      "IFSC code validation with branch details",
      "MICR code and bank branch information",
      "Bulk batch processing for enterprise",
    ],
    useCases: [
      "Loan disbursement account validation",
      "Payroll and salary account verification",
      "Insurance claim settlement verification",
      "Vendor payment account confirmation",
      "Refund processing account validation",
      "KYC compliance for account linkage",
      "Government subsidy disbursement",
      "Marketplace seller payout verification",
    ],
    faqs: [
      { q: "What is penny drop verification?", a: "Penny drop deposits ₹1 into the bank account to verify its existence, active status, and account holder name. The deposited amount is non-refundable but confirms authentic ownership." },
      { q: "What's the difference between penny drop and reverse penny drop?", a: "Penny drop makes a small deposit to verify the account. Reverse penny drop uses UPI — the user initiates a collection request, and the bank confirms the account details without any deposit." },
      { q: "Can it verify UPI IDs?", a: "Yes. Our API validates UPI VPAs (Virtual Payment Addresses) and retrieves the linked bank account holder's name for identity confirmation." },
      { q: "How fast is bank account verification?", a: "Penny drop verification typically completes in 5-30 seconds. Reverse penny drop and UPI verification are near-instant, completing in under 5 seconds." },
      { q: "Does it support all Indian banks?", a: "Yes. Our API supports account verification across all major Indian banks, including public sector, private sector, cooperative, and payment banks." },
    ],
  },
  "credit-score-api": {
    slug: "credit-score-api",
    seoTitle: "Credit Score & Credit Report API — Bureau Integration | VeriSekure",
    metaDescription: "Fetch credit scores and comprehensive credit reports from major Indian credit bureaus in real-time. Power lending decisions with accurate credit intelligence.",
    headline: "Credit Score & Report API",
    intro: "Access real-time credit scores and comprehensive credit reports from major Indian credit bureaus. Power lending decisions with accurate credit intelligence for loans, credit cards, and financial products.",
    parentCategory: "Financial & Banking Verification",
    parentSlug: "financial-banking",
    longContent: `Credit score and credit report APIs are the backbone of lending decisions in India. Whether it's a personal loan, business loan, credit card approval, or mortgage underwriting, credit intelligence is the single most important factor in assessing a borrower's repayment capacity and default risk. VeriSekure's Credit Score & Report API provides instant access to credit data from major Indian credit bureaus.

Our API fetches the borrower's credit score — a three-digit number (typically 300-900) that represents their creditworthiness based on repayment history, credit utilization, credit age, credit mix, and recent inquiries. A higher score indicates lower default risk, enabling lenders to make faster approval decisions with greater confidence.

Beyond the score, our Full Credit Report API retrieves comprehensive credit data including account-level details of all active and closed credit facilities, payment history for the past 36 months, default and delinquency records, outstanding balances, credit utilization ratios, recent credit inquiries, and dispute information. This granular data enables sophisticated underwriting models and risk assessment workflows.

For digital lending platforms, real-time credit bureau integration is essential for instant loan approvals. VeriSekure's API enables sub-second credit checks that power pre-approved loan offers, instant credit limit decisions, and real-time risk-based pricing. Combined with our identity verification and income verification APIs, lenders can build fully automated, end-to-end underwriting workflows.

NBFCs and microfinance institutions serving thin-file or new-to-credit customers benefit from our alternative credit scoring capabilities. By combining bureau data with alternative signals — mobile data, digital footprint, bank statement analysis — we help lenders assess borrowers who may not have traditional credit histories.

Our API supports consent-based credit pulls with digital consent management, ensuring compliance with credit bureau regulations and data privacy requirements. All credit data is transmitted via end-to-end encrypted channels with comprehensive audit logging.

The Credit API supports individual pulls and bulk portfolio monitoring, enabling lenders to track credit health across their entire loan book and receive alerts on significant credit events like new defaults, increased utilization, or score drops.`,
    features: [
      "Real-time credit score retrieval (300-900)",
      "Comprehensive credit report with account details",
      "36-month payment history analysis",
      "Default and delinquency records",
      "Credit utilization and limit details",
      "Recent inquiry and hard pull tracking",
      "Consent-based credit pull management",
      "Portfolio monitoring and bulk processing",
    ],
    useCases: [
      "Personal and business loan underwriting",
      "Credit card approval decisions",
      "Pre-approved loan offer generation",
      "Risk-based interest rate pricing",
      "Mortgage and housing loan assessment",
      "NBFC and microfinance lending",
      "Portfolio monitoring and early warning",
      "Co-lending partnership risk sharing",
    ],
    faqs: [
      { q: "Which credit bureaus does VeriSekure integrate with?", a: "We integrate with all major Indian credit bureaus to provide comprehensive credit intelligence for your lending decisions." },
      { q: "How fast is the credit score retrieval?", a: "Credit scores are fetched in real-time, typically within 2-5 seconds, enabling instant loan approval decisions in your onboarding flow." },
      { q: "Does it require borrower consent?", a: "Yes. All credit pulls require proper borrower consent as mandated by credit bureau regulations. Our API includes digital consent management capabilities." },
      { q: "Can I monitor my entire loan portfolio?", a: "Yes. Our portfolio monitoring feature enables bulk credit checks and alerts on credit events across your entire loan book." },
      { q: "Does it support thin-file borrowers?", a: "Yes. For borrowers with limited credit history, our API can be combined with alternative data signals for more comprehensive credit assessment." },
    ],
  },
  "face-match-liveness": {
    slug: "face-match-liveness",
    seoTitle: "Face Match & Liveness Detection API — AI-Powered | VeriSekure",
    metaDescription: "Prevent deepfake and impersonation fraud with AI-powered face matching and liveness detection. Compare selfies against ID photos for secure remote onboarding.",
    headline: "Face Match & Liveness Detection API",
    intro: "AI-powered face matching and liveness detection to prevent deepfake, replay, and impersonation fraud. Compare live selfies against ID document photos for secure video KYC and remote onboarding.",
    parentCategory: "Identity & KYC Verification",
    parentSlug: "identity-kyc",
    longContent: `Face match and liveness detection is the critical biometric layer in modern digital onboarding. As remote customer acquisition becomes the norm, businesses face increasing threats from deepfake attacks, photo replay fraud, mask-based impersonation, and synthetic identity schemes. VeriSekure's Face Match & Liveness Detection API uses advanced AI models to verify that the person presenting themselves is who they claim to be.

Our Face Match API compares a live selfie or photograph against a reference image — typically from an identity document like Aadhaar, PAN, passport, or driving license. The AI engine analyzes facial geometry, proportions, and unique biometric features to generate a match confidence score. High-confidence matches confirm identity; low scores trigger additional verification steps.

Liveness Detection goes beyond face matching by confirming that the person is physically present and not using a photograph, video replay, or deepfake to impersonate someone. Our passive liveness detection analyzes subtle facial cues — skin texture, light reflection, micro-movements, depth perception, and 3D face geometry — without requiring the user to perform specific actions like blinking or head turning. This provides a frictionless user experience while maintaining high security.

Active liveness detection is also available for higher-security scenarios. Users are prompted to perform random actions like smiling, blinking, or turning their head. The AI system verifies these actions in real-time, making it virtually impossible to fool with pre-recorded videos or static images.

For video KYC mandated by RBI, our API provides the biometric verification layer that enables fully compliant remote KYC workflows. Combined with document verification and OTP authentication, businesses can complete the entire KYC process remotely with the same assurance as in-person verification.

Our face match engine achieves over 99% accuracy on standard benchmarks, with false acceptance rates below 0.01%. The API handles varying lighting conditions, angles, facial accessories (glasses, masks), and age differences between the reference photo and live image.

The API is used across fintech, banking, insurance, telecom, and government applications for onboarding, transaction authentication, and continuous verification.`,
    features: [
      "AI-powered face matching with confidence scoring",
      "Passive liveness detection (frictionless)",
      "Active liveness detection (challenge-response)",
      "Deepfake and photo replay detection",
      "3D depth analysis and mask detection",
      "Multi-document reference image support",
      "Handles varied lighting and facial accessories",
      "Over 99% accuracy with <0.01% false acceptance",
    ],
    useCases: [
      "Video KYC for banking and fintech",
      "Remote customer onboarding",
      "Transaction authentication for high-value transfers",
      "Insurance claim identity verification",
      "Exam proctoring identity checks",
      "Attendance and access control systems",
      "Age verification for restricted services",
      "Continuous authentication for sensitive sessions",
    ],
    faqs: [
      { q: "How accurate is the face match?", a: "Our AI engine achieves over 99% accuracy on standard benchmarks with a false acceptance rate below 0.01%, ensuring high security with minimal false rejections." },
      { q: "Can it detect deepfake videos?", a: "Yes. Our liveness detection uses advanced AI to analyze facial texture, depth, and micro-movements to detect deepfakes, video replays, and mask-based attacks." },
      { q: "What is passive vs active liveness?", a: "Passive liveness analyzes the image/video automatically without user action — it's frictionless. Active liveness asks the user to perform actions like blinking or head turning for higher security." },
      { q: "Does it work with poor lighting?", a: "Yes. Our models are trained on diverse conditions including low light, backlighting, and varying angles, though better lighting improves accuracy." },
      { q: "Is this compliant with RBI video KYC?", a: "Yes. Our Face Match & Liveness API meets RBI's video KYC requirements for remote identity verification in banking and financial services." },
    ],
  },
  "aml-screening": {
    slug: "aml-screening",
    seoTitle: "AML & Sanction Screening API — Anti-Money Laundering | VeriSekure",
    metaDescription: "Screen individuals and entities against global AML, sanctions, PEP, and watchlists in real-time. Meet PMLA compliance with VeriSekure's AML screening API.",
    headline: "AML & Sanction Screening API",
    intro: "Real-time screening against global AML watchlists, sanctions databases, PEP lists, and adverse media. Ensure PMLA compliance and prevent exposure to money laundering and terrorist financing risks.",
    parentCategory: "Financial & Banking Verification",
    parentSlug: "financial-banking",
    longContent: `Anti-Money Laundering (AML) and sanction screening is a regulatory imperative for all financial institutions operating in India. Under the Prevention of Money Laundering Act (PMLA) and RBI Master Direction on KYC, banks, NBFCs, insurance companies, payment banks, and fintech companies are required to screen customers, beneficial owners, and counterparties against sanctions lists, PEP databases, and AML watchlists.

VeriSekure's AML & Sanction Screening API provides comprehensive, real-time screening against global databases including UN Security Council sanctions, OFAC (Office of Foreign Assets Control), EU sanctions, India's UAPA list, RBI's caution list, FATF grey/blacklists, and other international regulatory watchlists. The API also screens against PEP (Politically Exposed Persons) databases and adverse media sources.

For financial institutions, failure to comply with AML regulations carries severe consequences — including penalties of up to ₹25 lakhs per violation, criminal prosecution of compliance officers, license cancellation, and reputational destruction. The 2023-24 period saw RBI impose record penalties on banks and NBFCs for AML compliance failures, making automated screening more important than ever.

Our AML screening covers individuals and entities. For individuals, the API checks names against global sanctions and PEP databases, considering name variations, transliterations, and aliases to minimize false negatives. For entities, it screens company names, directors, and beneficial owners against corporate sanctions lists and adverse media.

The API supports both one-time screening during onboarding and ongoing monitoring. Ongoing monitoring is essential because a customer's risk status can change — a customer may become politically exposed, get sanctioned, or be associated with adverse media after initial onboarding. Our periodic screening capabilities ensure continuous compliance.

Risk scoring accompanies every screening result, categorizing matches as exact, partial, or potential — enabling compliance teams to efficiently triage alerts and focus on genuine risks rather than false positives. The API also provides detailed match context including the source list, reason for listing, and relevant dates.

VeriSekure's AML API integrates seamlessly into existing compliance workflows, CRM systems, and risk management platforms through RESTful API endpoints with comprehensive documentation and webhook support for real-time alerts.`,
    features: [
      "Global sanctions list screening (UN, OFAC, EU, India)",
      "PEP database screening with relationship mapping",
      "Adverse media monitoring and alerts",
      "Name variation and alias matching",
      "Entity and corporate sanctions screening",
      "Risk scoring with match categorization",
      "Ongoing monitoring with webhook alerts",
      "Batch screening for portfolio compliance",
    ],
    useCases: [
      "Customer onboarding AML compliance",
      "Periodic portfolio re-screening",
      "Transaction monitoring for suspicious activity",
      "Vendor and counterparty due diligence",
      "Insurance policyholder screening",
      "Cross-border payment compliance",
      "Investment and fund manager screening",
      "Regulatory reporting and audit support",
    ],
    faqs: [
      { q: "Which sanctions lists does VeriSekure screen against?", a: "We screen against UN Security Council, OFAC, EU, India's UAPA, RBI caution list, FATF recommendations, and other international regulatory watchlists — continuously updated." },
      { q: "Does it detect Politically Exposed Persons?", a: "Yes. Our PEP screening covers current and former political figures, their family members, and close associates across global PEP databases." },
      { q: "Can I set up ongoing AML monitoring?", a: "Yes. Our API supports periodic re-screening and continuous monitoring with webhook alerts when a customer's risk status changes." },
      { q: "How does the API handle name variations?", a: "Our matching engine considers transliterations, aliases, name order variations, and common misspellings to minimize false negatives while managing false positives through risk scoring." },
      { q: "Is this sufficient for PMLA compliance?", a: "Yes. Our AML screening API is designed to meet PMLA requirements, including customer screening, ongoing monitoring, and record-keeping for regulatory audits." },
    ],
  },
  "rc-verification": {
    slug: "rc-verification",
    seoTitle: "RC Verification API — Vehicle Registration Check | VeriSekure",
    metaDescription: "Verify vehicle registration certificate (RC) details instantly — owner name, vehicle class, fuel type, fitness, and insurance status from transport records.",
    headline: "Vehicle RC Verification API",
    intro: "Instantly verify vehicle Registration Certificate (RC) details including owner name, vehicle class, fuel type, fitness status, and insurance validity from transport authority records across India.",
    parentCategory: "Vehicle, Driver & Mobility Verification",
    parentSlug: "vehicle-mobility",
    longContent: `Vehicle Registration Certificate (RC) verification is essential for ride-hailing platforms, fleet operators, vehicle financing companies, insurance firms, and any business that deals with vehicle ownership and compliance. VeriSekure's RC Verification API provides instant access to comprehensive vehicle registration data from transport authority databases across all Indian states.

The API returns detailed vehicle information including the registered owner's name and address, vehicle class (two-wheeler, car, commercial vehicle), fuel type, engine and chassis numbers, manufacturing year, registration date, registration validity, fitness certificate status, and hypothecation details (whether the vehicle is financed). This comprehensive data enables businesses to verify vehicle ownership, assess vehicle condition, and confirm regulatory compliance.

We offer two tiers of RC verification. RC Lite provides essential details — owner name, vehicle class, registration validity, and fuel type — suitable for quick ownership verification and fleet management. RC Full provides the complete dataset including hypothecation status, insurance details, fitness certificate validity, permit information, and comprehensive vehicle specifications — ideal for vehicle financing, insurance underwriting, and detailed compliance checks.

For vehicle financing companies, RC verification confirms the vehicle's current ownership and whether it's already hypothecated to another lender. This prevents double financing fraud and ensures clean title before disbursement. Insurance companies use RC data to verify vehicle details during policy issuance and claims processing, detecting misrepresentation of vehicle class, age, or specifications.

Fleet operators and logistics companies rely on RC verification for onboarding new vehicles, monitoring fitness certificate expiry, and ensuring permit compliance for commercial vehicles. Our API supports bulk verification for fleet operators managing thousands of vehicles, with automated alerts for expiring documents.

The used vehicle market also benefits significantly from RC verification. Buyers can verify ownership history, check for pending hypothecation, confirm the vehicle's registration validity, and ensure there are no outstanding challans or blacklisting orders before making a purchase.

VeriSekure's RC Verification API covers vehicles registered across all Indian states and union territories, providing a unified interface regardless of the regional transport authority format.`,
    features: [
      "Owner name and address verification",
      "Vehicle class and specification details",
      "Registration validity and fitness status",
      "Hypothecation and financing status check",
      "Insurance coverage verification",
      "Engine and chassis number validation",
      "RC Lite and RC Full tiers available",
      "Nationwide coverage across all states",
    ],
    useCases: [
      "Vehicle loan underwriting and financing",
      "Fleet onboarding and compliance management",
      "Insurance policy issuance verification",
      "Used vehicle purchase due diligence",
      "Ride-hailing vehicle verification",
      "Logistics fleet compliance monitoring",
      "Vehicle auction pre-inspection",
      "Commercial vehicle permit verification",
    ],
    faqs: [
      { q: "What's the difference between RC Lite and RC Full?", a: "RC Lite provides essential details like owner name, vehicle class, and registration validity. RC Full includes complete data including hypothecation, insurance, fitness, permits, and full vehicle specifications." },
      { q: "Can it detect if a vehicle is financed?", a: "Yes. RC Full verification includes hypothecation status, showing whether the vehicle is currently financed and by which institution." },
      { q: "Does it cover all Indian states?", a: "Yes. Our API covers vehicles registered across all Indian states and union territories through integration with regional transport authority databases." },
      { q: "How fast is RC verification?", a: "RC Lite results are returned in 1-2 seconds. RC Full verification typically completes in 2-5 seconds depending on the state transport authority." },
      { q: "Can I verify vehicles in bulk?", a: "Yes. Our batch processing API supports bulk RC verification for fleet operators and financing companies managing large vehicle portfolios." },
    ],
  },
  "criminal-record-check": {
    slug: "criminal-record-check",
    seoTitle: "Criminal Record Check API — Background Screening | VeriSekure",
    metaDescription: "Search criminal databases for convictions, FIRs, and pending cases across Indian jurisdictions. Comprehensive background screening for hiring and onboarding.",
    headline: "Criminal Record Check API",
    intro: "Comprehensive criminal background screening — search criminal databases for convictions, FIRs, and pending cases across Indian jurisdictions for safer hiring, lending, and onboarding decisions.",
    parentCategory: "Legal, Court & Criminal Checks",
    parentSlug: "legal-criminal",
    longContent: `Criminal record checking is a fundamental component of responsible hiring, lending, and onboarding processes. In India, where criminal records are distributed across thousands of police stations, district courts, and state databases, accessing comprehensive criminal background information has traditionally been slow and unreliable. VeriSekure's Criminal Record Check API automates this process, providing fast and comprehensive criminal background screening through digital access to multiple data sources.

Our API searches across criminal databases to identify convictions, First Information Reports (FIRs), pending criminal cases, and court proceedings against an individual. The search covers district-level and state-level criminal records, providing nationwide coverage for comprehensive background screening.

For employers, criminal background checks are increasingly essential — not just for compliance but for workplace safety, brand protection, and liability management. Industries such as banking, financial services, healthcare, education, and childcare often have regulatory requirements mandating criminal screening. Even where not legally required, criminal checks help employers make informed decisions and protect their workforce and customers.

Lending institutions use criminal record checks as part of their borrower risk assessment. Individuals with criminal histories may represent higher default risk or be involved in financial fraud. For NBFCs and microfinance institutions serving underbanked populations, criminal screening provides an additional risk signal beyond traditional credit data.

Real estate companies and property management firms use criminal checks for tenant screening, helping landlords make safer rental decisions. Insurance companies screen claim investigators, agents, and high-value policyholders as part of their due diligence process.

Our API handles the complexity of Indian criminal records, including name variations, multiple jurisdictions, and different record formats across states. The results are delivered in a structured format that's easy to integrate into existing HR systems, background verification platforms, and risk assessment workflows.

VeriSekure's criminal record search is consent-based and compliant with Indian privacy regulations. All searches are audit-logged, and results are encrypted in transit and at rest. We also provide guidance on how to interpret results and handle adverse findings in compliance with applicable laws.`,
    features: [
      "Nationwide criminal database search",
      "FIR and conviction record detection",
      "Pending case identification",
      "Multi-jurisdictional coverage",
      "Name variation and alias matching",
      "Structured result format for integration",
      "Consent-based and audit-logged searches",
      "Batch processing for volume screening",
    ],
    useCases: [
      "Pre-employment background screening",
      "Tenant and landlord verification",
      "Borrower risk assessment for lending",
      "Insurance agent onboarding",
      "Gig worker and contractor screening",
      "Vendor and partner due diligence",
      "Childcare and education staff screening",
      "Healthcare worker verification",
    ],
    faqs: [
      { q: "How comprehensive is the criminal search?", a: "Our search covers criminal databases across Indian jurisdictions including FIRs, convictions, pending cases, and court proceedings for nationwide background intelligence." },
      { q: "Is consent required for criminal checks?", a: "Yes. All criminal record searches require proper consent from the individual being verified, in compliance with Indian privacy regulations and employment laws." },
      { q: "How fast are results returned?", a: "Most criminal record searches complete within minutes, though comprehensive multi-jurisdictional searches may take longer depending on database availability." },
      { q: "Can it handle name variations?", a: "Yes. Our search engine accounts for common name variations, transliterations, and aliases to ensure comprehensive coverage." },
      { q: "What should I do with adverse findings?", a: "We recommend following applicable employment laws and industry guidelines when handling adverse findings, including giving the individual an opportunity to explain or dispute the records." },
    ],
  },
  "income-verification": {
    slug: "income-verification",
    seoTitle: "Income Verification API — ITR & Bank Statement Analysis | VeriSekure",
    metaDescription: "Verify income levels through ITR data, bank statement analysis, and alternate data sources. Power lending decisions with accurate income intelligence.",
    headline: "Income Verification API",
    intro: "Verify income levels accurately through ITR data, bank statement analysis, and alternate data sources. Essential for lending decisions, credit assessment, and financial product eligibility.",
    parentCategory: "Financial & Banking Verification",
    parentSlug: "financial-banking",
    longContent: `Income verification is the cornerstone of responsible lending. Accurate income assessment directly impacts loan approval decisions, credit limits, interest rates, and default prediction. In India, where a significant portion of the workforce earns through informal channels or multiple income sources, traditional income verification through salary slips alone is insufficient. VeriSekure's Income Verification API provides comprehensive income intelligence through multiple verification methods.

Our API supports ITR-based income verification, which retrieves the borrower's filed Income Tax Returns to verify declared income, tax payment status, and filing history. This is the gold standard for income verification in lending, as ITR data is filed with the government and represents the borrower's declared financial position. The API extracts total income, taxable income, tax paid, and filing year from ITR records.

Bank Statement Analysis provides an alternative income verification method that's particularly valuable for self-employed individuals, freelancers, and informal sector workers. Our AI-powered analysis engine processes bank statements to identify salary credits, business income patterns, regular inflows, and average monthly balance. It calculates key financial metrics including income regularity, expense patterns, and net disposable income.

For gig workers, freelancers, and small business owners who may not have consistent salary credits, our alternative data analysis identifies income patterns from transaction data, payment platform inflows, and business receipt patterns. This enables lending to underserved segments while maintaining risk management standards.

Our Income Verification API also supports employer verification — confirming the applicant's current employment, designation, tenure, and salary range through employer databases and professional registries. This adds another layer of income validation for salaried individuals.

The API returns income data in a structured format with confidence scores, enabling lenders to build automated underwriting rules. High-confidence income verification leads to instant loan approvals, while lower-confidence results can trigger additional verification steps or manual review.

For large lending platforms processing thousands of applications daily, our API supports batch processing and integrates seamlessly into existing underwriting workflows through RESTful endpoints and webhook notifications.`,
    features: [
      "ITR-based income verification from IT Department",
      "AI-powered bank statement analysis",
      "Alternative income data for informal sector",
      "Employer verification and salary confirmation",
      "Income regularity and pattern analysis",
      "Confidence scoring for automated decisions",
      "Multi-year income trend analysis",
      "Batch processing for high-volume lending",
    ],
    useCases: [
      "Personal loan underwriting",
      "Home loan income assessment",
      "Credit card limit decisions",
      "Business loan cash flow analysis",
      "Rental agreement income proof",
      "Insurance premium affordability check",
      "NBFC and microfinance lending",
      "Co-lending partnership risk assessment",
    ],
    faqs: [
      { q: "What income verification methods are supported?", a: "We support ITR-based verification, bank statement analysis, employer verification, and alternative data analysis for comprehensive income assessment across all borrower types." },
      { q: "Can it verify self-employed income?", a: "Yes. Our bank statement analysis and alternative data methods are specifically designed to assess income for self-employed individuals, freelancers, and small business owners." },
      { q: "How accurate is bank statement income analysis?", a: "Our AI models achieve high accuracy in identifying salary credits and income patterns, with confidence scores to help lenders assess reliability of the income estimate." },
      { q: "Does it check ITR filing history?", a: "Yes. The API retrieves ITR filing history including total income, taxable income, tax paid, and filing compliance for multiple assessment years." },
      { q: "Can this be used for instant loan approvals?", a: "Yes. With high-confidence income verification, lenders can build automated approval rules for instant loan decisions in their digital lending workflows." },
    ],
  },
  "document-ocr": {
    slug: "document-ocr",
    seoTitle: "Document OCR API — AI Text Extraction from Documents | VeriSekure",
    metaDescription: "Extract structured text and data from scanned documents, images, and PDFs using AI-powered OCR. Support for multiple Indian languages and document formats.",
    headline: "Document OCR & Extraction API",
    intro: "Extract structured text and data from scanned documents, photographs, and PDF files using AI-powered OCR technology. Support for multiple Indian languages and complex document layouts.",
    parentCategory: "Document AI & Data Extraction",
    parentSlug: "document-ai",
    longContent: `Document OCR (Optical Character Recognition) is a foundational technology for automating document-heavy business processes. From KYC onboarding to insurance claims, lending to accounting, businesses process millions of documents daily that need to be converted from images and PDFs into structured, machine-readable data. VeriSekure's Document OCR API uses advanced AI and deep learning models to extract text and data with industry-leading accuracy.

Our OCR engine handles the unique challenges of Indian documents — multiple languages (Hindi, Tamil, Telugu, Kannada, Malayalam, Bengali, Gujarati, Marathi, and more), varied document formats, poor scan quality, handwritten text, and complex multi-column layouts. Whether you're processing Aadhaar cards, bank statements, salary slips, utility bills, or government certificates, our API extracts the data you need in clean, structured JSON format.

The API supports multiple input formats including JPEG, PNG, TIFF, BMP images, and multi-page PDF documents. For each document, the OCR engine identifies text regions, recognizes characters, and structures the extracted data into logical fields. For known document types (identity cards, financial statements, invoices), our AI automatically maps extracted text to predefined fields, eliminating the need for custom parsing logic.

Key capabilities include table extraction — accurately reading tabular data from bank statements, invoices, and financial documents with proper row and column alignment. Handwriting recognition handles handwritten notes, signatures, and form fill-ins that are common in Indian business documents. Multi-language processing handles documents that mix English text with regional languages, accurately recognizing and separating different scripts.

For high-volume document processing, our API supports batch operations where multiple documents can be submitted for processing simultaneously. Webhook notifications alert your system when processing is complete, enabling asynchronous workflow integration.

Document quality assessment is built into the API — it provides confidence scores for extracted text and flags areas where the image quality may affect accuracy. This helps businesses decide when to accept automated extraction versus requesting a clearer document from the customer.

VeriSekure's OCR models are continuously trained on millions of Indian documents, ensuring that accuracy improves over time as new document formats and variations are encountered.`,
    features: [
      "Multi-language OCR (12+ Indian languages)",
      "Table and structured data extraction",
      "Handwritten text recognition",
      "Multi-format support (JPEG, PNG, PDF, TIFF)",
      "Known document type field mapping",
      "Batch processing with webhook notifications",
      "Confidence scoring for quality assessment",
      "Continuous AI model improvement",
    ],
    useCases: [
      "KYC document data extraction",
      "Bank statement digitization",
      "Invoice and receipt processing",
      "Insurance claim document extraction",
      "Salary slip and Form 16 parsing",
      "Medical record digitization",
      "Academic certificate processing",
      "Government form data extraction",
    ],
    faqs: [
      { q: "Which Indian languages does the OCR support?", a: "Our OCR supports Hindi, Tamil, Telugu, Kannada, Malayalam, Bengali, Gujarati, Marathi, Punjabi, Odia, Assamese, and English — handling mixed-language documents accurately." },
      { q: "Can it extract data from tables?", a: "Yes. Our AI accurately extracts tabular data with proper row/column alignment from bank statements, invoices, financial documents, and structured forms." },
      { q: "Does it handle poor quality scans?", a: "Yes. Our OCR models are trained on varied document qualities. The API provides confidence scores so you can assess extraction reliability and request clearer images when needed." },
      { q: "Can it process multi-page PDFs?", a: "Yes. The API supports multi-page PDF documents, processing each page and returning structured data with page-level organization." },
      { q: "How accurate is the text extraction?", a: "Our AI models achieve over 95% accuracy on standard document types, with higher accuracy on clean, well-formatted documents and continuous improvement through machine learning." },
    ],
  },
  "fraud-risk-score": {
    slug: "fraud-risk-score",
    seoTitle: "Fraud Risk Score API — Multi-Signal Fraud Detection | VeriSekure",
    metaDescription: "Multi-signal fraud scoring combining identity, financial, behavioral, and device intelligence. Real-time fraud detection for digital onboarding and transactions.",
    headline: "Fraud Risk Score API",
    intro: "Multi-signal fraud scoring that combines identity verification, financial data, device fingerprints, and behavioral patterns into a single actionable risk score for real-time fraud prevention.",
    parentCategory: "Risk, Fraud & Trust Intelligence",
    parentSlug: "risk-fraud",
    longContent: `Fraud detection in India's digital economy requires a multi-dimensional approach. Individual verification checks — identity, financial, or device — can be bypassed by sophisticated fraudsters. True fraud prevention requires combining multiple signals into a unified risk assessment that catches fraudulent patterns invisible to single-check systems. VeriSekure's Fraud Risk Score API does exactly this.

Our Fraud Risk Score combines data from multiple verification dimensions: identity verification results (Aadhaar, PAN, face match), financial intelligence (bank account, credit bureau, income), device fingerprinting (browser, OS, device ID, emulator detection), behavioral analysis (typing patterns, navigation speed, session behavior), and digital footprint (email age, phone number history, social presence).

The API generates a comprehensive risk score for each user or transaction, ranging from 0 (highest risk) to 1000 (lowest risk). This score is accompanied by risk factors — specific signals that contributed to the score — enabling your compliance and risk teams to understand why a particular user or transaction was flagged. Common risk factors include mismatched identity data, new/disposable phone numbers, VPN usage, emulator detection, and suspicious behavioral patterns.

For real-time transaction fraud detection, our API delivers scores in under 500 milliseconds, making it suitable for payment authorization, loan approval, and account creation flows where speed is critical. The API can be integrated as a single-call risk assessment or as a continuous monitoring system that updates scores as new signals are collected.

Machine learning models power the scoring engine, trained on millions of Indian verification records and fraud patterns. The models continuously adapt to new fraud techniques, reducing false positives over time while maintaining high fraud detection rates. Unlike static rule-based systems, our ML models detect emerging fraud patterns that no predefined rule would catch.

For platform businesses managing high-volume user onboarding — fintech apps, e-commerce marketplaces, gaming platforms, dating apps — the Fraud Risk Score enables automated risk-based decisioning. Low-risk users get instant approval, medium-risk users undergo additional verification, and high-risk users are blocked or flagged for manual review.

Enterprise customers can request custom model tuning to optimize fraud detection for their specific business context, user demographics, and risk tolerance.`,
    features: [
      "Multi-signal fraud scoring (0-1000)",
      "Identity, financial, device, and behavioral signals",
      "Real-time scoring in under 500ms",
      "Risk factor explanations for each score",
      "ML models trained on Indian data",
      "Continuous model adaptation to new fraud patterns",
      "Custom model tuning for enterprise",
      "Batch scoring for portfolio assessment",
    ],
    useCases: [
      "Digital lending fraud prevention",
      "Payment transaction fraud detection",
      "Account opening risk assessment",
      "E-commerce buyer/seller fraud screening",
      "Insurance application fraud detection",
      "Gaming and dating platform trust",
      "UPI and wallet fraud prevention",
      "Referral and promotional abuse detection",
    ],
    faqs: [
      { q: "What signals does the Fraud Risk Score use?", a: "It combines identity verification, financial data, device fingerprints, behavioral patterns, and digital footprint signals into a unified risk score using machine learning models." },
      { q: "How fast is the scoring?", a: "The API delivers fraud risk scores in under 500 milliseconds, suitable for real-time transaction authorization and instant onboarding decisions." },
      { q: "Can the models be customized?", a: "Yes. Enterprise customers can request custom model tuning optimized for their specific business context, user demographics, and risk tolerance levels." },
      { q: "How does it handle false positives?", a: "Our ML models are continuously trained to minimize false positives. Risk factor explanations help your team quickly triage alerts and distinguish genuine fraud from legitimate edge cases." },
      { q: "Does it detect new types of fraud?", a: "Yes. Unlike static rules, our ML models adapt to emerging fraud patterns, detecting new techniques that wouldn't be caught by predefined rules." },
    ],
  },
  "msme-verification": {
    slug: "msme-verification",
    seoTitle: "MSME Udyam Verification API — Validate Registration | VeriSekure",
    metaDescription: "Authenticate MSME Udyam registration number and business classification instantly. Verify micro, small, and medium enterprise status for schemes and lending.",
    headline: "MSME Udyam Verification API",
    intro: "Instantly authenticate MSME Udyam registration numbers, verify business classification (micro, small, medium), and confirm enterprise details for government scheme eligibility and business lending.",
    parentCategory: "Business / KYB Verification",
    parentSlug: "business-kyb",
    longContent: `MSME (Micro, Small, and Medium Enterprise) verification is increasingly important as the Indian government expands support programs, subsidies, and preferential treatment for registered MSMEs. The Udyam Registration system, introduced in 2020, provides a unique identification number for MSMEs based on self-declared investment and turnover data. VeriSekure's MSME Verification API enables businesses and institutions to validate Udyam registration numbers in real-time.

The API verifies the Udyam Registration Number against the MSME ministry's database and returns comprehensive details including the enterprise name, type of organization, social category of the entrepreneur, date of incorporation, date of commencement of production, NIC code (National Industrial Classification), major activity (manufacturing or services), and the enterprise classification (micro, small, or medium).

For lending institutions, MSME verification is critical for processing business loans under government schemes like the Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE), Emergency Credit Line Guarantee Scheme (ECLGS), and Pradhan Mantri Mudra Yojana. These schemes require valid MSME registration as an eligibility criterion. Our API automates this verification, reducing loan processing time and ensuring compliance with scheme guidelines.

Government procurement portals require MSME verification for vendor registration and preference in public procurement. MSMEs registered under the Udyam system receive various benefits including exemption from earnest money deposit, price preference in government purchases, and priority sector lending benefits from banks.

For large enterprises and marketplaces, MSME verification helps manage supplier diversity programs and ensure compliance with government procurement mandates. It also helps identify legitimate MSMEs from fraudulent registrations that may be created to exploit scheme benefits.

The API supports individual and bulk verification, making it suitable for both single-application processing and batch-level validation of existing MSME vendor databases. Results are returned in structured JSON format with verification status, enterprise details, and classification information.`,
    features: [
      "Udyam Registration Number validation",
      "Enterprise classification (Micro/Small/Medium)",
      "NIC code and activity type verification",
      "Date of incorporation and commencement",
      "Organization type and social category",
      "Government scheme eligibility confirmation",
      "Bulk batch verification support",
      "Structured JSON response format",
    ],
    useCases: [
      "MSME loan eligibility verification",
      "Government scheme application processing",
      "Public procurement vendor registration",
      "Supplier diversity program management",
      "Priority sector lending compliance",
      "Marketplace MSME seller verification",
      "Trade credit assessment",
      "CSR program beneficiary validation",
    ],
    faqs: [
      { q: "What details does MSME verification return?", a: "The API returns enterprise name, Udyam number, classification (micro/small/medium), NIC code, activity type, incorporation date, organization type, and registration status." },
      { q: "Can it confirm government scheme eligibility?", a: "Yes. By verifying the MSME classification and registration status, the API helps confirm eligibility for government schemes like CGTMSE, ECLGS, and procurement preferences." },
      { q: "How current is the MSME data?", a: "We verify against the MSME ministry's Udyam database in real-time, ensuring you get the latest registration status and classification information." },
      { q: "Does it support bulk verification?", a: "Yes. Our batch processing API supports bulk MSME verification for managing large vendor databases and periodic re-verification." },
      { q: "Can it detect fraudulent registrations?", a: "The API verifies registration authenticity against the official database. Invalid, cancelled, or non-existent Udyam numbers are flagged accordingly." },
    ],
  },
  "email-verification": {
    slug: "email-verification",
    seoTitle: "Email Verification API — Real-Time Email Validation | VeriSekure",
    metaDescription: "Verify email addresses in real-time — check syntax, domain, MX records, disposable detection, and deliverability. Reduce bounce rates and prevent fraud.",
    headline: "Email Verification API",
    intro: "Validate email addresses in real-time with syntax checks, MX record verification, disposable email detection, and deliverability scoring. Reduce bounce rates, prevent signup fraud, and maintain clean contact databases.",
    parentCategory: "Identity & KYC Verification",
    parentSlug: "identity-kyc",
    longContent: `Email verification is a foundational data quality step that every business should implement at the point of customer registration, lead capture, and account creation. Invalid, fake, or disposable email addresses pollute customer databases, inflate marketing costs, damage sender reputation, and create security vulnerabilities. VeriSekure's Email Verification API provides comprehensive, real-time email validation through multiple verification layers.

Our API performs multi-step verification starting with syntax validation — checking the email format against RFC 5322 standards to catch typos, missing characters, and malformed addresses. Domain verification confirms that the email domain exists and has properly configured DNS and MX (Mail Exchange) records capable of receiving email.

The SMTP handshake check goes deeper by connecting to the recipient's mail server to verify whether the specific mailbox exists and is accepting messages — all without sending an actual email. This catches valid domains with invalid mailbox addresses, reducing your bounce rate significantly.

Disposable email detection is critical for preventing fraud and fake signups. Our API maintains a continuously updated database of thousands of disposable and temporary email providers (like Mailinator, Guerrilla Mail, TempMail, and hundreds of others). When a user attempts to register with a disposable email, the API flags it immediately, allowing your application to request a permanent email address.

Role-based email detection identifies generic addresses like info@, support@, admin@, and sales@ that are typically shared mailboxes rather than individual accounts. These addresses often have lower engagement rates and may not be suitable for personalized communications or account verification.

Our API also provides a deliverability score — a composite metric that combines all verification signals into a 0-100 score indicating the likelihood that an email sent to this address will be successfully delivered. This score helps businesses make nuanced decisions rather than simple accept/reject choices.

For businesses managing large contact databases, our bulk verification API processes millions of email addresses efficiently, helping you clean existing lists and maintain ongoing data hygiene. Webhook notifications alert your system when batch processing is complete, and detailed reports identify which addresses are valid, invalid, risky, or unknown.

The API integrates seamlessly into registration forms, CRM systems, marketing platforms, and customer service tools through RESTful endpoints with comprehensive documentation and SDKs for popular programming languages.`,
    features: [
      "Real-time syntax and RFC 5322 validation",
      "DNS and MX record verification",
      "SMTP mailbox existence check",
      "Disposable email provider detection",
      "Role-based email identification",
      "Deliverability score (0-100)",
      "Bulk list cleaning and batch processing",
      "Continuously updated provider database",
    ],
    useCases: [
      "User registration fraud prevention",
      "Marketing email list hygiene",
      "Lead capture form validation",
      "CRM data quality management",
      "E-commerce checkout verification",
      "Newsletter subscriber validation",
      "Account recovery email confirmation",
      "B2B contact database cleaning",
    ],
    faqs: [
      { q: "How does email verification reduce bounce rates?", a: "By validating syntax, domain, MX records, and mailbox existence before sending, our API catches invalid addresses at the point of entry, preventing hard bounces that damage your sender reputation." },
      { q: "Can it detect disposable emails?", a: "Yes. Our API maintains a continuously updated database of thousands of disposable and temporary email providers, flagging them in real-time during registration." },
      { q: "Does it actually send an email to verify?", a: "No. Our SMTP verification checks whether the mailbox exists by connecting to the mail server without sending any message, keeping the process non-intrusive." },
      { q: "How accurate is the deliverability score?", a: "Our deliverability score combines multiple signals including syntax, domain health, mailbox existence, and provider reputation to provide a reliable 0-100 confidence metric." },
      { q: "Can I verify emails in bulk?", a: "Yes. Our batch API processes millions of email addresses with detailed reporting on valid, invalid, risky, and unknown addresses." },
    ],
  },
  "ckyc-verification": {
    slug: "ckyc-verification",
    seoTitle: "CKYC Search & Download API — Central KYC Registry | VeriSekure",
    metaDescription: "Search and download CKYC records from the Central KYC Registry (CERSAI). Streamline KYC onboarding with pre-verified customer data for banking and financial services.",
    headline: "CKYC Search & Download API",
    intro: "Access the Central KYC Registry (CERSAI) to search, fetch, and download pre-verified KYC records. Eliminate redundant KYC for banking, insurance, and financial services onboarding.",
    parentCategory: "Identity & KYC Verification",
    parentSlug: "identity-kyc",
    longContent: `Central KYC (CKYC) is a centralized repository of KYC records maintained by the Central Registry of Securitisation Asset Reconstruction and Security Interest of India (CERSAI). Under RBI's KYC Master Direction, all regulated entities — banks, NBFCs, mutual funds, insurance companies, and payment aggregators — are required to upload KYC records to CKYC and search the registry before collecting fresh KYC from customers.

VeriSekure's CKYC Search & Download API enables financial institutions to query the CKYC registry using customer identifiers like PAN, Aadhaar, Voter ID, Passport, or Driving License number. If a matching record exists, the API returns the CKYC Identifier (KIN) and allows downloading the complete KYC record including the customer's photograph, proof of identity, proof of address, and verified demographic details.

The primary benefit of CKYC integration is the elimination of redundant KYC collection. When a customer has already completed KYC with one financial institution, their verified records are available in the CKYC registry for other institutions to access. This dramatically reduces onboarding time, improves customer experience, and cuts KYC compliance costs.

For banks and NBFCs, CKYC compliance is mandatory. RBI periodically audits KYC processes and penalizes institutions that fail to upload or search CKYC records as required. Our API automates both the search and download process, ensuring compliance while minimizing manual intervention.

The CKYC record contains comprehensive verified information: customer name, date of birth, gender, PAN, Aadhaar, address, photograph, and the KYC verification details including the date of verification and the entity that performed it. This rich dataset enables instant onboarding with high confidence in the customer's verified identity.

Our API also supports CKYC record upload for institutions that need to submit newly verified KYC records to the central registry. The upload API validates data format, checks for completeness, and handles submission to CERSAI with confirmation receipts.

For digital lending platforms and neo-banks, CKYC integration is a game-changer — enabling zero-document onboarding for customers who already have CKYC records. Combined with Aadhaar e-KYC and video KYC, CKYC creates a fully digital, fully compliant onboarding experience.

VeriSekure's CKYC API handles the complexity of CERSAI's protocols, data formats, and security requirements, providing a simple RESTful interface for your development team.`,
    features: [
      "CKYC registry search by PAN, Aadhaar, or other IDs",
      "Complete KYC record download with photograph",
      "CKYC Identifier (KIN) retrieval",
      "CKYC record upload to CERSAI",
      "Data format validation and completeness check",
      "Multi-identifier search support",
      "Audit-ready compliance logging",
      "Real-time API with enterprise reliability",
    ],
    useCases: [
      "Zero-document bank account opening",
      "NBFC and lending platform onboarding",
      "Insurance policy issuance KYC",
      "Mutual fund investor KYC",
      "Payment aggregator compliance",
      "Neo-bank digital onboarding",
      "CKYC compliance audit preparation",
      "Re-KYC and periodic KYC updates",
    ],
    faqs: [
      { q: "What is CKYC and why is it mandatory?", a: "CKYC (Central KYC) is a centralized KYC registry maintained by CERSAI. RBI mandates all regulated entities to search CKYC before collecting fresh KYC, eliminating redundant verification across institutions." },
      { q: "What identifiers can I use to search CKYC?", a: "You can search using PAN, Aadhaar, Voter ID, Passport, or Driving License number. The API returns matching CKYC records with the KYC Identifier (KIN)." },
      { q: "What data does a CKYC record contain?", a: "A complete CKYC record includes customer name, DOB, gender, PAN, Aadhaar, address, photograph, and verification details including date and verifying entity." },
      { q: "Can I upload new KYC records to CKYC?", a: "Yes. Our API supports CKYC record upload with data validation and completeness checks, handling CERSAI submission with confirmation receipts." },
      { q: "How does CKYC improve customer onboarding?", a: "CKYC enables zero-document onboarding for customers with existing records — no need to re-collect identity proofs, reducing friction and improving conversion rates." },
    ],
  },
  "uan-verification": {
    slug: "uan-verification",
    seoTitle: "UAN Verification API — EPFO Employment Check | VeriSekure",
    metaDescription: "Verify Universal Account Number (UAN) from EPFO records. Confirm employment history, employer details, and PF contribution status for background verification.",
    headline: "UAN Verification API",
    intro: "Verify Universal Account Number (UAN) details from EPFO records — confirm employment history, current employer, PF contribution status, and member details for comprehensive background verification.",
    parentCategory: "Employment & Education Verification",
    parentSlug: "employment-education",
    longContent: `UAN (Universal Account Number) verification is a powerful tool for employment background checks and income validation in India. The UAN is a 12-digit number assigned by the Employees' Provident Fund Organisation (EPFO) to every member of the EPF scheme. It acts as a permanent identifier that links all PF accounts of an employee across different employers throughout their career.

VeriSekure's UAN Verification API enables businesses to verify an individual's UAN against EPFO records, confirming their employment history, current and previous employers, PF contribution status, and member details. This verification provides reliable, government-sourced employment data that is difficult to fabricate or manipulate.

For HR teams and background verification companies, UAN verification is one of the most reliable methods to confirm a candidate's claimed employment history. Unlike reference checks that depend on subjective feedback, UAN data provides objective, verifiable records of which companies employed the individual, the periods of employment, and the PF contributions made by each employer.

The API returns comprehensive member details including the member's name (as registered with EPFO), date of birth, date of joining the current organization, the establishment name and code, and PF contribution history. This data enables businesses to verify not just current employment but the entire employment timeline.

Lending institutions use UAN verification as part of income assessment for salaried borrowers. PF contribution data serves as a proxy for salary levels — since employer PF contributions are calculated as a percentage of basic salary, the contribution amounts can be used to estimate the borrower's income bracket. This is particularly valuable when borrowers cannot provide salary slips or bank statements.

For gig economy platforms and staffing companies, UAN verification helps distinguish between experienced and inexperienced workers, confirms claimed industry experience, and verifies previous employer relationships.

Insurance companies use UAN data for group insurance policy verification, confirming that the employees listed under a group policy are genuinely employed by the policyholder organization.

Our UAN Verification API delivers results in real-time with structured JSON responses that integrate seamlessly into existing HR systems, background verification platforms, and lending workflows. It supports both individual and bulk verification for enterprise-scale operations.`,
    features: [
      "UAN number validation against EPFO records",
      "Current and previous employer verification",
      "Employment history timeline reconstruction",
      "PF contribution status and history",
      "Member name and DOB confirmation",
      "Establishment name and code retrieval",
      "Date of joining current organization",
      "Bulk batch processing for enterprise",
    ],
    useCases: [
      "Pre-employment background verification",
      "Employment history confirmation",
      "Income estimation for lending",
      "Staffing and recruitment verification",
      "Insurance group policy validation",
      "Government employment scheme verification",
      "HR onboarding due diligence",
      "Gig worker experience verification",
    ],
    faqs: [
      { q: "What details does UAN verification return?", a: "The API returns member name, DOB, UAN status, current and previous employers with establishment names and codes, date of joining, and PF contribution details." },
      { q: "Can UAN verify previous employment?", a: "Yes. Since UAN links all PF accounts across an employee's career, it provides a complete employment timeline with employer names and employment periods." },
      { q: "How reliable is UAN data for background checks?", a: "Very reliable. UAN data comes directly from EPFO — a government source — making it extremely difficult to fabricate. PF contributions are verified employer records." },
      { q: "Can PF data estimate income?", a: "Yes. Since employer PF contributions are calculated as a percentage of basic salary, contribution amounts provide a reliable proxy for salary estimation." },
      { q: "Does it work for contract employees?", a: "Yes, if the contract employee is enrolled in the EPF scheme with a UAN. Contract workers with PF accounts can be verified like regular employees." },
    ],
  },
  "esic-verification": {
    slug: "esic-verification",
    seoTitle: "ESIC Verification API — Employee Insurance Check | VeriSekure",
    metaDescription: "Verify ESIC (Employees' State Insurance) registration and contribution status. Confirm employment and insurance coverage for background verification and compliance.",
    headline: "ESIC Verification API",
    intro: "Verify ESIC registration and contribution details — confirm employee insurance coverage, employer enrollment, and contribution compliance for comprehensive employment background verification.",
    parentCategory: "Employment & Education Verification",
    parentSlug: "employment-education",
    longContent: `ESIC (Employees' State Insurance Corporation) verification is an essential employment and social security check for businesses hiring in India. The ESI scheme provides medical, disability, maternity, and unemployment benefits to employees earning up to ₹21,000 per month, covering over 13 crore beneficiaries across India. VeriSekure's ESIC Verification API enables businesses to verify an individual's ESI registration and contribution status against ESIC records.

The API validates the ESI number (Insurance Number) and returns member details including name, date of birth, employer name, establishment code, contribution period, and current coverage status. This data provides reliable proof of employment and insurance coverage from a government source.

For background verification companies and HR teams, ESIC verification serves as an additional layer of employment confirmation beyond UAN/PF verification. While PF covers employees across all salary brackets, ESIC specifically covers lower-income workers — making it particularly valuable for verifying employment in manufacturing, construction, retail, hospitality, and other sectors with predominantly lower-wage workers.

ESIC verification is also important for compliance audits. Employers with 10 or more employees (in most states) are legally required to register under the ESI Act and make regular contributions. Staffing companies, labour contractors, and principal employers can use our API to verify that their vendors and contractors are ESI-compliant, reducing legal and financial risk from non-compliance.

For lending institutions serving blue-collar and lower-income borrowers, ESIC data provides employment confirmation and income estimation. Since ESI contributions are calculated on actual wages, the contribution data helps lenders assess repayment capacity for personal loans, consumer finance, and micro-credit products.

Healthcare providers use ESIC verification to confirm patient eligibility for ESI benefits before providing treatment. This helps hospitals and clinics manage their ESI panel operations and ensure proper reimbursement from ESIC.

Government agencies use ESIC data for social security program targeting, ensuring that benefits reach the intended beneficiaries and detecting duplicate or fraudulent claims across multiple social security schemes.

Our API delivers ESIC verification results in real-time with structured JSON responses. It supports individual and bulk verification, handles employer and employee-level queries, and integrates seamlessly into HR, compliance, and verification workflows.`,
    features: [
      "ESI number validation against ESIC records",
      "Employee and employer details retrieval",
      "Contribution period and status check",
      "Coverage and benefit eligibility confirmation",
      "Establishment code and name verification",
      "Multi-period contribution history",
      "Compliance audit support",
      "Bulk batch processing for enterprise",
    ],
    useCases: [
      "Employment background verification",
      "Blue-collar worker hiring verification",
      "Staffing company compliance audits",
      "Lending income estimation for workers",
      "Healthcare ESI eligibility confirmation",
      "Government social security verification",
      "Labour contractor compliance checking",
      "Manufacturing workforce verification",
    ],
    faqs: [
      { q: "What details does ESIC verification return?", a: "The API returns member name, DOB, ESI number status, employer/establishment details, contribution periods, and current coverage eligibility." },
      { q: "How is ESIC different from PF/UAN verification?", a: "ESIC covers employees earning up to ₹21,000/month with health and disability benefits, while PF/UAN covers retirement savings. ESIC is particularly useful for verifying lower-income workers." },
      { q: "Can employers verify their own compliance?", a: "Yes. Employers can use our API to verify their ESI registration, check contribution filing status, and ensure ongoing compliance with ESI Act requirements." },
      { q: "Does ESIC data help with income estimation?", a: "Yes. ESI contributions are calculated on actual wages, making contribution data a reliable proxy for income estimation for blue-collar and lower-income workers." },
      { q: "Is ESIC verification relevant for healthcare?", a: "Yes. Hospitals and clinics on the ESI panel use verification to confirm patient eligibility for ESI benefits before providing treatment." },
    ],
  },
  "challan-verification": {
    slug: "challan-verification",
    seoTitle: "Challan & Traffic Violation Check API — Pending Fines | VeriSekure",
    metaDescription: "Check pending traffic challans and violation history for any vehicle. Verify fine status, violation types, and compliance for fleet management and vehicle transactions.",
    headline: "Challan & Traffic Violation Check API",
    intro: "Check pending traffic challans, violation history, and fine status for any vehicle registered in India. Essential for fleet compliance, vehicle transactions, and driver risk assessment.",
    parentCategory: "Vehicle, Driver & Mobility Verification",
    parentSlug: "vehicle-mobility",
    longContent: `Traffic challan and violation checking is increasingly important for fleet operators, ride-hailing platforms, vehicle financing companies, used vehicle marketplaces, and insurance firms. With India's traffic enforcement becoming increasingly digitized through e-challan systems, pending violations and unpaid fines can affect vehicle transfers, insurance claims, and fleet compliance. VeriSekure's Challan Verification API provides instant access to challan and violation data for vehicles across India.

The API accepts a vehicle registration number and returns comprehensive challan information including the number of pending challans, violation types (speeding, signal jumping, wrong parking, overloading, etc.), challan dates, fine amounts, payment status, and the issuing authority. This data enables businesses to assess vehicle compliance and driver behavior before making operational or financial decisions.

For fleet operators and logistics companies, challan monitoring is essential for maintaining regulatory compliance and controlling operational costs. Unpaid challans accumulate penalties and can result in vehicle seizure during enforcement drives. Our API enables fleet managers to monitor their entire vehicle fleet for pending challans, identify high-risk drivers, and take proactive action before violations escalate.

Ride-hailing and delivery platforms use challan data as a driver quality signal. Drivers with frequent violations may represent higher accident risk and customer safety concerns. By integrating challan checks into driver onboarding and periodic review processes, platforms can maintain higher safety standards and reduce insurance costs.

Vehicle financing companies check for pending challans before disbursing vehicle loans. Vehicles with significant unpaid fines may indicate financial distress of the current owner or create complications during hypothecation and title transfer. Used vehicle buyers can verify that no pending challans exist before completing a purchase, avoiding surprise liabilities.

Insurance companies use challan data during claims processing — a history of traffic violations may affect claim assessment, especially in accident-related claims. Violation history also influences risk-based insurance pricing for commercial and personal vehicle policies.

Our API covers vehicles registered across all major Indian states and union territories, providing a unified interface for nationwide challan checks. It supports individual lookups and bulk batch processing for fleet management use cases, with results returned in structured JSON format.`,
    features: [
      "Pending challan count and details",
      "Violation type classification",
      "Fine amount and payment status",
      "Issuing authority identification",
      "Historical violation timeline",
      "Multi-state coverage across India",
      "Fleet-wide bulk monitoring",
      "Structured JSON response format",
    ],
    useCases: [
      "Fleet compliance and challan management",
      "Ride-hailing driver quality assessment",
      "Used vehicle pre-purchase verification",
      "Vehicle loan pre-disbursement check",
      "Insurance risk-based pricing",
      "Delivery partner onboarding screening",
      "Corporate vehicle policy enforcement",
      "Transport company regulatory compliance",
    ],
    faqs: [
      { q: "What challan details does the API return?", a: "The API returns pending challan count, violation types, dates, fine amounts, payment status, and issuing authority for comprehensive violation intelligence." },
      { q: "Does it cover all Indian states?", a: "Yes. Our API covers vehicles registered across all major Indian states and union territories through integration with e-challan systems." },
      { q: "Can I monitor my entire fleet for challans?", a: "Yes. Our bulk API enables fleet-wide challan monitoring, helping you identify vehicles with pending violations and take proactive compliance action." },
      { q: "Are historical violations included?", a: "Yes. The API provides violation history including past challans, their types, and payment status — not just currently pending violations." },
      { q: "How current is the challan data?", a: "We fetch data from e-challan systems in near real-time. There may be a short delay for very recently issued challans that haven't been uploaded to the digital system." },
    ],
  },
  "mobile-verification": {
    slug: "mobile-verification",
    seoTitle: "Mobile Number Verification API — Telecom & SIM Check | VeriSekure",
    metaDescription: "Verify mobile numbers in real-time — confirm telecom operator, active status, prepaid/postpaid type, and subscriber details. Essential for contact verification and fraud prevention.",
    headline: "Mobile Number Verification API",
    intro: "Verify mobile numbers in real-time — confirm active status, telecom operator, connection type, and subscriber details. Essential for contact verification, communication delivery, and fraud prevention.",
    parentCategory: "Identity & KYC Verification",
    parentSlug: "identity-kyc",
    longContent: `Mobile number verification is a critical contact validation step in customer onboarding, communication workflows, and fraud prevention. With over 1.1 billion mobile connections in India, the mobile number has become the primary customer identifier for businesses across fintech, e-commerce, healthcare, logistics, and government services. VeriSekure's Mobile Number Verification API provides comprehensive mobile validation through multiple verification layers.

Our API performs real-time checks to confirm the mobile number is valid, active, and reachable. The basic validation checks the number format, identifies the telecom operator (Jio, Airtel, Vi, BSNL, etc.), determines the connection type (prepaid or postpaid), and confirms the circle/region of registration. This information helps businesses route communications efficiently and detect anomalies.

Advanced mobile verification goes deeper with telecom intelligence. The API checks whether the number has been recently ported (switched operators), whether it's been recently activated (potential fraud signal), the age of the connection, and whether the SIM has been recently swapped. SIM swap detection is particularly important for preventing account takeover fraud in banking and fintech applications.

For OTP-based authentication, knowing the mobile number's active status and operator before sending an OTP prevents wasted delivery attempts and improves user experience. Our API's instant validation ensures that OTPs are only sent to valid, active numbers.

Lending institutions use mobile verification as part of their contact verification process. The connection age and type (prepaid vs postpaid) serve as alternative data signals for credit assessment. A postpaid connection with several years of history indicates stability, while a recently activated prepaid number may warrant additional verification.

E-commerce platforms use mobile verification to validate delivery contact numbers, reducing failed deliveries due to invalid or unreachable phone numbers. Healthcare providers verify patient contact numbers to ensure appointment reminders and medical communications reach the intended recipient.

For businesses operating WhatsApp Business API or RCS messaging, our mobile verification confirms that the number is capable of receiving rich messages, helping optimize communication channel selection.

Our Mobile Verification API supports individual lookups and bulk batch processing, with results returned in under 1 second for real-time integration into registration forms, checkout flows, and onboarding workflows.`,
    features: [
      "Real-time number validity and active status",
      "Telecom operator identification",
      "Prepaid/postpaid connection type detection",
      "SIM swap and porting detection",
      "Connection age and activation date",
      "Circle/region identification",
      "Messaging capability detection",
      "Bulk batch processing support",
    ],
    useCases: [
      "Customer registration contact validation",
      "OTP delivery optimization",
      "SIM swap fraud prevention in banking",
      "E-commerce delivery contact verification",
      "Lending alternative data signal",
      "Healthcare patient contact validation",
      "Marketing contact list hygiene",
      "WhatsApp Business number validation",
    ],
    faqs: [
      { q: "What details does mobile verification return?", a: "The API returns number validity, active status, telecom operator, prepaid/postpaid type, connection age, circle/region, porting history, and SIM swap indicators." },
      { q: "Can it detect SIM swap fraud?", a: "Yes. Our API checks for recent SIM swaps, which is a key indicator of potential account takeover fraud in banking and fintech applications." },
      { q: "Does it identify the telecom operator?", a: "Yes. The API identifies the current operator (Jio, Airtel, Vi, BSNL, etc.) even if the number has been ported, showing both current and original operator." },
      { q: "How fast is mobile verification?", a: "Results are returned in under 1 second, enabling real-time validation during registration and onboarding flows." },
      { q: "Can I verify numbers in bulk?", a: "Yes. Our batch API supports bulk mobile number verification for cleaning contact databases and validating large customer lists." },
    ],
  },
  "property-ownership-verification": {
    slug: "property-ownership-verification",
    seoTitle: "Property Ownership Verification API — Land & Title Check | VeriSekure",
    metaDescription: "Verify property ownership, land records, title documents, and encumbrance status. Essential for real estate transactions, mortgage lending, and property due diligence.",
    headline: "Property Ownership Verification API",
    intro: "Verify property ownership, land records, encumbrance certificates, and title documents digitally. Essential for mortgage lending, real estate transactions, and comprehensive property due diligence.",
    parentCategory: "Property & Land Verification",
    parentSlug: "property-land",
    longContent: `Property ownership verification is a critical step in real estate transactions, mortgage lending, and property-backed financial products. India's fragmented land record system — spread across municipal corporations, sub-registrar offices, and state revenue departments — makes property verification complex and time-consuming. VeriSekure's Property Ownership Verification API digitizes and automates this process, providing structured property data from multiple official sources.

Our API verifies property ownership by searching official land records and registration databases. It returns the registered owner's name, property description, survey/plot number, area details, property type (residential, commercial, agricultural, industrial), and registration details including sale deed number and registration date. This data enables businesses to confirm who legally owns a property.

Encumbrance Certificate (EC) verification is a key capability — the API checks whether the property has any existing mortgages, liens, legal disputes, or other encumbrances that could affect ownership transfer or collateral value. For mortgage lenders, this is the most critical check before disbursing a home loan — a clean EC confirms that the property can be legally mortgaged.

Title verification goes further by examining the chain of ownership transfers for the property. A clear title means the property has been transferred through legitimate sale deeds with proper documentation at each stage. Our API traces title history to identify potential risks like disputed inheritances, unauthorized transfers, or forged documents.

For housing finance companies and banks, property verification is the backbone of the mortgage underwriting process. Before approving a home loan, the lender must confirm that the property exists, the borrower owns it (or will own it upon purchase), there are no existing encumbrances, and the title is clear. Our API automates these checks, reducing the typical property verification timeline from weeks to days.

Real estate platforms and proptech companies use property verification to build trust in their listings. Verified ownership adds credibility to property listings and helps buyers make informed decisions. RERA-registered projects can be cross-verified for developer credentials and project approval status.

Insurance companies use property verification for property insurance underwriting — confirming ownership, property type, and valuation data before issuing policies. Government agencies use our API for property tax assessment, land acquisition planning, and urban development initiatives.

VeriSekure's Property API covers properties across major Indian states with varying coverage depth depending on state-level digitization of land records.`,
    features: [
      "Property ownership confirmation from official records",
      "Encumbrance certificate (EC) verification",
      "Title chain and transfer history",
      "Survey/plot number and area validation",
      "Property type classification",
      "Registration and sale deed details",
      "RERA project cross-verification",
      "Multi-state coverage for major states",
    ],
    useCases: [
      "Mortgage and home loan underwriting",
      "Real estate purchase due diligence",
      "Property listing verification for platforms",
      "Property insurance underwriting",
      "Land acquisition planning",
      "Property tax assessment",
      "Construction finance collateral verification",
      "NRI property ownership confirmation",
    ],
    faqs: [
      { q: "What does property ownership verification include?", a: "It includes registered owner details, property description, survey/plot number, area, property type, registration details, and the chain of ownership transfers." },
      { q: "Can it check for existing mortgages or liens?", a: "Yes. Our encumbrance verification checks for existing mortgages, liens, court orders, and other encumbrances that may affect the property title." },
      { q: "How does title verification work?", a: "Title verification traces the chain of ownership transfers through official records, identifying potential risks like disputed inheritances or unauthorized transfers." },
      { q: "Which states are covered?", a: "We cover properties across major Indian states with varying depth depending on state-level digitization. Coverage is expanding continuously as more states digitize records." },
      { q: "How long does property verification take?", a: "Basic ownership checks return in seconds. Comprehensive title and encumbrance verification may take 1-3 business days depending on the state and record availability." },
    ],
  },
  "fssai-verification": {
    slug: "fssai-verification",
    seoTitle: "FSSAI License Verification API — Food Business Check | VeriSekure",
    metaDescription: "Verify FSSAI food license details in real-time — check license number, business name, validity, and food categories. Essential for food delivery and supply chain compliance.",
    headline: "FSSAI License Verification API",
    intro: "Verify FSSAI food safety license details in real-time — validate license number, business name, license type, validity period, and permitted food categories for food industry compliance.",
    parentCategory: "Business / KYB Verification",
    parentSlug: "business-kyb",
    longContent: `FSSAI (Food Safety and Standards Authority of India) license verification is mandatory for any business involved in food manufacturing, processing, distribution, or sale in India. Every food business operator (FBO) must hold a valid FSSAI license or registration, and displaying the 14-digit license number on packaging and establishments is a legal requirement. VeriSekure's FSSAI Verification API enables businesses to validate food licenses in real-time.

Our API verifies the FSSAI license number against the FSSAI database and returns comprehensive details including the licensee name, business name, license type (basic registration, state license, or central license), address, food categories permitted, license issue date, expiry date, and current license status. This information enables businesses to confirm the legitimacy and compliance status of food businesses.

For food delivery platforms like Zomato and Swiggy, FSSAI verification is a regulatory requirement during restaurant onboarding. Platforms must ensure that all listed restaurants hold valid FSSAI licenses. Our API automates this verification, checking license validity and permitted food categories before a restaurant goes live on the platform.

Food supply chain companies — distributors, wholesalers, and retailers — use FSSAI verification for vendor compliance. Before purchasing from a supplier or allowing a vendor to supply food products, companies verify the supplier's FSSAI license to ensure they are authorized to handle the types of food products being traded.

E-commerce platforms selling food products must verify seller FSSAI licenses as part of onboarding compliance. This includes checking that the license covers the specific food categories the seller intends to list on the platform. Our API supports food category matching to automate this validation.

For food manufacturers, FSSAI verification is part of raw material sourcing compliance. Manufacturers must ensure their ingredient suppliers hold valid licenses, and this verification must be documented for FSSAI inspections and audits.

Hotels, catering services, and institutional food providers use FSSAI verification for their own compliance documentation as well as for verifying sub-contractors and suppliers in their food supply chain.

Our FSSAI API supports individual and bulk verification, making it suitable for both single-business checks and large-scale platform onboarding. Results are returned in structured JSON format with clear license status indicators.`,
    features: [
      "FSSAI license number validation",
      "Business name and licensee details",
      "License type identification (Basic/State/Central)",
      "Permitted food category verification",
      "License validity and expiry date",
      "Current license status check",
      "Address and establishment details",
      "Bulk verification for platform onboarding",
    ],
    useCases: [
      "Food delivery platform restaurant onboarding",
      "E-commerce food seller verification",
      "Supply chain vendor compliance",
      "Food manufacturing supplier verification",
      "Hotel and catering compliance audits",
      "Retail food product listing validation",
      "Government food safety enforcement",
      "Export compliance documentation",
    ],
    faqs: [
      { q: "What details does FSSAI verification return?", a: "The API returns licensee name, business name, license type, address, permitted food categories, issue date, expiry date, and current license status." },
      { q: "Can it check which food categories a license covers?", a: "Yes. The API returns the specific food categories permitted under the license, enabling automated matching against the products being sold or manufactured." },
      { q: "Is FSSAI verification mandatory for food delivery apps?", a: "Yes. FSSAI mandates that food delivery platforms verify restaurant licenses before listing them. Our API automates this compliance requirement." },
      { q: "How current is the FSSAI data?", a: "We verify against the FSSAI database in real-time, ensuring you get the latest license status, including any suspensions, cancellations, or renewals." },
      { q: "Can I verify licenses in bulk?", a: "Yes. Our batch API supports bulk FSSAI verification for platforms onboarding multiple food businesses simultaneously." },
    ],
  },
  "ecourt-case-search": {
    slug: "ecourt-case-search",
    seoTitle: "eCourt Case Search API — Court Case Lookup India | VeriSekure",
    metaDescription: "Search eCourt database for civil and criminal cases across Indian district courts and high courts. Verify litigation history for background checks and due diligence.",
    headline: "eCourt Case Search API",
    intro: "Search India's eCourt database for civil and criminal cases across district courts and high courts. Verify litigation history, case status, and hearing details for comprehensive legal due diligence.",
    parentCategory: "Legal, Court & Criminal Checks",
    parentSlug: "legal-criminal",
    longContent: `eCourt case search is an essential component of legal due diligence, background verification, and risk assessment in India. The eCourt system, maintained by the Department of Justice, digitizes case records from district courts and high courts across India — covering millions of civil and criminal cases. VeriSekure's eCourt Case Search API provides programmatic access to this vast database for comprehensive litigation screening.

Our API enables searches by party name, advocate name, case number, CNR (Case Number Record) number, or FIR number. It returns matching case records including case type (civil/criminal), case number, filing date, court name, judge details, current status (pending/disposed/reserved), next hearing date, and party names. This comprehensive data enables businesses to assess an individual's or entity's litigation profile quickly and accurately.

For lending institutions, litigation screening is a critical part of borrower assessment. Borrowers involved in active civil disputes (property disputes, recovery suits, cheque bounce cases) or criminal proceedings represent higher risk. Our API enables lenders to identify these risks before loan disbursement, protecting their portfolios from potential defaults related to legal liabilities.

Background verification companies use eCourt searches as a standard component of employment screening. Employers — especially in regulated industries like banking, financial services, and government — need to know if a candidate has any pending criminal cases or significant civil litigation that could affect their suitability for the role.

Real estate professionals use eCourt case search to check for property-related litigation. Before a property transaction, buyers and lenders need to verify that the property isn't involved in ownership disputes, partition suits, or injunction orders that could affect the transaction.

For corporate due diligence, our API helps businesses assess potential business partners, vendors, and acquisition targets by checking their litigation history. Companies with excessive litigation or specific types of legal disputes (fraud, regulatory violations) may represent elevated business risk.

Insurance companies use litigation search during large claims processing, checking whether claimants or policyholders have patterns of litigation that might indicate fraudulent behavior.

Our eCourt API covers district courts across all Indian states and high courts, with case records dating back several years depending on the court's digitization timeline. The API supports fuzzy name matching to handle spelling variations and provides structured results for easy integration.`,
    features: [
      "Multi-criteria case search (name, CNR, FIR, case number)",
      "Civil and criminal case coverage",
      "District court and high court records",
      "Case status and hearing date tracking",
      "Party name and advocate details",
      "Historical case record access",
      "Fuzzy name matching for variations",
      "Structured JSON response format",
    ],
    useCases: [
      "Borrower litigation screening for lending",
      "Pre-employment legal background check",
      "Property dispute verification",
      "Corporate due diligence for M&A",
      "Vendor and partner risk assessment",
      "Insurance claim investigation",
      "Regulatory compliance screening",
      "Tenant screening for property management",
    ],
    faqs: [
      { q: "What courts does the eCourt search cover?", a: "Our API covers district courts across all Indian states and high courts, accessing the eCourt database maintained by the Department of Justice." },
      { q: "Can I search by name?", a: "Yes. The API supports searches by party name, advocate name, case number, CNR number, and FIR number for flexible case discovery." },
      { q: "Does it show case status and next hearing?", a: "Yes. For pending cases, the API returns current case status, next hearing date, court name, and judge details for ongoing case tracking." },
      { q: "How far back do records go?", a: "Record availability depends on the court's digitization timeline. Most district courts have records from the past 5-15 years, with coverage expanding continuously." },
      { q: "Can it detect property-related cases?", a: "Yes. By searching party names or property identifiers, you can identify property disputes, partition suits, and injunction orders related to specific properties." },
    ],
  },
  "address-verification": {
    slug: "address-verification",
    seoTitle: "Address Verification API — India Address Validation | VeriSekure",
    metaDescription: "Verify and standardize Indian addresses in real-time. Match addresses against official records, validate pincodes, and confirm residential or business addresses.",
    headline: "Address Verification API",
    intro: "Verify, standardize, and match Indian addresses in real-time. Validate against official records, confirm pincodes, and ensure accurate address data for deliveries, KYC, and compliance.",
    parentCategory: "Identity & KYC Verification",
    parentSlug: "identity-kyc",
    longContent: `Address verification is a fundamental requirement across lending, e-commerce, logistics, insurance, and KYC compliance in India. Inaccurate addresses cause failed deliveries, loan defaults, compliance violations, and fraud. India's addressing system — with its mix of structured and unstructured formats, regional language variations, and incomplete postal infrastructure in rural areas — makes address verification particularly challenging. VeriSekure's Address Verification API provides comprehensive address validation, standardization, and matching capabilities.

Our API performs multi-layer address verification. Pincode validation confirms that the pincode is valid and corresponds to the stated city, state, and post office. Address format standardization converts unstructured address text into a structured format with proper fields for house number, street, locality, city, district, state, and pincode — improving data quality for downstream processes.

Address matching compares a submitted address against reference addresses from official sources like Aadhaar, Voter ID, or utility records. The API uses intelligent matching algorithms that account for common Indian address variations — abbreviations (Rd vs Road, St vs Street), building name variations, landmark references, and regional language transliterations. A match confidence score enables businesses to set thresholds for automated address acceptance.

For lending institutions, address verification is a mandatory KYC requirement. RBI mandates that customer addresses be verified against officially valid documents. Our API automates this by comparing the submitted address against Aadhaar or Voter ID address data, generating a match score and flagging significant discrepancies.

E-commerce and logistics companies use address verification to reduce delivery failures. By validating and standardizing addresses at the point of order, businesses can catch errors before dispatch — saving shipping costs and improving customer satisfaction. Our API also provides serviceability checks, confirming whether a given address is serviceable by major logistics providers.

Insurance companies verify customer addresses during policy issuance and claims processing. Address misrepresentation can affect policy pricing (especially for property and vehicle insurance) and claims validity.

For businesses operating in rural India, address verification is especially challenging due to the lack of standardized addressing. Our API handles rural addressing patterns, village names, gram panchayat references, and landmark-based addressing that are common in non-urban areas.

Our Address API supports individual and bulk verification, handling millions of address records for database cleaning and periodic re-verification campaigns.`,
    features: [
      "Real-time pincode and postal validation",
      "Address format standardization",
      "Intelligent address matching with confidence scoring",
      "Multi-language and transliteration support",
      "Aadhaar and Voter ID address cross-verification",
      "Rural and urban address handling",
      "Logistics serviceability check",
      "Bulk address cleaning and processing",
    ],
    useCases: [
      "KYC address verification compliance",
      "E-commerce delivery address validation",
      "Lending customer address confirmation",
      "Insurance address risk assessment",
      "Logistics route optimization",
      "Customer database address cleaning",
      "Rural banking address verification",
      "Government welfare scheme targeting",
    ],
    faqs: [
      { q: "How does address matching work?", a: "Our AI-powered matching compares submitted addresses against official records, handling abbreviations, regional variations, and transliterations with a confidence score for decision-making." },
      { q: "Can it handle rural Indian addresses?", a: "Yes. Our API handles rural addressing patterns including village names, gram panchayat references, and landmark-based addressing common in non-urban India." },
      { q: "Does it validate pincodes?", a: "Yes. The API validates pincodes against India Post records and confirms correspondence with the stated city, state, and post office area." },
      { q: "Can it standardize messy address data?", a: "Yes. The API converts unstructured address text into standardized fields — house number, street, locality, city, district, state, and pincode." },
      { q: "Does it integrate with KYC verification?", a: "Yes. The API can cross-verify submitted addresses against Aadhaar and Voter ID address data for KYC compliance." },
    ],
  },
};
