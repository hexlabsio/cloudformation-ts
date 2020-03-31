import { Value } from '../../../kloudformation/Value';

export function dataLakePrincipalProps(dataLakePrincipalPropsProps: DataLakePrincipalProps): DataLakePrincipalProps { return (dataLakePrincipalPropsProps) }

export interface DataLakePrincipalProps {
    dataLakePrincipalIdentifier?: Value<string>;
}