export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceCategory {
  slug: string;
  seoTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;
  services: { name: string; desc: string }[];
  ctaText: string;
  longContent: string;
  useCases: string[];
  faqs: ServiceFAQ[];
}

export const serviceCategories: Record<string, ServiceCategory> = {
  "identity-kyc": {
    slug: "identity-kyc",
    seoTitle: "Identity & KYC Verification APIs in India | VeriSekure",
    metaDescription: "Verify Aadhaar, PAN, Voter ID, Passport, Driving License, CKYC, face liveness, mobile, email, and address in real-time with VeriSekure APIs.",
    headline: "Identity & KYC Verification",
    intro: "Verify individuals instantly with India's most comprehensive identity verification suite. From Aadhaar and PAN to face liveness and address intelligence — all in real-time, fully compliant.",
    services: [
      { name: "Aadhaar Verification", desc: "Validate Aadhaar number authenticity and retrieve demographic data securely via UIDAI-compliant APIs." },
      { name: "PAN Verification", desc: "Verify PAN card details including name, date of birth, and active status in real-time." },
      { name: "Voter ID Verification", desc: "Authenticate Voter ID card details for identity and address confirmation." },
      { name: "Passport Verification", desc: "Validate Indian passport number, name, and expiry status instantly." },
      { name: "Driving License Verification", desc: "Check DL validity, class of vehicle, issue and expiry dates via transport authority data." },
      { name: "CKYC Search & Download", desc: "Search and retrieve Central KYC records to reduce onboarding friction and eliminate redundant verification." },
      { name: "Face Match & Liveness", desc: "Prevent deepfake, replay, and impersonation fraud with AI-powered face matching and liveness detection." },
      { name: "Mobile / Telecom Verification", desc: "Verify mobile number ownership, carrier, and active status for contact validation." },
      { name: "Email Verification", desc: "Validate email address format, deliverability, and domain authenticity." },
      { name: "Address Verification", desc: "Verify residential and business addresses using multiple data sources for accurate validation." },
      { name: "Address Matching & Standardization", desc: "Standardize and match addresses across formats for consistent data quality." },
    ],
    ctaText: "Start verifying identities with VeriSekure's KYC APIs today.",
    longContent: `Identity verification is the foundation of every secure digital transaction in India. As businesses move to digital-first models, they must ensure that the person on the other end of a screen is who they claim to be. Without robust identity verification, organizations expose themselves to synthetic identity fraud, impersonation, fake account creation, and regulatory penalties under RBI, IRDAI, and SEBI mandates.

VeriSekure's Identity & KYC Verification suite provides a unified set of real-time APIs that allow businesses to verify individuals against government-issued identity documents, biometric data, and contact information. Whether you're a fintech company onboarding a new borrower, an insurance firm underwriting a policy, or a marketplace verifying a new seller, our APIs deliver instant, accurate, and compliant identity checks.

Our Aadhaar Verification API connects directly to UIDAI-approved channels to validate Aadhaar numbers and retrieve demographic data securely, ensuring that only genuine Aadhaar holders pass through your onboarding flow. PAN Verification confirms the taxpayer's identity, active status, and name match — critical for financial transactions and tax compliance. For additional layers of identity assurance, Voter ID and Passport Verification APIs authenticate government-issued documents in real-time.

Face Match and Liveness Detection uses advanced AI models to prevent deepfake attacks, photo replays, and impersonation fraud. The system compares a live selfie against a reference ID photo and performs liveness checks to confirm the user is physically present. This is essential for video KYC, remote onboarding, and high-value transaction approvals.

Central KYC (CKYC) Search and Download simplifies the onboarding journey by retrieving existing KYC records from India's Central Registry. This eliminates the need for customers to submit documents repeatedly, reducing drop-off rates and improving user experience. Mobile and Email Verification round out the suite by validating contact information — confirming that the phone number and email belong to the user and are active.

Address Verification and Matching APIs ensure that residential and business addresses are accurate, standardized, and match across different data sources. This is particularly valuable for lending, logistics, and compliance workflows where address accuracy directly impacts business outcomes.

VeriSekure's KYC APIs are designed for sub-second response times, 99.9% uptime, and full compliance with Indian regulatory requirements. With simple REST API integration, comprehensive documentation, and dedicated developer support, businesses can go live within days, not months.`,
    useCases: [
      "Fintech digital onboarding and e-KYC",
      "Bank account opening with video KYC",
      "Insurance policy issuance and underwriting",
      "E-commerce seller and buyer verification",
      "Telecom SIM activation and subscriber KYC",
      "HR background verification for new employees",
      "Government beneficiary identity validation",
      "Rental tenant and landlord verification",
    ],
    faqs: [
      { q: "What identity documents can VeriSekure verify?", a: "VeriSekure can verify Aadhaar, PAN, Voter ID, Passport, Driving License, and CKYC records in real-time through secure government-connected APIs." },
      { q: "Is VeriSekure compliant with RBI KYC guidelines?", a: "Yes. All our identity verification APIs are built to meet RBI, IRDAI, and SEBI KYC compliance requirements, including e-KYC and video KYC mandates." },
      { q: "How fast are identity verification results?", a: "Most identity checks return results in under 2 seconds, enabling instant onboarding and real-time decision-making." },
      { q: "Can face liveness detection prevent deepfake fraud?", a: "Yes. Our AI-powered liveness detection analyzes facial movements, depth, and texture to detect deepfakes, photo replays, and mask attacks with high accuracy." },
      { q: "Does VeriSekure support bulk identity verification?", a: "Yes. Our APIs support both individual and batch verification requests, making them suitable for high-volume onboarding and re-verification campaigns." },
    ],
  },
  "financial-banking": {
    slug: "financial-banking",
    seoTitle: "Financial & Banking Verification APIs in India | VeriSekure",
    metaDescription: "Verify bank accounts, income, credit scores, and run AML/sanction screening with VeriSekure's financial verification APIs.",
    headline: "Financial & Banking Verification",
    intro: "Make smarter lending and onboarding decisions with real-time financial intelligence — bank account validation, income verification, credit bureau integration, and AML compliance.",
    services: [
      { name: "Bank Account Verification (Penny Drop)", desc: "Validate bank account ownership and active status via penny drop or reverse penny drop methods." },
      { name: "IFSC Validation", desc: "Verify IFSC codes and retrieve bank branch details for accurate payment routing." },
      { name: "Account Name Match", desc: "Cross-verify account holder name against identity documents for ownership confirmation." },
      { name: "Income Verification", desc: "Verify income levels through bank statements, ITR data, and alternate data sources." },
      { name: "Credit Bureau Score", desc: "Retrieve credit scores from major bureaus for lending risk assessment." },
      { name: "Full Credit Report", desc: "Access comprehensive credit reports including payment history, defaults, and credit utilization." },
      { name: "AML / Sanction Screening", desc: "Screen individuals and entities against global AML, sanctions, and watchlists in real-time." },
      { name: "PEP Check", desc: "Identify Politically Exposed Persons for enhanced due diligence in high-risk transactions." },
      { name: "Digital Footprint Risk", desc: "Assess digital presence and behavioral signals for fraud risk scoring." },
    ],
    ctaText: "Power smarter financial decisions with VeriSekure APIs.",
    longContent: `Financial verification is a critical pillar of modern banking, lending, and fintech operations. Every loan disbursement, account opening, and payment transaction carries inherent risk — from fraudulent bank accounts and inflated income claims to money laundering and sanctions violations. Without accurate financial verification, businesses face rising non-performing assets (NPAs), regulatory penalties, and reputational damage.

VeriSekure's Financial & Banking Verification APIs provide real-time intelligence to validate bank accounts, verify income, assess creditworthiness, and screen for anti-money laundering (AML) risks. Our APIs are trusted by digital lenders, banks, NBFCs, insurance companies, and payment platforms to make faster, safer financial decisions.

Bank Account Verification through penny drop and reverse penny drop methods confirms that an account exists, is active, and belongs to the claimed individual. This is essential for loan disbursement, salary payments, and refund processing. IFSC Validation ensures accurate payment routing by verifying branch codes and retrieving bank details. Account Name Match cross-references the account holder's name against identity documents, preventing misdirected payments and fraudulent claims.

Income Verification is a game-changer for lending businesses. Our APIs analyze bank statements, ITR filings, and alternate data signals to provide a reliable picture of the applicant's income. This enables more accurate underwriting, reduces default rates, and supports responsible lending practices. Credit Bureau integration provides instant access to credit scores and comprehensive credit reports from major Indian bureaus, including payment history, outstanding debts, defaults, and credit utilization metrics.

AML and Sanction Screening is non-negotiable for regulated financial institutions. VeriSekure screens individuals and entities against global watchlists, sanctions databases, PEP (Politically Exposed Persons) lists, and adverse media in real-time. This helps businesses meet their regulatory obligations under PMLA and RBI guidelines while preventing exposure to money laundering and terrorist financing risks.

Digital Footprint Risk scoring analyzes an applicant's digital presence and behavioral signals to identify synthetic identities, disposable contacts, and high-risk profiles. Combined with traditional financial checks, this provides a holistic risk assessment that significantly improves fraud detection rates.

All financial verification APIs are designed for enterprise-grade security, with end-to-end encryption, audit logging, and consent-based data access. Integration takes minutes with our RESTful APIs, SDKs, and comprehensive documentation.`,
    useCases: [
      "Loan underwriting and pre-approval checks",
      "Bank account validation before disbursement",
      "Income verification for credit assessment",
      "AML compliance for financial institutions",
      "Payment fraud prevention",
      "Insurance premium risk assessment",
      "Vendor and supplier financial due diligence",
      "Regulatory compliance reporting",
    ],
    faqs: [
      { q: "How does penny drop verification work?", a: "We deposit a small amount (₹1) into the provided bank account and verify the account holder's name, account status, and IFSC code. Reverse penny drop uses UPI for instant verification without a deposit." },
      { q: "Can VeriSekure verify income without bank statements?", a: "Yes. We support multiple income verification methods including ITR-based verification, employer verification, and alternate data signals for a comprehensive income assessment." },
      { q: "Is AML screening available for international entities?", a: "Yes. Our AML screening covers global sanctions lists, PEP databases, and adverse media from international regulatory bodies." },
      { q: "How frequently are credit bureau scores updated?", a: "Credit scores are fetched in real-time from the bureau at the time of your API request, ensuring you always get the latest data." },
      { q: "Can these APIs be used for recurring monitoring?", a: "Yes. You can set up periodic re-verification and continuous monitoring for bank accounts, AML status, and credit changes." },
    ],
  },
  "business-kyb": {
    slug: "business-kyb",
    seoTitle: "Business KYB & Company Verification APIs in India | VeriSekure",
    metaDescription: "Verify GST, CIN, MSME, directors, UBOs, and business licenses with VeriSekure's KYB verification APIs for vendor and merchant onboarding.",
    headline: "Business / KYB Verification",
    intro: "Authenticate businesses, verify corporate entities, and screen directors and UBOs with comprehensive KYB APIs designed for vendor onboarding, merchant verification, and B2B compliance.",
    services: [
      { name: "GST Verification", desc: "Validate GSTIN, check filing status, and retrieve business registration details instantly." },
      { name: "CIN / MCA Company Details", desc: "Verify company registration, incorporation date, directors, and compliance status via MCA database." },
      { name: "MSME Verification", desc: "Authenticate MSME Udyam registration number and business classification." },
      { name: "PAN to Company Mapping", desc: "Map PAN numbers to associated company entities for corporate verification." },
      { name: "Director KYC", desc: "Verify director identity, DIN status, and associated companies for compliance." },
      { name: "UBO / Ownership Check", desc: "Identify Ultimate Beneficial Owners for AML compliance and corporate transparency." },
      { name: "Shop Establishment Verification", desc: "Validate shop and establishment registration for local business verification." },
      { name: "FSSAI License Verification", desc: "Verify food business license authenticity and validity for F&B sector compliance." },
      { name: "Trade License Verification", desc: "Authenticate municipal trade licenses for business legitimacy checks." },
    ],
    ctaText: "Verify businesses and vendors with VeriSekure KYB APIs.",
    longContent: `Know Your Business (KYB) verification is essential for any organization that works with external vendors, merchants, suppliers, or business partners. In India's rapidly growing B2B ecosystem, fake shell companies, fraudulent GST registrations, and unverified business entities pose significant financial and legal risks. Without proper KYB checks, businesses expose themselves to supply chain fraud, tax evasion liability, and regulatory non-compliance.

VeriSekure's Business & KYB Verification APIs provide comprehensive, real-time validation of business entities across multiple government databases. From GST registration and MCA company records to MSME certification and director screening, our APIs help organizations build trusted B2B relationships with confidence.

GST Verification is the starting point for most business checks in India. Our API validates GSTIN authenticity, retrieves the business name, registration date, filing status, and compliance history. This is critical for marketplace onboarding, vendor management, and invoice verification. Companies can detect fake or cancelled GST registrations before entering into business relationships.

CIN and MCA Company Details verification provides deep insights into company registration, incorporation date, authorized capital, director information, and annual compliance status. This is essential for corporate due diligence, investment decisions, and partnership evaluations. MSME Verification authenticates Udyam registration numbers, confirming whether a business qualifies for MSME benefits and government schemes.

Director KYC and UBO (Ultimate Beneficial Ownership) checks are increasingly mandated by regulators for enhanced due diligence. Our APIs verify director identities, DIN status, and directorships across companies, helping detect shell company networks and nominee director arrangements. UBO identification reveals the true ownership structure behind complex corporate hierarchies — a key requirement for AML compliance.

License and establishment verification APIs cover FSSAI food licenses, shop establishment registrations, and municipal trade licenses. These are particularly valuable for food delivery platforms, e-commerce marketplaces, and service aggregators that need to verify the legitimacy of businesses operating on their platforms.

VeriSekure's KYB suite is trusted by banks, NBFCs, fintech companies, marketplaces, and enterprises for vendor onboarding, merchant verification, loan underwriting for business loans, and regulatory compliance. All APIs deliver real-time results with high accuracy and are designed for seamless integration into existing business workflows.`,
    useCases: [
      "Marketplace vendor and seller onboarding",
      "Business loan underwriting and KYB",
      "Supply chain vendor due diligence",
      "Invoice and GST fraud detection",
      "Corporate due diligence for investments",
      "MSME scheme eligibility verification",
      "Director and UBO screening for AML",
      "E-commerce merchant verification",
    ],
    faqs: [
      { q: "Can VeriSekure detect fake GST registrations?", a: "Yes. Our GST Verification API checks registration status, filing history, and compliance — helping you identify cancelled, suspended, or fraudulent GST registrations." },
      { q: "What is UBO verification and why is it important?", a: "UBO (Ultimate Beneficial Owner) verification identifies the real individuals who control a company, even through complex ownership structures. It's essential for AML compliance and preventing shell company fraud." },
      { q: "Does VeriSekure support bulk business verification?", a: "Yes. Our APIs support batch processing for high-volume vendor onboarding and periodic re-verification of existing business partners." },
      { q: "Can I verify FSSAI licenses for food delivery partners?", a: "Yes. Our FSSAI License Verification API instantly validates food business license authenticity, validity period, and business category." },
      { q: "How current is the MCA company data?", a: "We fetch data in real-time from MCA databases, ensuring you get the latest company registration, director, and compliance information." },
    ],
  },
  "employment-education": {
    slug: "employment-education",
    seoTitle: "Employment & Education Verification APIs in India | VeriSekure",
    metaDescription: "Verify employment history, education credentials, UAN, ESIC, and professional licenses with VeriSekure background verification APIs.",
    headline: "Employment, Education & Professional Verification",
    intro: "Validate employment records, academic credentials, and professional licenses for comprehensive background verification and HR compliance.",
    services: [
      { name: "UAN Verification", desc: "Verify Universal Account Number for PF and employment history confirmation." },
      { name: "ESIC Verification", desc: "Validate Employee State Insurance records for employment verification." },
      { name: "Previous Employment Check", desc: "Verify previous employer details, tenure, and designation for background screening." },
      { name: "Degree / Certificate Verification", desc: "Authenticate academic degrees and certificates against university records." },
      { name: "University Validation", desc: "Verify university accreditation and recognition status." },
      { name: "Doctor Verification", desc: "Validate medical practitioner registration with state/national medical councils." },
      { name: "Nurse Verification", desc: "Verify nursing registration and license status for healthcare compliance." },
    ],
    ctaText: "Verify credentials and employment with VeriSekure APIs.",
    longContent: `Background verification of employment history, educational credentials, and professional licenses is a fundamental requirement for organizations across all industries. Resume fraud is widespread — studies indicate that up to 30% of job applicants in India misrepresent their qualifications, employment history, or professional credentials. For businesses, hiring unverified candidates can lead to productivity losses, workplace safety risks, legal liability, and reputational damage.

VeriSekure's Employment, Education & Professional Verification APIs provide automated, real-time checks against government databases and institutional records. Our APIs are used by HR departments, staffing agencies, background verification companies, gig platforms, and educational institutions to make faster, more informed hiring and enrollment decisions.

UAN Verification is a powerful tool for confirming an individual's employment history. By validating the Universal Account Number against EPFO records, employers can verify the applicant's previous employers, employment tenure, and contribution history. This is far more reliable than self-reported employment data and helps detect fabricated work experience. ESIC Verification provides additional employment confirmation through Employee State Insurance records.

Previous Employment Checks go beyond UAN by verifying specific details such as job title, tenure, reason for leaving, and eligibility for rehire. This is especially important for senior roles, positions handling sensitive data, and regulated industries where background screening is mandatory.

Degree and Certificate Verification authenticates academic credentials against university records. Our APIs can verify degrees from recognized Indian universities, professional certifications, and diploma programs. This prevents candidates with fake degrees from slipping through the hiring process. University Validation confirms whether an institution is recognized by UGC or relevant regulatory bodies, helping identify degrees from unaccredited or fraudulent universities.

Professional License Verification covers medical practitioners, nurses, and other licensed professionals. Doctor Verification checks registration with state and national medical councils, confirming the practitioner's qualifications, registration status, and any disciplinary actions. Nurse Verification similarly validates nursing registration and license status. These checks are critical for hospitals, telemedicine platforms, and healthcare staffing companies.

VeriSekure's verification APIs are designed for speed and accuracy, delivering results in real-time with high match rates. Whether you're verifying a single candidate or processing thousands of background checks daily, our APIs scale to meet your needs with enterprise-grade reliability and security.`,
    useCases: [
      "Pre-employment background verification",
      "Staffing agency candidate screening",
      "Gig worker and contractor verification",
      "Hospital and healthcare staff credentialing",
      "University admission verification",
      "Ed-tech platform student validation",
      "Government employee screening",
      "Insurance agent onboarding",
    ],
    faqs: [
      { q: "Can VeriSekure verify employment history automatically?", a: "Yes. Our UAN Verification API checks EPFO records to confirm previous employers, tenure, and contribution history without manual intervention." },
      { q: "How does degree verification work?", a: "We verify academic credentials against university databases and registrar records to confirm degree authenticity, institution recognition, and graduation details." },
      { q: "Can professional medical licenses be verified?", a: "Yes. Our Doctor and Nurse Verification APIs check registration status with state and national medical councils in real-time." },
      { q: "Is this suitable for high-volume hiring?", a: "Absolutely. Our APIs support batch processing and can handle thousands of background verification requests daily with fast turnaround." },
      { q: "Does VeriSekure detect fake universities?", a: "Yes. Our University Validation API checks UGC recognition status to identify degrees from unaccredited or fraudulent institutions." },
    ],
  },
  "legal-criminal": {
    slug: "legal-criminal",
    seoTitle: "Legal, Court & Criminal Background Check APIs in India | VeriSekure",
    metaDescription: "Run criminal record searches, eCourt case lookups, CNR tracking, and litigation history checks with VeriSekure's legal verification APIs.",
    headline: "Legal, Court & Criminal Checks",
    intro: "Comprehensive legal and criminal screening APIs to identify litigation history, court cases, and criminal records for safer hiring, lending, and onboarding decisions.",
    services: [
      { name: "Criminal Record Search", desc: "Search criminal databases for convictions, FIRs, and pending cases across jurisdictions." },
      { name: "eCourt Case Search", desc: "Look up active and historical court cases across Indian eCourt databases." },
      { name: "CNR Case Status", desc: "Track case status using CNR (Case Number Record) for real-time litigation monitoring." },
      { name: "Litigation History", desc: "Retrieve comprehensive litigation history for individuals and entities." },
    ],
    ctaText: "Run background checks with VeriSekure legal APIs.",
    longContent: `Criminal and legal background checks are essential for risk management across hiring, lending, tenant screening, and business partnerships. In India, where court records are distributed across thousands of district and high courts, accessing accurate legal information has traditionally been slow, expensive, and unreliable. VeriSekure changes this by providing instant, API-based access to criminal records, court cases, and litigation history.

Our Criminal Record Search API queries multiple databases to identify convictions, FIRs (First Information Reports), and pending criminal cases against an individual. This covers both district-level and state-level criminal records, providing a comprehensive picture of an applicant's criminal background. For employers in regulated industries — banking, financial services, education, healthcare — criminal background checks are not just best practice but often a regulatory requirement.

The eCourt Case Search API provides access to India's vast eCourt database, covering millions of active and historical cases across district courts, high courts, and tribunals. Businesses can search by name, case number, or other identifiers to discover pending litigation, civil disputes, and criminal proceedings. This is invaluable for lenders assessing borrower risk, real estate companies screening tenants, and enterprises evaluating potential partners.

CNR (Case Number Record) tracking enables real-time monitoring of specific cases. Once you have a CNR number, our API provides instant updates on case status, hearing dates, orders, and outcomes. This is particularly useful for legal teams, compliance departments, and lending institutions that need to monitor ongoing litigation involving their customers or counterparties.

Litigation History provides a comprehensive view of all legal proceedings associated with an individual or entity — including civil suits, consumer complaints, tax disputes, and arbitration cases. This holistic view helps businesses identify litigious individuals, assess legal risk, and make more informed decisions about partnerships, hiring, and lending.

VeriSekure's legal verification APIs are designed to handle sensitive data with the highest levels of security and privacy. All searches are audit-logged, consent-based, and compliant with Indian privacy regulations. Results are delivered in structured formats that integrate seamlessly into existing risk assessment workflows, background verification platforms, and decision-making systems.

Whether you're a background verification company processing thousands of checks daily, a lender assessing borrower risk, or an enterprise screening vendors and partners, VeriSekure's legal APIs provide the speed, accuracy, and coverage you need.`,
    useCases: [
      "Pre-employment criminal background checks",
      "Tenant and landlord screening for rentals",
      "Borrower risk assessment for lending",
      "Vendor and supplier due diligence",
      "Partner and investor screening",
      "Insurance claims investigation",
      "Corporate governance and compliance",
      "Real estate transaction risk assessment",
    ],
    faqs: [
      { q: "How comprehensive is the criminal record search?", a: "Our search covers FIRs, convictions, and pending cases across district and state-level databases, providing nationwide criminal background intelligence." },
      { q: "Can I monitor ongoing court cases in real-time?", a: "Yes. Using CNR Case Status tracking, you can monitor case progress, hearing dates, and outcomes in real-time through our API." },
      { q: "Is consent required for criminal checks?", a: "Yes. All criminal and legal checks require proper consent from the individual being verified, in compliance with Indian privacy regulations." },
      { q: "Can businesses be screened for litigation?", a: "Yes. Our Litigation History API covers both individuals and entities, including civil suits, consumer complaints, and commercial disputes." },
      { q: "How fast are legal verification results?", a: "eCourt and CNR searches return results in seconds. Criminal record searches may take slightly longer depending on jurisdiction coverage, but most complete within minutes." },
    ],
  },
  "vehicle-mobility": {
    slug: "vehicle-mobility",
    seoTitle: "Vehicle & Driver Verification APIs in India | VeriSekure",
    metaDescription: "Verify driving licenses, vehicle RC, insurance, challans, permits, and driver identity with VeriSekure's mobility verification APIs.",
    headline: "Vehicle, Driver & Mobility Verification",
    intro: "Verify drivers, vehicles, and fleet partners with real-time APIs for driving license validation, RC checks, insurance verification, and compliance history.",
    services: [
      { name: "Driving License Verification", desc: "Validate DL number, class, validity, and restrictions from transport authority records." },
      { name: "DL Status / Expiry Check", desc: "Check real-time DL active status and upcoming expiry dates." },
      { name: "RC Verification (Lite / Full)", desc: "Verify vehicle registration certificate including owner, class, fuel type, and fitness status." },
      { name: "Vehicle Insurance Status", desc: "Check active insurance policy status and coverage validity for vehicles." },
      { name: "Challan / Violation Check", desc: "Retrieve traffic violations, pending challans, and compliance history for vehicles." },
      { name: "Permit & Fitness Check", desc: "Validate commercial vehicle permits and fitness certificate status." },
    ],
    ctaText: "Verify drivers and vehicles with VeriSekure APIs.",
    longContent: `India's logistics, ride-hailing, delivery, and fleet management industries are growing at unprecedented scale. With millions of drivers, delivery partners, and vehicles on the road, ensuring safety, compliance, and trust is a massive operational challenge. Unverified drivers with expired licenses, uninsured vehicles, and undisclosed traffic violations create serious safety, legal, and financial risks for platform companies and fleet operators.

VeriSekure's Vehicle, Driver & Mobility Verification APIs provide real-time validation of drivers, vehicles, and fleet compliance. Our APIs connect to transport authority databases across India to deliver instant verification results that help mobility platforms build safer, more compliant operations.

Driving License Verification validates the DL number against regional transport authority (RTA) records, confirming the license class, validity period, restrictions, and holder identity. This is the first and most critical check when onboarding a new driver or delivery partner. DL Status and Expiry checks provide ongoing monitoring capabilities, alerting platforms when a driver's license is about to expire, has been suspended, or has been revoked.

RC Verification (Registration Certificate) confirms vehicle ownership, vehicle class, fuel type, registration validity, and fitness certificate status. We offer both Lite and Full RC verification options — Lite provides essential ownership and registration details, while Full includes comprehensive data including hypothecation status, insurance details, and complete vehicle specifications. This is essential for fleet management, vehicle financing, and insurance underwriting.

Vehicle Insurance Status verification confirms whether a vehicle has active insurance coverage and the policy validity period. Operating uninsured vehicles creates significant legal liability. Challan and Violation Check retrieves the complete traffic violation history for a vehicle, including pending challans, fine amounts, and violation types. This helps fleet operators assess driver behavior and vehicle compliance.

Permit and Fitness Check validates commercial vehicle permits and fitness certificates, ensuring that commercial vehicles meet regulatory requirements for passenger or goods transport.

Our mobility verification APIs are designed for high-volume processing, making them ideal for ride-hailing apps, delivery platforms, logistics companies, and fleet management systems that onboard thousands of drivers and vehicles monthly.`,
    useCases: [
      "Ride-hailing driver onboarding",
      "Delivery partner verification",
      "Fleet management and compliance",
      "Vehicle financing and loan underwriting",
      "Insurance policy issuance for vehicles",
      "Commercial transport permit validation",
      "Second-hand vehicle purchase verification",
      "Logistics company driver screening",
    ],
    faqs: [
      { q: "Can VeriSekure verify driving licenses from all Indian states?", a: "Yes. Our DL Verification API connects to transport authority databases across all Indian states and union territories for nationwide coverage." },
      { q: "What's the difference between RC Lite and RC Full?", a: "RC Lite provides essential details like owner name, vehicle class, and registration validity. RC Full includes additional data such as hypothecation status, insurance details, fitness certificate, and complete vehicle specifications." },
      { q: "Can I monitor driver license expiry automatically?", a: "Yes. Our APIs support scheduled re-verification to alert you when a driver's license is approaching expiry or has been suspended." },
      { q: "Does VeriSekure check vehicle insurance status?", a: "Yes. Our Vehicle Insurance Status API confirms active coverage, policy validity period, and insurer details in real-time." },
      { q: "Is this suitable for large fleet operations?", a: "Absolutely. Our APIs handle high-volume batch processing for fleet operators managing thousands of vehicles and drivers." },
    ],
  },
  "document-ai": {
    slug: "document-ai",
    seoTitle: "Document AI, OCR & Data Extraction APIs in India | VeriSekure",
    metaDescription: "Auto-extract and verify documents with AI-powered OCR, authenticity checks, and intelligent parsing using VeriSekure Document AI APIs.",
    headline: "Document AI & Data Extraction",
    intro: "Automate document processing with AI-powered OCR extraction, authenticity verification, and intelligent parsing for faster onboarding, lending, and claims processing.",
    services: [
      { name: "Document OCR Extraction", desc: "Extract text and structured data from scanned documents and images using advanced OCR." },
      { name: "Document Authenticity Check", desc: "Detect forged, tampered, or manipulated documents using AI-powered analysis." },
      { name: "ID Document Parsing", desc: "Parse identity documents (Aadhaar, PAN, DL, Passport) to extract structured fields automatically." },
      { name: "Claim / Invoice Extraction", desc: "Extract line items, totals, and metadata from insurance claims and invoices for processing automation." },
    ],
    ctaText: "Automate document workflows with VeriSekure Document AI.",
    longContent: `Document processing is one of the most time-consuming and error-prone aspects of business operations. From KYC onboarding to insurance claims processing, organizations handle millions of documents daily — identity cards, bank statements, income proofs, invoices, certificates, and more. Manual document review is slow, expensive, and prone to human error. Worse, it creates opportunities for document forgery and fraud.

VeriSekure's Document AI & Data Extraction APIs use advanced artificial intelligence, machine learning, and optical character recognition (OCR) technology to automate document processing end-to-end. Our APIs can extract structured data from documents, verify document authenticity, parse identity cards, and process insurance claims and invoices — all in real-time, with high accuracy.

Document OCR Extraction converts scanned documents, photographs, and PDF files into structured, machine-readable data. Our OCR engine handles multiple Indian languages, poor scan quality, handwritten text, and complex layouts with industry-leading accuracy. Whether you're processing bank statements, salary slips, utility bills, or government certificates, our OCR API extracts the data you need in a structured JSON format.

Document Authenticity Check is a critical defense against document fraud. Our AI models analyze document images to detect signs of tampering, forgery, and manipulation — including altered text, spliced photographs, modified dates, and fabricated stamps or signatures. This is essential for lending institutions that evaluate income documents, insurance companies processing claim documents, and HR departments verifying candidate credentials.

ID Document Parsing specializes in extracting structured fields from identity documents. Upload an Aadhaar card, PAN card, driving license, or passport image, and our API automatically extracts the name, date of birth, ID number, address, and other relevant fields. This eliminates manual data entry, reduces errors, and accelerates the onboarding process.

Claim and Invoice Extraction automates the processing of insurance claims and business invoices. Our AI models extract line items, totals, dates, policy numbers, and other metadata from complex documents, enabling straight-through processing and reducing turnaround times from days to minutes.

VeriSekure's Document AI APIs are built on state-of-the-art deep learning models trained on millions of Indian documents. They handle the unique challenges of Indian document formats, regional languages, and varied document quality with exceptional accuracy and speed.`,
    useCases: [
      "KYC document processing and data extraction",
      "Loan application document verification",
      "Insurance claims processing automation",
      "Invoice and receipt data extraction",
      "Academic certificate digitization",
      "Medical record processing",
      "Tax document parsing (ITR, Form 16)",
      "Contract and agreement analysis",
    ],
    faqs: [
      { q: "What document types can VeriSekure process?", a: "Our Document AI handles identity cards (Aadhaar, PAN, DL, Passport), bank statements, salary slips, invoices, insurance claims, certificates, and many more document types." },
      { q: "Can it detect forged or tampered documents?", a: "Yes. Our Document Authenticity Check uses AI to analyze documents for signs of tampering, including altered text, spliced images, modified dates, and fabricated stamps." },
      { q: "Does the OCR support Indian languages?", a: "Yes. Our OCR engine supports multiple Indian languages including Hindi, Tamil, Telugu, Kannada, Malayalam, Bengali, and more." },
      { q: "How accurate is the data extraction?", a: "Our AI models achieve over 95% accuracy on standard document types, with continuous improvement through machine learning on Indian document formats." },
      { q: "Can this be integrated into existing workflows?", a: "Yes. Our RESTful APIs integrate seamlessly into existing onboarding, lending, claims, and compliance workflows with minimal development effort." },
    ],
  },
  "risk-fraud": {
    slug: "risk-fraud",
    seoTitle: "Fraud Detection & Risk Intelligence APIs in India | VeriSekure",
    metaDescription: "Detect fraud, score risk, deduplicate identities, and build trust with VeriSekure's fraud risk, behavioral intelligence, and trust score APIs.",
    headline: "Risk, Fraud & Trust Intelligence",
    intro: "Proactive fraud detection and risk scoring APIs that combine multiple verification signals into actionable intelligence for automated decision-making.",
    services: [
      { name: "Fraud Risk Score", desc: "Multi-signal fraud scoring combining identity, financial, behavioral, and device intelligence." },
      { name: "Identity Deduplication", desc: "Detect duplicate identities across your user base to prevent fraud rings and multi-accounting." },
      { name: "Device / Behavioral Signals", desc: "Analyze device fingerprints and behavioral patterns for suspicious activity detection." },
      { name: "Trust Score API (0–1000)", desc: "Unified trust score combining all verification signals into a single 0–1000 confidence rating." },
    ],
    ctaText: "Build fraud-resistant systems with VeriSekure risk APIs.",
    longContent: `Fraud is the single biggest threat to digital businesses in India. From synthetic identity fraud and account takeover to payment fraud and loan stacking, the sophistication of fraud attacks is increasing exponentially. Traditional rule-based fraud detection systems are no longer sufficient — they generate too many false positives, miss emerging fraud patterns, and cannot adapt to new attack vectors in real-time.

VeriSekure's Risk, Fraud & Trust Intelligence APIs provide a next-generation approach to fraud detection. By combining multiple verification signals — identity data, financial intelligence, device fingerprints, behavioral patterns, and digital footprint analysis — into unified risk scores, our APIs enable businesses to detect and prevent fraud before financial loss occurs.

Fraud Risk Score is our flagship risk intelligence API. It analyzes multiple data points from across the VeriSekure verification ecosystem and external signals to generate a comprehensive fraud risk score for each user or transaction. The score considers identity verification results, financial behavior patterns, device intelligence, location signals, and historical fraud indicators. Businesses can use this score to automate approval, rejection, or manual review decisions based on their risk tolerance.

Identity Deduplication detects duplicate accounts and identity overlaps across your user base. Fraud rings often create multiple accounts using slight variations of the same identity — different phone numbers, slightly altered names, or shared device fingerprints. Our deduplication engine identifies these patterns, helping platforms prevent multi-accounting, referral abuse, and coordinated fraud attacks.

Device and Behavioral Signals provide a critical layer of fraud intelligence. Our APIs analyze device fingerprints (browser, OS, screen resolution, installed apps), behavioral patterns (typing speed, navigation patterns, session duration), and network signals (IP reputation, proxy/VPN detection, geolocation consistency) to identify suspicious activity. This is particularly effective against automated bot attacks, account takeover attempts, and social engineering fraud.

Trust Score API provides a unified 0–1000 confidence rating that combines all available verification signals into a single, easy-to-interpret score. A high trust score indicates a verified, low-risk user, while a low score flags potential fraud or incomplete verification. Businesses can integrate this score into their onboarding flows, transaction approval systems, and risk management dashboards for real-time decision-making.

VeriSekure's fraud intelligence is built on machine learning models trained on millions of Indian verification records. The models continuously learn from new fraud patterns, improving detection accuracy over time while minimizing false positives that hurt genuine users.`,
    useCases: [
      "Real-time transaction fraud detection",
      "Account opening fraud prevention",
      "Loan application fraud scoring",
      "Multi-accounting and referral abuse detection",
      "Payment fraud and chargeback prevention",
      "Bot and automated attack detection",
      "Account takeover prevention",
      "Trust-based access and limit decisions",
    ],
    faqs: [
      { q: "How does the Fraud Risk Score work?", a: "It combines multiple signals — identity verification, financial data, device fingerprints, behavioral patterns, and digital footprint — into a single risk score using machine learning models trained on millions of Indian verification records." },
      { q: "Can VeriSekure detect fraud rings?", a: "Yes. Our Identity Deduplication engine detects shared identities, overlapping devices, and coordinated patterns that indicate fraud ring activity across your platform." },
      { q: "What is the Trust Score API?", a: "The Trust Score provides a unified 0–1000 confidence rating for any user, combining all available verification signals into a single, actionable score for automated decision-making." },
      { q: "Does this work for real-time transaction monitoring?", a: "Yes. Our APIs are designed for sub-second response times, making them suitable for real-time transaction fraud detection and approval workflows." },
      { q: "Can the fraud models be customized for my business?", a: "Yes. While our default models work well across industries, we offer custom model tuning for enterprise clients to optimize fraud detection for specific business contexts and risk profiles." },
    ],
  },
  "property-land": {
    slug: "property-land",
    seoTitle: "Property & Land Verification APIs in India | VeriSekure",
    metaDescription: "Verify property ownership, land records, encumbrance certificates, RERA registration, and title documents with VeriSekure's property verification APIs.",
    headline: "Property & Land Verification",
    intro: "Comprehensive property and land verification APIs for real estate transactions, mortgage lending, and due diligence — verify ownership, title, encumbrance, RERA registration, and land records in real-time.",
    services: [
      { name: "Property Ownership Verification", desc: "Verify property ownership details against government land registry and revenue records." },
      { name: "Land Record Search", desc: "Search and retrieve land records including khasra, khatauni, and mutation entries across states." },
      { name: "Encumbrance Certificate Check", desc: "Check for existing mortgages, liens, and legal encumbrances on property titles." },
      { name: "RERA Registration Verification", desc: "Validate RERA registration status for real estate projects and developers." },
      { name: "Title Document Verification", desc: "Authenticate sale deeds, title certificates, and property documents for legitimacy." },
      { name: "Property Tax Payment Status", desc: "Verify property tax payment history and outstanding dues for municipal compliance." },
      { name: "Circle Rate / Guideline Value", desc: "Retrieve government-published circle rates and guideline values for property valuation." },
      { name: "Builder / Developer Verification", desc: "Verify developer credentials, project history, and regulatory compliance status." },
    ],
    ctaText: "Secure property transactions with VeriSekure verification APIs.",
    longContent: `Property and land verification is one of the most complex and critical aspects of real estate transactions in India. With land records historically maintained in fragmented, paper-based systems across thousands of tehsils and sub-registrar offices, verifying property ownership, title authenticity, and encumbrance status has been a major challenge. Fraud in real estate — including forged title documents, duplicate property sales, undisclosed encumbrances, and fake RERA registrations — costs Indian buyers and financial institutions billions of rupees annually.

VeriSekure's Property & Land Verification APIs bring digital verification to India's real estate ecosystem. Our APIs connect to digitized land record databases, sub-registrar offices, RERA portals, and municipal corporation systems across major Indian states to provide comprehensive property verification in real-time.

Property Ownership Verification confirms the current owner of a property by cross-referencing land registry records, revenue department data, and sub-registrar records. This is the foundational check for any property transaction — whether it's a purchase, mortgage, or lease. Buyers and lenders can verify that the person claiming to sell or mortgage a property is indeed the legal owner, preventing title fraud and unauthorized transactions.

Land Record Search provides access to digitized land records including khasra (plot-level records), khatauni (ownership records), and mutation entries (ownership transfer records). Our API supports multi-state land record search, covering major states like Maharashtra, Karnataka, Rajasthan, Uttar Pradesh, Madhya Pradesh, Tamil Nadu, and more. This enables buyers, lenders, and developers to trace ownership history and identify potential disputes.

Encumbrance Certificate (EC) verification is essential for mortgage lending and property purchases. The EC confirms whether a property has any existing mortgages, liens, court attachments, or other legal encumbrances. Banks and housing finance companies mandate EC verification before approving home loans. Our API retrieves EC data from sub-registrar offices, providing a clear picture of the property's encumbrance status.

RERA Registration Verification validates that a real estate project is registered under the Real Estate (Regulation and Development) Act. RERA registration is mandatory for all residential and commercial real estate projects above specified sizes. Unregistered projects expose buyers to construction delays, quality issues, and financial losses. Our API checks RERA registration status, project timeline, developer details, and compliance history across state RERA portals.

Title Document Verification uses AI-powered document analysis to authenticate sale deeds, gift deeds, partition deeds, and other property documents. Our system checks for signs of forgery, tampering, and inconsistencies in property documents, providing an additional layer of due diligence beyond ownership and encumbrance checks.

Property Tax Payment Status verification confirms whether property taxes are current, helping buyers identify properties with outstanding dues that may create legal complications post-purchase. Circle Rate and Guideline Value retrieval provides government-published property valuation benchmarks for stamp duty calculation, loan valuation, and fair market assessment.

Builder and Developer Verification validates the credentials, project track record, regulatory compliance, and financial health of real estate developers. This is critical for under-construction property purchases and for financial institutions providing project financing.`,
    useCases: [
      "Home loan and mortgage underwriting",
      "Property purchase due diligence",
      "Real estate developer assessment",
      "Rental property verification",
      "Commercial real estate transactions",
      "Land acquisition for development",
      "RERA compliance verification",
      "Property insurance underwriting",
    ],
    faqs: [
      { q: "Which states does property verification cover?", a: "We currently cover major states including Maharashtra, Karnataka, Rajasthan, Uttar Pradesh, Tamil Nadu, Madhya Pradesh, Telangana, and more — with continuous expansion to additional states." },
      { q: "Can VeriSekure check for property encumbrances?", a: "Yes. Our Encumbrance Certificate Check API retrieves existing mortgages, liens, court attachments, and other legal encumbrances from sub-registrar records." },
      { q: "How does RERA verification work?", a: "Our API checks the project's RERA registration status, registration number, developer details, project timeline, and compliance history across state RERA portals." },
      { q: "Can it verify land records across states?", a: "Yes. Our Land Record Search API supports multi-state access to digitized khasra, khatauni, and mutation records with a unified API interface." },
      { q: "Is this useful for home loan processing?", a: "Absolutely. Banks and housing finance companies use our property verification APIs for title search, encumbrance check, valuation, and RERA compliance — essential steps in home loan underwriting." },
    ],
  },
  "industry-bundles": {
    slug: "industry-bundles",
    seoTitle: "Industry Bundled Verification APIs — Pre-Built API Bundles | VeriSekure",
    metaDescription: "Pre-built verification API bundles for Fintech, Banking, NBFC, Insurance, E-Commerce, and Telecom. Get all required APIs in one integration with VeriSekure.",
    headline: "Industry Bundled API Solutions",
    intro: "Pre-built verification bundles combining the exact APIs each industry needs — from Fintech KYC to Banking AML to Insurance fraud prevention. One integration, complete compliance.",
    services: [
      { name: "Fintech Bundle", desc: "KYC + Bank Verification + AML + Credit Score + Income Verification — everything for digital lending and payment onboarding." },
      { name: "Lending / NBFC Bundle", desc: "KYC + Telecom + Bank + Credit Report + Fraud Score — comprehensive risk assessment for lending decisions." },
      { name: "Banking Bundle", desc: "CKYC + AML Screening + KYB + Income + Credit — regulatory-compliant onboarding and monitoring." },
      { name: "Insurance Bundle", desc: "KYC + Income Verification + Document AI + AML — fraud-free policy issuance and claims processing." },
      { name: "E-Commerce Bundle", desc: "KYC + GST Verification + Address + Fraud Score + RC/DL — trusted seller and delivery partner onboarding." },
      { name: "Telecom Bundle", desc: "KYC + Face Liveness + Address Verification + AML — secure SIM activation and subscriber onboarding." },
    ],
    ctaText: "Get your industry bundle from VeriSekure today.",
    longContent: `Every industry has unique verification requirements driven by regulatory mandates, business risks, and customer onboarding workflows. Building a verification stack from scratch — selecting individual APIs, managing multiple integrations, and ensuring compliance — is complex, time-consuming, and expensive. VeriSekure's Industry Bundled API Solutions solve this by providing pre-configured API bundles tailored to each industry's specific needs.

Our bundles combine the exact verification APIs that each industry requires, packaged into a single integration with unified documentation, consolidated billing, and optimized API orchestration. Instead of integrating 8-10 individual APIs, businesses can activate an industry bundle and get comprehensive verification coverage with a single integration effort.

The Fintech Bundle is designed for digital lending platforms, payment companies, and neobanks. It includes Identity KYC (Aadhaar, PAN, Face Match), Bank Account Verification, AML/Sanction Screening, Credit Bureau Integration, and Income Verification. This bundle covers the complete lending lifecycle from customer onboarding to creditworthiness assessment, with all APIs optimized for speed and accuracy in digital-first workflows.

The Lending / NBFC Bundle extends the Fintech bundle with additional risk assessment capabilities. It includes KYC verification, Telecom/Mobile verification, Bank Account validation, Full Credit Report access, and Fraud Risk Scoring. NBFCs and microfinance institutions face unique risk challenges — smaller ticket sizes, thinner credit files, and higher fraud exposure. This bundle provides the multi-layered risk intelligence needed for responsible lending in underserved segments.

The Banking Bundle is built for commercial banks, cooperative banks, and payment banks that must meet stringent RBI compliance requirements. It includes CKYC (Central KYC) integration, comprehensive AML/Sanction Screening, KYB (Know Your Business) verification, Income Verification, and Credit Bureau integration. This bundle enables banks to meet all regulatory mandates while streamlining the account opening and transaction monitoring process.

The Insurance Bundle addresses the unique verification needs of insurance companies across life, health, motor, and general insurance. It includes KYC verification, Income Verification (for sum assured validation), Document AI (for policy document and claims processing), and AML Screening. This bundle supports the full insurance lifecycle from proposal verification to claims adjudication.

The E-Commerce Bundle is designed for online marketplaces, quick commerce, and delivery platforms. It includes KYC for buyer/seller verification, GST Verification for merchant compliance, Address Verification for delivery accuracy, Fraud Risk Scoring for transaction safety, and RC/DL verification for delivery partner onboarding. This comprehensive bundle helps marketplaces build trusted ecosystems.

The Telecom Bundle supports mobile operators and MVNOs in meeting TRAI and DoT subscriber verification mandates. It includes KYC verification, Face Liveness Detection (for in-person and remote SIM activation), Address Verification, and AML Screening. This bundle is optimized for the high-volume, low-latency requirements of telecom customer onboarding.

Each bundle includes dedicated support, optimized API orchestration for faster response times, consolidated reporting and analytics, and preferential pricing compared to individual API subscriptions.`,
    useCases: [
      "Complete fintech onboarding in one integration",
      "NBFC lending risk assessment stack",
      "Bank account opening compliance",
      "Insurance policy lifecycle verification",
      "Marketplace seller and buyer trust",
      "Telecom SIM activation compliance",
      "Reducing multi-vendor integration complexity",
      "Unified compliance reporting and audit",
    ],
    faqs: [
      { q: "What is an industry bundle?", a: "An industry bundle is a pre-configured set of verification APIs tailored to a specific industry's requirements, packaged into a single integration with unified documentation and billing." },
      { q: "Can I customize a bundle?", a: "Yes. While our standard bundles cover most industry requirements, you can add or remove individual APIs to create a custom bundle that matches your specific verification workflow." },
      { q: "How much faster is bundle integration vs individual APIs?", a: "Bundles typically reduce integration time by 60-70% since you're working with a single, pre-configured integration instead of orchestrating multiple individual API calls." },
      { q: "Is pricing better with bundles?", a: "Yes. Industry bundles offer preferential pricing compared to subscribing to each API individually, with volume-based discounts and consolidated billing." },
      { q: "Can I switch between bundles?", a: "Yes. You can upgrade, downgrade, or switch between bundles as your business needs evolve. Our team will help you transition smoothly." },
    ],
  },
};
