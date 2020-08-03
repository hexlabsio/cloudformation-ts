import { ResourceDownloadOwnerSettingProps } from './ResourceDownloadOwnerSettingProps';
import { Value } from '../../../kloudformation/Value';

export interface SageMakerMachineLearningModelResourceDataProps {
  ownerSetting?: ResourceDownloadOwnerSettingProps
  destinationPath: Value<string>
  sageMakerJobArn: Value<string>
}