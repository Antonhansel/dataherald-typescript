/**
 * Base class for settings, allowing values to be overridden by environment variables.
 *
 * This is useful in production for secrets you do not wish to save in code, it plays nicely with docker(-compose),
 * Heroku and any 12 factor app design.
 */
export type SSHSettings = {
    db_name?: string;
    host?: string;
    username?: string;
    password?: string;
    remote_host?: string;
    remote_db_name?: string;
    remote_db_password?: string;
    private_key_password?: string;
    db_driver?: string;
};
