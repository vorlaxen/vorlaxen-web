type StorageType = 'local' | 'session';

class StorageUtil {
  private storage: Storage;

  constructor(type: StorageType = 'local') {
    this.storage = type === 'local' ? window.localStorage : window.sessionStorage;
  }

  get<T = string>(key: string): T | null {
    try {
      const item = this.storage.getItem(key);
      if (!item) return null;
      try {
        return JSON.parse(item) as T;
      } catch {
        return item as unknown as T;
      }
    } catch (error) {
      console.error(`[Storage] Get error for key "${key}":`, error);
      return null;
    }
  }

  set(key: string, value: any): void {
    try {
      const val = typeof value === 'string' ? value : JSON.stringify(value);
      this.storage.setItem(key, val);
    } catch (error) {
      console.error(`[Storage] Set error for key "${key}":`, error);
    }
  }

  remove(key: string): void {
    try {
      this.storage.removeItem(key);
    } catch (error) {
      console.error(`[Storage] Remove error for key "${key}":`, error);
    }
  }

  clear(): void {
    try {
      this.storage.clear();
    } catch (error) {
      console.error('[Storage] Clear error:', error);
    }
  }
}

const localStorageUtil = new StorageUtil('local');
const sessionStorageUtil = new StorageUtil('session');

export { localStorageUtil, sessionStorageUtil, StorageUtil };