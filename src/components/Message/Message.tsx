import './Message.scss';
const mainClass = 'message';
import { IMessage } from '../../models';

export const Message: (props: IMessage) => JSX.Element = ({ message, error }) => {
  const className: string = error ? `${mainClass} ${mainClass}--error` : mainClass;
  return <span className={className}>{message}</span>;
};
