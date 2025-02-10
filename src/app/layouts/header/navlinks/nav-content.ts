export interface NavContent {
  id: number;
  text: string;
  path: string;
  icon: string | null;
  children: Array<{
    id: number;
    text: string;
    path: string;
    icon: string | null
  }> | null
}
