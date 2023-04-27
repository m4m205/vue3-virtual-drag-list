const storeKey = 'virtualSortableState';

type Item = {
  item: any;
  key: string;
  index: number;
};

export interface FromTo {
  from?: Item;
  to?: Item;
}

const defaultStore = { from: {}, to: {} };

class Storage {
  clear() {
    localStorage.removeItem(storeKey);
  }

  /**
   * Obtaining Synchronization Data
   * @returns states: { from, to }
   */
  getStore() {
    try {
      const result = JSON.parse(localStorage.getItem(storeKey));
      return result || defaultStore;
    } catch (e) {
      return defaultStore;
    }
  }

  /**
   * @returns states: { from, to }
   */
  getValue() {
    return new Promise<FromTo>((resolve, reject) => {
      try {
        const result = JSON.parse(localStorage.getItem(storeKey));
        resolve(result || defaultStore);
      } catch (e) {
        reject(defaultStore);
      }
    });
  }

  setValue(value: FromTo) {
    return new Promise<string>((resolve, reject) => {
      try {
        const store = JSON.parse(localStorage.getItem(storeKey));
        const result = JSON.stringify({ ...store, ...value });
        localStorage.setItem(storeKey, result);
        resolve(result);
      } catch (e) {
        reject('{}');
      }
    });
  }
}

export const Store = new Storage();
