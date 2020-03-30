import { Value } from '../../../kloudformation/Value';

export function metadataOptionsProps(metadataOptionsPropsProps: MetadataOptionsProps): MetadataOptionsProps { return (metadataOptionsPropsProps) as unknown as MetadataOptionsProps }

export interface MetadataOptionsProps {
    httpPutResponseHopLimit?: Value<number>;
    httpTokens?: Value<string>;
    httpEndpoint?: Value<string>;
}