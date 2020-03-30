import { Value } from '../../../kloudformation/Value';

export function abortIncompleteMultipartUploadProps(abortIncompleteMultipartUploadPropsProps: AbortIncompleteMultipartUploadProps): AbortIncompleteMultipartUploadProps { return (abortIncompleteMultipartUploadPropsProps) as unknown as AbortIncompleteMultipartUploadProps }

export interface AbortIncompleteMultipartUploadProps {
    daysAfterInitiation: Value<number>;
}