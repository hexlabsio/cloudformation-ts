import { AbortIncompleteMultipartUploadProps } from './AbortIncompleteMultipartUploadProps';
import { Value } from '../../../kloudformation/Value';
import { NoncurrentVersionTransitionProps } from './NoncurrentVersionTransitionProps';
import { TagFilterProps } from './TagFilterProps';
import { TransitionProps } from './TransitionProps';

export interface RuleProps {
  abortIncompleteMultipartUpload?: AbortIncompleteMultipartUploadProps
  expirationDate?: Value<any>
  expirationInDays?: Value<number>
  id?: Value<string>
  noncurrentVersionExpirationInDays?: Value<number>
  noncurrentVersionTransition?: NoncurrentVersionTransitionProps
  noncurrentVersionTransitions?: NoncurrentVersionTransitionProps[]
  prefix?: Value<string>
  status: Value<string>
  tagFilters?: TagFilterProps[]
  transition?: TransitionProps
  transitions?: TransitionProps[]
}