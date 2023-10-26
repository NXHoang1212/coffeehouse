import { AnyAction, MiddlewareAPI, Middleware } from "@reduxjs/toolkit";

export const RTKQueryLogger: Middleware = (api: MiddlewareAPI) => (next) => (action: AnyAction) => {
    if (action.type.startsWith('Api')) {
        console.log('🚀 ~ file: RTKQuery.logger.ts ~ line 3 ~ action', action);
    }
    return next(action);
}
