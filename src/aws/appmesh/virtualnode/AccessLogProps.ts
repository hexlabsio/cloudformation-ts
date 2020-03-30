import { FileAccessLogProps } from './FileAccessLogProps';

export function accessLogProps(accessLogPropsProps: AccessLogProps): AccessLogProps { return (accessLogPropsProps) as unknown as AccessLogProps }

export interface AccessLogProps {
    file?: FileAccessLogProps;
}