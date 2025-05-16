export const createT = (dict: Record<string, unknown>) => {
    return (key: string): string => {
      const parts = key.split(".");
      let result: unknown = dict;
  
      for (const part of parts) {
        if (typeof result === "object" && result !== null && part in result) {
          result = (result as Record<string, unknown>)[part];
        } else {
          return key; // fallback
        }
      }
  
      return typeof result === "string" ? result : key;
    };
  };
  