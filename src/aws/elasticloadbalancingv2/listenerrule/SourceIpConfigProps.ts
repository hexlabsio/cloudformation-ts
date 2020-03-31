import { Value } from '../../../kloudformation/Value';

export function sourceIpConfigProps(sourceIpConfigPropsProps: SourceIpConfigProps): SourceIpConfigProps { return (sourceIpConfigPropsProps) }

export interface SourceIpConfigProps {
    values?: Value<Value<string>[]>;
}