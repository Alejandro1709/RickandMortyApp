import Character from './character';

export interface Result {
  info: {
    count: number;
    next: string;
    pages: number;
    prev: string | null;
  };
  results: Array<Character>;
}

export default interface StateProps {
  status: 'idle' | 'loading' | 'error';
  data: Character | Resylt | null;
  error: Error | null;
}
