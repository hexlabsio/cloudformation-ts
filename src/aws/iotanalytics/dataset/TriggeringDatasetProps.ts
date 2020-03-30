import { Value } from '../../../kloudformation/Value';

export function triggeringDatasetProps(triggeringDatasetPropsProps: TriggeringDatasetProps): TriggeringDatasetProps { return (triggeringDatasetPropsProps) as unknown as TriggeringDatasetProps }

export interface TriggeringDatasetProps {
    datasetName: Value<string>;
}