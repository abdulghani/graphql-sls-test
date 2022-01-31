import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { inspect } from "util";
import Handler from "../types/handler";

type HttpHandler = Handler<APIGatewayProxyEvent, APIGatewayProxyResult>;

function CreateHandler(handler: HttpHandler): HttpHandler {
  return async function (event, context, callback) {
    try {
      const res = await handler(event, context, callback);
      return res;
    } catch (err: any) {
      console.log("HTTP HANDLER ERROR", {
        resource: inspect(
          {
            resource: (event as any).resource,
            stage: event.requestContext?.stage,
            message: (err as any).message,
          },
          false,
          null
        ),
        details: inspect(err, false, null),
      });

      return {
        statusCode: err.statusCode ?? 500,
        body: JSON.stringify({
          message: err.message ?? "something went wrong.",
        }),
      };
    }
  };
}

export default CreateHandler;
