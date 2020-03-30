import { Value } from '../../../kloudformation/Value';
import { ResourceDownloadOwnerSettingProps } from '../resourcedefinitionversion/ResourceDownloadOwnerSettingProps';

export function sageMakerMachineLearningModelResourceDataProps(sageMakerMachineLearningModelResourceDataPropsProps: SageMakerMachineLearningModelResourceDataProps): SageMakerMachineLearningModelResourceDataProps { return (sageMakerMachineLearningModelResourceDataPropsProps) as unknown as SageMakerMachineLearningModelResourceDataProps }

export interface SageMakerMachineLearningModelResourceDataProps {
    destinationPath: Value<string>;
    sageMakerJobArn: Value<string>;
    ownerSetting?: ResourceDownloadOwnerSettingProps;
}