import { Value } from '../../../kloudformation/Value';

export function connectionsListProps(connectionsListPropsProps: ConnectionsListProps): ConnectionsListProps { return (connectionsListPropsProps) }

export interface ConnectionsListProps {
    connections?: Value<Value<string>[]>;
}