import { Value } from '../../../kloudformation/Value';

export function datastoreProps(datastorePropsProps: DatastoreProps): DatastoreProps { return (datastorePropsProps) }

export interface DatastoreProps {
    datastoreName?: Value<string>;
    name?: Value<string>;
}