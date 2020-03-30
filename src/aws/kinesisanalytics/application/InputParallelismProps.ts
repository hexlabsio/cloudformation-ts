import { Value } from '../../../kloudformation/Value';

export function inputParallelismProps(inputParallelismPropsProps: InputParallelismProps): InputParallelismProps { return (inputParallelismPropsProps) as unknown as InputParallelismProps }

export interface InputParallelismProps {
    count?: Value<number>;
}