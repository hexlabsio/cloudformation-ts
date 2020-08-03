import { CaptureOptionProps } from './CaptureOptionProps';
import { Value } from '../../../kloudformation/Value';
import { CaptureContentTypeHeaderProps } from './CaptureContentTypeHeaderProps';

export interface DataCaptureConfigProps {
  captureOptions: CaptureOptionProps[]
  kmsKeyId?: Value<string>
  destinationS3Uri: Value<string>
  initialSamplingPercentage: Value<number>
  captureContentTypeHeader?: CaptureContentTypeHeaderProps
  enableCapture?: Value<boolean>
}