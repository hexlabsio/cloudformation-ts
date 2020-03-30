import { Value } from '../../../kloudformation/Value';
import { SourceAuthProps } from './SourceAuthProps';
import { GitSubmodulesConfigProps } from './GitSubmodulesConfigProps';

export function sourceProps(sourcePropsProps: SourceProps): SourceProps { return (sourcePropsProps) as unknown as SourceProps }

export interface SourceProps {
    type: Value<string>;
    reportBuildStatus?: Value<boolean>;
    auth?: SourceAuthProps;
    sourceIdentifier?: Value<string>;
    buildSpec?: Value<string>;
    gitCloneDepth?: Value<number>;
    gitSubmodulesConfig?: GitSubmodulesConfigProps;
    insecureSsl?: Value<boolean>;
    location?: Value<string>;
}