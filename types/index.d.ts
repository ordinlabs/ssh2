import { ServerCallback } from 'ssh2';

declare module 'ssh2' {
    interface Client {
        end(reason?: number | null, message?: string, lang?: string): this;
    }

    interface Connection {
        end(reason?: number | null, message?: string, lang?: string): this;
        openssh_authAgent(callback: ServerCallback): void;
    }

    interface ServerConfig {
        /** Enable PROXY protocol (v1/v2) header parsing on incoming connections.
         *  When true, the server will parse PROXY headers sent by load balancers
         *  (e.g. AWS NLB) to extract the real client IP/port. Default: false. */
        proxyProtocol?: boolean;
    }

    interface ClientInfo {
        /** The IP address of the proxy/load balancer that forwarded the connection.
         *  Only present when proxyProtocol is enabled and a PROXY header was parsed. */
        proxyAddress?: string;
        /** The port of the proxy/load balancer that forwarded the connection.
         *  Only present when proxyProtocol is enabled and a PROXY header was parsed. */
        proxyPort?: number;
    }
}

export * from 'ssh2';
