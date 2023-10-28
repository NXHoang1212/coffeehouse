import { AnyAction, MiddlewareAPI, Middleware } from "@reduxjs/toolkit";

export const RTKQueryLogger: Middleware = (api: MiddlewareAPI) => (next) => (action: AnyAction) => {
    if (action.type.startsWith('Api')) {
<<<<<<< HEAD
        console.log('🚀 ~ file: RTKQuery.logger.ts ~ line 3 ~ action', action);
=======
        // console.log('🚀 ~ file: RTKQuery.logger.ts ~ line 3 ~ action', action);
>>>>>>> fcf5d62f9e6a39da18ba440b9cee6c9c56e09cc7
    }
    return next(action);
}
