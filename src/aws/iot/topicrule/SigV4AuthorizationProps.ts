import { Value } from '../../../kloudformation/Value';

export function sigV4AuthorizationProps(sigV4AuthorizationPropsProps: SigV4AuthorizationProps): SigV4AuthorizationProps { return (sigV4AuthorizationPropsProps) }

export interface SigV4AuthorizationProps {
    roleArn: Value<string>;
    serviceName: Value<string>;
    signingRegion: Value<string>;
}