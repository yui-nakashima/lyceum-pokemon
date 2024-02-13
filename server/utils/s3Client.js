import { S3Client } from "@aws-sdk/client-s3";
import { NodeHttpHandler } from "@aws-sdk/node-http-handler"; // Proxy設定用
import { ProxyAgent } from "proxy-agent"; // Proxy設定用

const config = useRuntimeConfig();
const agent = new ProxyAgent();
const s3Client = new S3Client({           // Proxy設定
    requestHandler: new NodeHttpHandler({ // Proxy設定
        httpAgent: agent,
        httpsAgent: agent,
      }),
      region: config.region
    });

export default s3Client;
