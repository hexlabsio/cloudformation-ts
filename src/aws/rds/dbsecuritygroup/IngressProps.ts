import { Value } from '../../../kloudformation/Value';

export function ingressProps(ingressPropsProps: IngressProps): IngressProps { return (ingressPropsProps) }

export interface IngressProps {
    cIDRIP?: Value<string>;
    eC2SecurityGroupId?: Value<string>;
    eC2SecurityGroupName?: Value<string>;
    eC2SecurityGroupOwnerId?: Value<string>;
}