import { Value } from '../../../kloudformation/Value';

export function serverProcessProps(serverProcessPropsProps: ServerProcessProps): ServerProcessProps { return (serverProcessPropsProps) }

export interface ServerProcessProps {
    concurrentExecutions: Value<number>;
    launchPath: Value<string>;
    parameters?: Value<string>;
}