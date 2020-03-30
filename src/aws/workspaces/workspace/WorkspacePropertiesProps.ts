import { Value } from '../../../kloudformation/Value';

export function workspacePropertiesProps(workspacePropertiesPropsProps: WorkspacePropertiesProps): WorkspacePropertiesProps { return (workspacePropertiesPropsProps) as unknown as WorkspacePropertiesProps }

export interface WorkspacePropertiesProps {
    computeTypeName?: Value<string>;
    rootVolumeSizeGib?: Value<number>;
    runningMode?: Value<string>;
    runningModeAutoStopTimeoutInMinutes?: Value<number>;
    userVolumeSizeGib?: Value<number>;
}