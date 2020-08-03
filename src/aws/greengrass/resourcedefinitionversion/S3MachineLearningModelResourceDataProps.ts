import { ResourceDownloadOwnerSettingProps } from './ResourceDownloadOwnerSettingProps';
import { Value } from '../../../kloudformation/Value';

export interface S3MachineLearningModelResourceDataProps {
  ownerSetting?: ResourceDownloadOwnerSettingProps
  destinationPath: Value<string>
  s3Uri: Value<string>
}