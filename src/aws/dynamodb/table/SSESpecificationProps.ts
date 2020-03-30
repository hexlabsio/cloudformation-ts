import { Value } from '../../../kloudformation/Value';

export function sSESpecificationProps(sSESpecificationPropsProps: SSESpecificationProps): SSESpecificationProps { return (sSESpecificationPropsProps) as unknown as SSESpecificationProps }

export interface SSESpecificationProps {
    sSEEnabled: Value<boolean>;
    kMSMasterKeyId?: Value<string>;
    sSEType?: Value<string>;
}