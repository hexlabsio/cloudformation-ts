import { Value } from '../../kloudformation/Value';
import { ImageTestsConfigurationProps } from './imagePipeline/ImageTestsConfigurationProps';
import { ScheduleProps } from './imagePipeline/ScheduleProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type ImagePipelineAttributes = { Arn: Attribute<string> }
export function imagePipeline(imagePipelineProps: ImagePipeline): ImagePipeline & {attributes: ImagePipelineAttributes} { return ({ ...imagePipelineProps, _logicalType: 'AWS::ImageBuilder::ImagePipeline', attributes: { Arn: 'Arn' } }) }
   
export interface ImagePipeline extends KloudResource {
  name: Value<string>
  description?: Value<string>
  imageTestsConfiguration?: ImageTestsConfigurationProps
  status?: Value<string>
  schedule?: ScheduleProps
  imageRecipeArn: Value<string>
  distributionConfigurationArn?: Value<string>
  infrastructureConfigurationArn: Value<string>
  enhancedImageMetadataEnabled?: Value<boolean>
  tags?: Value<Value<string>[]>
}