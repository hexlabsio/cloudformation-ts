import { Value } from '../../../kloudformation/Value';

export function accessEndpointProps(accessEndpointPropsProps: AccessEndpointProps): AccessEndpointProps { return (accessEndpointPropsProps) as unknown as AccessEndpointProps }

export interface AccessEndpointProps {
    endpointType: Value<string>;
    vpceId: Value<string>;
}