/**
FILE
job-store.ts

WHY IT EXISTS
Provides a shared in-memory job result storage system that can be
used by both the API server and worker services. This allows
background jobs to store execution status and results so they can
be retrieved later by API endpoints.

ARCHITECTURE EXPLANATION
The system uses a Map to track job lifecycle states.

Job lifecycle:

createJob → job created by API
startJob → worker begins processing
completeJob → worker finishes successfully
failJob → worker fails

The store acts as a temporary job registry.

FUTURE USAGE
This will later be replaced with a persistent database-backed
system using Redis or PostgreSQL so job results survive restarts.
*/

type JobStatus =
  | "waiting"
  | "processing"
  | "completed"
  | "failed";

interface JobRecord {
  jobId: string;
  status: JobStatus;
  result?: any;
  error?: string;
}

const jobStore = new Map<string, JobRecord>();

export function createJob(jobId: string) {
  jobStore.set(jobId, {
    jobId,
    status: "waiting"
  });
}

export function startJob(jobId: string) {
  const job = jobStore.get(jobId);
  if (!job) return;

  job.status = "processing";
}

export function completeJob(jobId: string, result: any) {
  const job = jobStore.get(jobId);
  if (!job) return;

  job.status = "completed";
  job.result = result;
}

export function failJob(jobId: string, error: string) {
  const job = jobStore.get(jobId);
  if (!job) return;

  job.status = "failed";
  job.error = error;
}

export function getJob(jobId: string) {
  return jobStore.get(jobId);
}