import { FilterRuleProps } from './FilterRuleProps';

export function s3KeyFilterProps(s3KeyFilterPropsProps: S3KeyFilterProps): S3KeyFilterProps { return (s3KeyFilterPropsProps) }

export interface S3KeyFilterProps {
    rules: FilterRuleProps[];
}