import { Value } from '../../../kloudformation/Value';

export function loggingInfoProps(loggingInfoPropsProps: LoggingInfoProps): LoggingInfoProps { return (loggingInfoPropsProps) as unknown as LoggingInfoProps }

export interface LoggingInfoProps {
    s3Bucket: Value<string>;
    region: Value<string>;
    s3Prefix?: Value<string>;
}