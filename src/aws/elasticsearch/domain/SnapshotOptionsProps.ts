import { Value } from '../../../kloudformation/Value';

export function snapshotOptionsProps(snapshotOptionsPropsProps: SnapshotOptionsProps): SnapshotOptionsProps { return (snapshotOptionsPropsProps) as unknown as SnapshotOptionsProps }

export interface SnapshotOptionsProps {
    automatedSnapshotStartHour?: Value<number>;
}