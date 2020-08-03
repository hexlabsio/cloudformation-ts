import { Value } from '../../../kloudformation/Value';
import { S3ContentLocationProps } from './S3ContentLocationProps';

export interface CodeContentProps {
  zipFileContent?: Value<string>
  s3ContentLocation?: S3ContentLocationProps
  textContent?: Value<string>
}