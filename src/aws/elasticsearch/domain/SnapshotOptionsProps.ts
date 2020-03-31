import { Value } from '../../../kloudformation/Value';

export function snapshotOptionsProps(snapshotOptionsPropsProps: SnapshotOptionsProps): SnapshotOptionsProps { return (snapshotOptionsPropsProps) }

export interface SnapshotOptionsProps {
    automatedSnapshotStartHour?: Value<number>;
}