import { createBullBoard } from "@bull-board/api";
import { ExpressAdapter } from "@bull-board/express";
import { BullMQAdapter } from "@bull-board/api/bullMQAdapter";

import { aiQueue } from "@queue/queues";

export function setupBullBoard(app: any) {

  const serverAdapter = new ExpressAdapter();
  serverAdapter.setBasePath("/admin/queues");

  createBullBoard({
    queues: [new BullMQAdapter(aiQueue)],
    serverAdapter,
  });

  app.use("/admin/queues", serverAdapter.getRouter());
}