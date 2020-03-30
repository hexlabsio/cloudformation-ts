import { Value } from '../../../kloudformation/Value';

export function recordColumnProps(recordColumnPropsProps: RecordColumnProps): RecordColumnProps { return (recordColumnPropsProps) as unknown as RecordColumnProps }

export interface RecordColumnProps {
    sqlType: Value<string>;
    name: Value<string>;
    mapping?: Value<string>;
}