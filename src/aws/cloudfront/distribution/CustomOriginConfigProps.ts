import { Value } from '../../../kloudformation/Value';

export function customOriginConfigProps(customOriginConfigPropsProps: CustomOriginConfigProps): CustomOriginConfigProps { return (customOriginConfigPropsProps) }

export interface CustomOriginConfigProps {
    originProtocolPolicy: Value<string>;
    originReadTimeout?: Value<number>;
    hTTPSPort?: Value<number>;
    originKeepaliveTimeout?: Value<number>;
    originSSLProtocols?: Value<Value<string>[]>;
    hTTPPort?: Value<number>;
}