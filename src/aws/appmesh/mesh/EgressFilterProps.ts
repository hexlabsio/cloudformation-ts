import { Value } from '../../../kloudformation/Value';

export function egressFilterProps(egressFilterPropsProps: EgressFilterProps): EgressFilterProps { return (egressFilterPropsProps) as unknown as EgressFilterProps }

export interface EgressFilterProps {
    type: Value<string>;
}