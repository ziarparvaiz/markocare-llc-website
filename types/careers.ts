export interface CareerApplication {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  positionApplyingFor: string;
  preferredServiceCounty: string;
  yearsOfExperience: number;
  certificationsAndQualifications: string;
  availability: string;
  additionalInformation?: string;
  cvUrl: string;               // UploadThing URL after upload
  cvFileName: string;          // Original filename
  backgroundCheckConsent: boolean;   // Required: true
  equalOpportunityAcknowledgment: boolean; // Required: true
  submittedAt: string;         // ISO timestamp
}
