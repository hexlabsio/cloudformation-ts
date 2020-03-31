import { Value } from '../../../kloudformation/Value';
import { ResourceDownloadOwnerSettingProps } from '../resourcedefinitionversion/ResourceDownloadOwnerSettingProps';

export function s3MachineLearningModelResourceDataProps(s3MachineLearningModelResourceDataPropsProps: S3MachineLearningModelResourceDataProps): S3MachineLearningModelResourceDataProps { return (s3MachineLearningModelResourceDataPropsProps) }

export interface S3MachineLearningModelResourceDataProps {
    destinationPath: Value<string>;
    s3Uri: Value<string>;
    ownerSetting?: ResourceDownloadOwnerSettingProps;
}