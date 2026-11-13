//  add new storage adapters here
export const adapterClasses: { [id: string]: Array<string> } = {
  s3: ["AdapterS3", "@sab-js/adapter-s3"],

  aws: ["AdapterAmazonS3", "@sab-js/adapter-amazon-s3"],

  b2: ["AdapterBackblazeB2", "@sab-js/adapter-backblaze-b2"],
  backblaze: ["AdapterBackblazeB2", "@sab-js/adapter-backblaze-b2"],

  "b2-s3": ["AdapterBackblazeS3", "@sab-js/adapter-backblaze-s3"],
  "backblaze-s3": ["AdapterBackblazeS3", "@sab-js/adapter-backblaze-s3"],

  minio: ["AdapterMinio", "@sab-js/adapter-minio"],
  "minio-s3": ["AdapterMinioS3", "@sab-js/adapter-minio-s3"],

  r2: ["AdapterCloudflareS3", "@sab-js/adapter-cloudflare-s3"],
  cloudflare: ["AdapterCloudflareS3", "@sab-js/adapter-cloudflare-s3"],

  cubbit: ["AdapterCubbitS3", "@sab-js/adapter-cubbit-s3"],

  gs: ["AdapterGoogleCloud", "@sab-js/adapter-google-cloud"],
  gcs: ["AdapterGoogleCloud", "@sab-js/adapter-google-cloud"],

  local: ["AdapterLocal", "@sab-js/adapter-local"],

  azure: ["AdapterAzureBlob", "@sab-js/adapter-azure-blob"],
};

// or here for functional adapters
export const adapterFunctions: { [id: string]: Array<string> } = {
  b2f: ["AdapterBackblazeB2F", "@sab-js/adapter-backblaze-b2f"],
};

// The adapters used to be published under the @tweedegolf scope; returns the old package
// name so that projects that haven't switched to the @sab-js adapters yet keep working.
export function getLegacyPackageName(packageName: string): string {
  return packageName.replace("@sab-js/adapter-", "@tweedegolf/sab-adapter-");
}

export function getAvailableAdapters(): string {
  return Object.keys(adapterClasses)
    .concat(Object.keys(adapterFunctions))
    .reduce((acc: Array<string>, val: string) => {
      if (acc.findIndex((v) => v === val) === -1) {
        acc.push(val);
      }
      return acc;
    }, [])
    .sort()
    .join(", ");
}
