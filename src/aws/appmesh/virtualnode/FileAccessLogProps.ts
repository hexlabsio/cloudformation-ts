import { Value } from '../../../kloudformation/Value';

export function fileAccessLogProps(fileAccessLogPropsProps: FileAccessLogProps): FileAccessLogProps { return (fileAccessLogPropsProps) }

export interface FileAccessLogProps {
    path: Value<string>;
}