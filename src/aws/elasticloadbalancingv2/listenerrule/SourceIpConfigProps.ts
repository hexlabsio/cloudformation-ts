import { Value } from '../../../kloudformation/Value';

export function sourceIpConfigProps(sourceIpConfigPropsProps: SourceIpConfigProps): SourceIpConfigProps { return (sourceIpConfigPropsProps) as unknown as SourceIpConfigProps }

export interface SourceIpConfigProps {
    values?: Value<Value<string>[]>;
}