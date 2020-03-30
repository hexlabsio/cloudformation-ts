import { Value } from '../../../kloudformation/Value';

export function onDemandOptionsRequestProps(onDemandOptionsRequestPropsProps: OnDemandOptionsRequestProps): OnDemandOptionsRequestProps { return (onDemandOptionsRequestPropsProps) as unknown as OnDemandOptionsRequestProps }

export interface OnDemandOptionsRequestProps {
    allocationStrategy?: Value<string>;
}