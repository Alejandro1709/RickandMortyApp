import { useEffect, useState } from 'react';
import type Character from '../types/character';
import type StateProps from '../types/state';
import { type Result } from '../types/state';

export default function useAsync(asyncFn: () => Promise<any>) {
  const [state, setState] = useState<StateProps>({
    status: 'idle',
    data: null,
    error: null,
  });

  useEffect(() => {
    const promise = asyncFn();

    if (!promise) return;

    setState({ status: 'pending', data: null, error: null });

    promise
      .then((data: Character | Result) =>
        setState({
          status: 'success',
          data: data,
          error: null,
        })
      )
      .catch((error: Error) =>
        setState({
          status: 'error',
          data: null,
          error: error,
        })
      );
  }, [asyncFn]);

  return { ...state };
}
