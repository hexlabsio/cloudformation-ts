import { Value } from '../../../kloudformation/Value';

export function accessEndpointProps(accessEndpointPropsProps: AccessEndpointProps): AccessEndpointProps { return (accessEndpointPropsProps) }

export interface AccessEndpointProps {
    endpointType: Value<string>;
    vpceId: Value<string>;
}