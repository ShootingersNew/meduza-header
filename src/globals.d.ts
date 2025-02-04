import type { TEmitter } from "meduza-bus/src/types";
declare global {
  interface Window {
    eventBus: TEmitter;
  }
}
