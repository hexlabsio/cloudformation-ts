import { Value } from '../../../kloudformation/Value';

export function gamePropertyProps(gamePropertyPropsProps: GamePropertyProps): GamePropertyProps { return (gamePropertyPropsProps) }

export interface GamePropertyProps {
    value: Value<string>;
    key: Value<string>;
}