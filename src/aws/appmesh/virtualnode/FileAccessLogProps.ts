import { Value } from '../../../kloudformation/Value';

export function fileAccessLogProps(fileAccessLogPropsProps: FileAccessLogProps): FileAccessLogProps { return (fileAccessLogPropsProps) as unknown as FileAccessLogProps }

export interface FileAccessLogProps {
    path: Value<string>;
}