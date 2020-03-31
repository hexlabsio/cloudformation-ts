import { Value } from '../../../kloudformation/Value';

export function copyCommandProps(copyCommandPropsProps: CopyCommandProps): CopyCommandProps { return (copyCommandPropsProps) }

export interface CopyCommandProps {
    dataTableName: Value<string>;
    copyOptions?: Value<string>;
    dataTableColumns?: Value<string>;
}