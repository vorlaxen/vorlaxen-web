export type EventCallback<T = any> = (data: T) => void;

export type EventMap = {
  [event: string]: any;
};

class EventBus<Events extends EventMap = Record<string, any>> {
  private listeners = new Map<keyof Events, Set<EventCallback>>();

  on<K extends keyof Events>(event: K, callback: EventCallback<Events[K]>): void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event)!.add(callback);

    const handler = (e: Event) => {
      const customEvent = e as CustomEvent<Events[K]>;
      callback(customEvent.detail);
    };

    document.addEventListener(event as string, handler);

    (callback as any)._handler = handler;
  }

  dispatch<K extends keyof Events>(event: K, data: Events[K]): void {
    document.dispatchEvent(new CustomEvent(event as string, { detail: data }));
  }

  remove<K extends keyof Events>(event: K, callback: EventCallback<Events[K]>): void {
    const handler = (callback as any)._handler;
    if (handler) {
      document.removeEventListener(event as string, handler);
      this.listeners.get(event)?.delete(callback);
    }
  }
}

export default new EventBus();
