/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DatabaseConnection } from '../models/DatabaseConnection';
import type { DatabaseConnectionRequest } from '../models/DatabaseConnectionRequest';
import type { DatabaseConnectionResponse } from '../models/DatabaseConnectionResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DatabaseConnectionsService {
    /**
     * List Database Connections
     * List all database connections
     * @returns DatabaseConnection Successful Response
     * @throws ApiError
     */
    public static listDatabaseConnections(): CancelablePromise<Array<DatabaseConnection>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/database-connections',
        });
    }
    /**
     * Create Database Connection
     * Creates a database connection
     * @param requestBody
     * @returns DatabaseConnectionResponse Successful Response
     * @throws ApiError
     */
    public static createDatabaseConnection(
        requestBody: DatabaseConnectionRequest,
    ): CancelablePromise<DatabaseConnectionResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/database-connections',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Database Connection
     * Creates a database connection
     * @param dbConnectionId
     * @param requestBody
     * @returns DatabaseConnection Successful Response
     * @throws ApiError
     */
    public static updateDatabaseConnection(
        dbConnectionId: string,
        requestBody: DatabaseConnectionRequest,
    ): CancelablePromise<DatabaseConnection> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/database-connections/{db_connection_id}',
            path: {
                'db_connection_id': dbConnectionId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
