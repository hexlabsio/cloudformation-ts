import { Value } from '../../../kloudformation/Value';

export function timeToLiveSpecificationProps(timeToLiveSpecificationPropsProps: TimeToLiveSpecificationProps): TimeToLiveSpecificationProps { return (timeToLiveSpecificationPropsProps) }

export interface TimeToLiveSpecificationProps {
    attributeName: Value<string>;
    enabled: Value<boolean>;
}