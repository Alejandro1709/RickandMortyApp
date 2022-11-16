import Character from './character';

export interface Result {
  info?: {
    count: number;
    next: string;
    pages: number;
    prev: string | null;
  };
  results: Array<Character>;
}

export default interface StateProps {
  status: 'idle' | 'pending' | 'success' | 'error';
  data: Character | Result | null;
  error: Error | null;
}
