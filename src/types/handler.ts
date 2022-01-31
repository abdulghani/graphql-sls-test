import { Callback, Context } from "aws-lambda";

type Handler<TEvent = any, TResult = NonNullable<any>> = (
  event: TEvent,
  context: Context,
  callback: Callback<TResult>
) => Promise<TResult>;

export default Handler;
