# Dataherald Typescript SDK

This is an auto-generated SDK built using the OpenAPI specification.

The SDK version is in line with [Dataherald's SDK](https://github.com/Dataherald/dataherald/tags)

## Basic usage

```
npm install dataherald-typescript-sdk
```


```
import { SystemService, OpenAPI } from 'dataherald-typescript-sdk';

OpenAPI.BASE = "http://localhost:80" // Your Dataherald instance base URL

await SystemService.heartbeat();

```

### License MIT