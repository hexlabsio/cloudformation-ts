import { Value } from '../../../kloudformation/Value';

export function hiveJsonSerDeProps(hiveJsonSerDePropsProps: HiveJsonSerDeProps): HiveJsonSerDeProps { return (hiveJsonSerDePropsProps) as unknown as HiveJsonSerDeProps }

export interface HiveJsonSerDeProps {
    timestampFormats?: Value<Value<string>[]>;
}