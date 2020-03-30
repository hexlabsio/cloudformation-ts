import { Value } from '../../../kloudformation/Value';

export function connectionsListProps(connectionsListPropsProps: ConnectionsListProps): ConnectionsListProps { return (connectionsListPropsProps) as unknown as ConnectionsListProps }

export interface ConnectionsListProps {
    connections?: Value<Value<string>[]>;
}