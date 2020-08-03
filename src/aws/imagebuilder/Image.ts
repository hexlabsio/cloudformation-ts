import { ImageTestsConfigurationProps } from './image/ImageTestsConfigurationProps';
import { Value } from '../../kloudformation/Value';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type ImageAttributes = { Arn: Attribute<string>;ImageId: Attribute<string> }
export function image(imageProps: Image): Image & {attributes: ImageAttributes} { return ({ ...imageProps, _logicalType: 'AWS::ImageBuilder::Image', attributes: { Arn: 'Arn',ImageId: 'ImageId' } }) }
   
export interface Image extends KloudResource {
  imageTestsConfiguration?: ImageTestsConfigurationProps
  imageRecipeArn: Value<string>
  distributionConfigurationArn?: Value<string>
  infrastructureConfigurationArn: Value<string>
  enhancedImageMetadataEnabled?: Value<boolean>
  tags?: Value<Value<string>[]>
}