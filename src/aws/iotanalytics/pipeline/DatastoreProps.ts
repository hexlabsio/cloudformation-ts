import { Value } from '../../../kloudformation/Value';

export function datastoreProps(datastorePropsProps: DatastoreProps): DatastoreProps { return (datastorePropsProps) as unknown as DatastoreProps }

export interface DatastoreProps {
    datastoreName?: Value<string>;
    name?: Value<string>;
}