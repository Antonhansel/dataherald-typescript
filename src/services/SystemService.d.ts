import type { CancelablePromise } from '../core/CancelablePromise';
export declare class SystemService {
    /**
     * Heartbeat
     * @returns number Successful Response
     * @throws ApiError
     */
    static heartbeat(): CancelablePromise<Record<string, number>>;
}
