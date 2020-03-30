import { Value } from '../../../kloudformation/Value';

export function putItemInputProps(putItemInputPropsProps: PutItemInputProps): PutItemInputProps { return (putItemInputPropsProps) as unknown as PutItemInputProps }

export interface PutItemInputProps {
    tableName: Value<string>;
}