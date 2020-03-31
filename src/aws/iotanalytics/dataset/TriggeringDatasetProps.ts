import { Value } from '../../../kloudformation/Value';

export function triggeringDatasetProps(triggeringDatasetPropsProps: TriggeringDatasetProps): TriggeringDatasetProps { return (triggeringDatasetPropsProps) }

export interface TriggeringDatasetProps {
    datasetName: Value<string>;
}