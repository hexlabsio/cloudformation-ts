import { Value } from '../../../kloudformation/Value';
import { OriginCustomHeaderProps } from './OriginCustomHeaderProps';
import { S3OriginConfigProps } from './S3OriginConfigProps';
import { CustomOriginConfigProps } from './CustomOriginConfigProps';

export function originProps(originPropsProps: OriginProps): OriginProps { return (originPropsProps) }

export interface OriginProps {
    domainName: Value<string>;
    id: Value<string>;
    originCustomHeaders?: OriginCustomHeaderProps[];
    s3OriginConfig?: S3OriginConfigProps;
    originPath?: Value<string>;
    customOriginConfig?: CustomOriginConfigProps;
}