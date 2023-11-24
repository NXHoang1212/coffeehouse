import {AnyAction, MiddlewareAPI, Middleware} from '@reduxjs/toolkit';

export const RTKQueryLogger: Middleware =
  (api: MiddlewareAPI) => next => (action: AnyAction) => {
    if (action.type.startsWith('Api')) {
<<<<<<< HEAD
<<<<<<< HEAD
        console.log('🚀 ~ file: RTKQuery.logger.ts ~ line 3 ~ action', action);
=======
        // console.log('🚀 ~ file: RTKQuery.logger.ts ~ line 3 ~ action', action);
>>>>>>> fcf5d62f9e6a39da18ba440b9cee6c9c56e09cc7
=======
      // console.log('🚀 ~ file: RTKQuery.logger.ts ~ line 3 ~ action', action);
>>>>>>> main
    }
    return next(action);
  };
