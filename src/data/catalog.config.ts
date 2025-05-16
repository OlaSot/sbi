export const categoryKeys = [
    "capsule",
    "apple",
    "natural",
    "dome",
    "double",
  ] as const;
  
  export type CategoryKey = typeof categoryKeys[number];
  