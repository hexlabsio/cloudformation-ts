import { S3OutputLocationProps } from './S3OutputLocationProps';

export function instanceAssociationOutputLocationProps(instanceAssociationOutputLocationPropsProps: InstanceAssociationOutputLocationProps): InstanceAssociationOutputLocationProps { return (instanceAssociationOutputLocationPropsProps) }

export interface InstanceAssociationOutputLocationProps {
    s3Location?: S3OutputLocationProps;
}