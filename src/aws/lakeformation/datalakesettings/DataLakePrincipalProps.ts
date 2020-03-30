import { Value } from '../../../kloudformation/Value';

export function dataLakePrincipalProps(dataLakePrincipalPropsProps: DataLakePrincipalProps): DataLakePrincipalProps { return (dataLakePrincipalPropsProps) as unknown as DataLakePrincipalProps }

export interface DataLakePrincipalProps {
    dataLakePrincipalIdentifier?: Value<string>;
}