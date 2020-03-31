import { Value } from '../../../kloudformation/Value';

export function hiveJsonSerDeProps(hiveJsonSerDePropsProps: HiveJsonSerDeProps): HiveJsonSerDeProps { return (hiveJsonSerDePropsProps) }

export interface HiveJsonSerDeProps {
    timestampFormats?: Value<Value<string>[]>;
}