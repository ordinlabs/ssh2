import { ServerCallback } from 'ssh2';

declare module 'ssh2' {
    interface Client {
        end(reason?: number | null, message?: string, lang?: string): this;
    }

    interface Connection {
        openssh_authAgent(callback: ServerCallback): void;
        end(reason?: number | null, message?: string, lang?: string): this;
    }
}

export * from 'ssh2';
