import { Value } from '../../../kloudformation/Value';

export function egressFilterProps(egressFilterPropsProps: EgressFilterProps): EgressFilterProps { return (egressFilterPropsProps) }

export interface EgressFilterProps {
    type: Value<string>;
}