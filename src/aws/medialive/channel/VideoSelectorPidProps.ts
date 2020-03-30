import { Value } from '../../../kloudformation/Value';

export function videoSelectorPidProps(videoSelectorPidPropsProps: VideoSelectorPidProps): VideoSelectorPidProps { return (videoSelectorPidPropsProps) as unknown as VideoSelectorPidProps }

export interface VideoSelectorPidProps {
    pid?: Value<number>;
}