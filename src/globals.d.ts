import type { TEmitter } from "meduza-bus/src/types";
import type { Router } from "vue-router";
declare global {
  interface Window {
    eventBus: TEmitter;
    router: Router
  }
}
