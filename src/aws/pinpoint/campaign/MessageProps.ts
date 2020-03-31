import { Value } from '../../../kloudformation/Value';

export function messageProps(messagePropsProps: MessageProps): MessageProps { return (messagePropsProps) }

export interface MessageProps {
    jsonBody?: Value<string>;
    action?: Value<string>;
    mediaUrl?: Value<string>;
    timeToLive?: Value<number>;
    imageSmallIconUrl?: Value<string>;
    imageUrl?: Value<string>;
    title?: Value<string>;
    imageIconUrl?: Value<string>;
    silentPush?: Value<boolean>;
    body?: Value<string>;
    rawContent?: Value<string>;
    url?: Value<string>;
}