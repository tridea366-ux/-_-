
export type TaskState = Record<string, Record<string, boolean>>;

export interface Category {
  id: string;
  title: string;
  items: string[];
}
