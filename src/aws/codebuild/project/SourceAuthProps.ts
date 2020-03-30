import { Value } from '../../../kloudformation/Value';

export function sourceAuthProps(sourceAuthPropsProps: SourceAuthProps): SourceAuthProps { return (sourceAuthPropsProps) as unknown as SourceAuthProps }

export interface SourceAuthProps {
    type: Value<string>;
    resource?: Value<string>;
}