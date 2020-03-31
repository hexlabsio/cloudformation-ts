import { Value } from '../../../kloudformation/Value';

export function catalogTargetProps(catalogTargetPropsProps: CatalogTargetProps): CatalogTargetProps { return (catalogTargetPropsProps) }

export interface CatalogTargetProps {
    databaseName?: Value<string>;
    tables?: Value<Value<string>[]>;
}