import { S3OutputLocationProps } from './S3OutputLocationProps';

export function instanceAssociationOutputLocationProps(instanceAssociationOutputLocationPropsProps: InstanceAssociationOutputLocationProps): InstanceAssociationOutputLocationProps { return (instanceAssociationOutputLocationPropsProps) as unknown as InstanceAssociationOutputLocationProps }

export interface InstanceAssociationOutputLocationProps {
    s3Location?: S3OutputLocationProps;
}