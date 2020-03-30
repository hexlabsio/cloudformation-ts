import { Value } from '../../../kloudformation/Value';

export function serverProcessProps(serverProcessPropsProps: ServerProcessProps): ServerProcessProps { return (serverProcessPropsProps) as unknown as ServerProcessProps }

export interface ServerProcessProps {
    concurrentExecutions: Value<number>;
    launchPath: Value<string>;
    parameters?: Value<string>;
}