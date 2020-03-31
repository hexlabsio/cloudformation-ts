import { S3Props } from './S3Props';

export function codeProps(codePropsProps: CodeProps): CodeProps { return (codePropsProps) }

export interface CodeProps {
    s3: S3Props;
}