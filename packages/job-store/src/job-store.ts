/**
FILE
job-store.ts

WHY IT EXISTS
Stores job lifecycle state and results in Redis so both the API
and Worker processes can read/write the same data.

ARCHITECTURE
Each job is stored as a Redis hash:

job:<jobId>

Fields:
- status
- result
- error

FUTURE USAGE
Later we could:
- add job timelines
- add analytics
- move to PostgreSQL if needed
*/

import { connection } from "@queue/queues"

const redis = connection

export enum JobStatus {
  WAITING = "waiting",
  PROCESSING = "processing",
  COMPLETED = "completed",
  FAILED = "failed"
}

export async function createJob(jobId: string) {
  await redis.hset(`job:${jobId}`, {
    status: JobStatus.WAITING
  })
}

export async function startJob(jobId: string) {
  await redis.hset(`job:${jobId}`, {
    status: JobStatus.PROCESSING
  })
}

export async function completeJob(jobId: string, result: any) {
  await redis.hset(`job:${jobId}`, {
    status: JobStatus.COMPLETED,
    result: JSON.stringify(result)
  })
}

export async function failJob(jobId: string, error: string) {
  await redis.hset(`job:${jobId}`, {
    status: JobStatus.FAILED,
    error
  })
}

export async function getJob(jobId: string) {
  const data = await redis.hgetall(`job:${jobId}`)
  if (!data || Object.keys(data).length === 0) {
    return null
  }

  return {
    jobId,
    status: data.status,
    result: data.result ? JSON.parse(data.result) : undefined,
    error: data.error
  }
}