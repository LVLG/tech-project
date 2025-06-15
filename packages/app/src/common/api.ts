import { treaty } from "@elysiajs/eden";
import type { App } from "@tech-project/server/app";

export const api = treaty<App>("http://localhost:3001");
