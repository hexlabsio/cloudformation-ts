import { Value } from '../../../kloudformation/Value';
import { AbortIncompleteMultipartUploadProps } from './AbortIncompleteMultipartUploadProps';
import { NoncurrentVersionTransitionProps } from './NoncurrentVersionTransitionProps';
import { TagFilterProps } from './TagFilterProps';
import { TransitionProps } from './TransitionProps';

export function ruleProps(rulePropsProps: RuleProps): RuleProps { return (rulePropsProps) as unknown as RuleProps }

export interface RuleProps {
    status: Value<string>;
    abortIncompleteMultipartUpload?: AbortIncompleteMultipartUploadProps;
    expirationDate?: Value<java.time.Instant>;
    expirationInDays?: Value<number>;
    id?: Value<string>;
    noncurrentVersionExpirationInDays?: Value<number>;
    noncurrentVersionTransition?: NoncurrentVersionTransitionProps;
    noncurrentVersionTransitions?: NoncurrentVersionTransitionProps[];
    prefix?: Value<string>;
    tagFilters?: TagFilterProps[];
    transition?: TransitionProps;
    transitions?: TransitionProps[];
}