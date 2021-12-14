import {Injectable} from '@angular/core';

@Injectable()
export class CacheService {
  private readonly mapper: Map<string, string>;

  constructor() {
    this.mapper = new Map<string, string>();
    this.loadPreferences()
  }

  get(key: string, object: boolean = false): any {
    if (this.mapper.has(key)) {
      const item = this.mapper.get(key);
      return object && item ? JSON.parse(item) : item;
    }
    return undefined;
  }

  getOrDefault(key: string, value: any, object: boolean = false): any {
    if (this.get(key) == null) {
      this.set(key, value, object);
      return value;
    } else return this.get(key);
  }

  set(key: string, value: any, object: boolean = false) {
    this.mapper.set(key, object ? JSON.stringify(value) : value)
    localStorage.setItem(key, object ? JSON.stringify(value) : value);
  }

  private loadPreferences() {
    for (let index = 0; index < localStorage.length; index++) {
      const cacheKey = localStorage.key(index) || '';
      this.mapper.set(cacheKey, localStorage.getItem(cacheKey) || '');
    }
  }

  clear() {
    for (let index = 0; index < localStorage.length; index++) {
      const cacheKey = localStorage.key(index) || '';
      localStorage.removeItem(cacheKey);
    }
  }
}
