export interface Submission {
    submissionId: string; // UUID
    submittedBy: Poster;
    message: string;
    image: string; //base64
    status: string;
}

export interface SubmissionPostRequest {
    message: string;
    image: string;
}

export interface Poster {
    userId: string;
    name: string;
}
