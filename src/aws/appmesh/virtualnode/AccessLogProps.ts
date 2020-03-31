import { FileAccessLogProps } from './FileAccessLogProps';

export function accessLogProps(accessLogPropsProps: AccessLogProps): AccessLogProps { return (accessLogPropsProps) }

export interface AccessLogProps {
    file?: FileAccessLogProps;
}