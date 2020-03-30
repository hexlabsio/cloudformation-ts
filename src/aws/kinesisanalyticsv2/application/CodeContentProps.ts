import { Value } from '../../../kloudformation/Value';
import { S3ContentLocationProps } from './S3ContentLocationProps';

export function codeContentProps(codeContentPropsProps: CodeContentProps): CodeContentProps { return (codeContentPropsProps) as unknown as CodeContentProps }

export interface CodeContentProps {
    zipFileContent?: Value<string>;
    s3ContentLocation?: S3ContentLocationProps;
    textContent?: Value<string>;
}