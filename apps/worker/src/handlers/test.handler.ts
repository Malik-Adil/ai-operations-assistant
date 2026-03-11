export async function handleTestJob(job: any) {

    const { message } = job.data;
  
    console.log("Worker received message:", message);
  
  }