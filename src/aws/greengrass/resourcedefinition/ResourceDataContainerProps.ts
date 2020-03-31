import { SecretsManagerSecretResourceDataProps } from './SecretsManagerSecretResourceDataProps';
import { SageMakerMachineLearningModelResourceDataProps } from './SageMakerMachineLearningModelResourceDataProps';
import { LocalVolumeResourceDataProps } from './LocalVolumeResourceDataProps';
import { LocalDeviceResourceDataProps } from '../resourcedefinitionversion/LocalDeviceResourceDataProps';
import { S3MachineLearningModelResourceDataProps } from './S3MachineLearningModelResourceDataProps';

export function resourceDataContainerProps(resourceDataContainerPropsProps: ResourceDataContainerProps): ResourceDataContainerProps { return (resourceDataContainerPropsProps) }

export interface ResourceDataContainerProps {
    secretsManagerSecretResourceData?: SecretsManagerSecretResourceDataProps;
    sageMakerMachineLearningModelResourceData?: SageMakerMachineLearningModelResourceDataProps;
    localVolumeResourceData?: LocalVolumeResourceDataProps;
    localDeviceResourceData?: LocalDeviceResourceDataProps;
    s3MachineLearningModelResourceData?: S3MachineLearningModelResourceDataProps;
}