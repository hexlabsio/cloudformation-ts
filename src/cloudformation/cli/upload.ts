import { S3 } from '@aws-sdk/client-s3';
import archiver from 'archiver';
import chalk from 'chalk';
import fs from 'fs';


function zipDirectory(source: string, target: string): Promise<void> {
  const archive = archiver("zip", { zlib: { level: 9 } });
  const stream = fs.createWriteStream(target);
  return new Promise((resolve, reject) => {
    archive
      .directory(source, false)
      .on("error", (err: any) => reject(err))
      .pipe(stream);
    stream.on("close", () => resolve());
    archive.finalize();
  });
}

export async function upload(
  files: string[],
  region: string,
  prefix: string,
  bucket: string
): Promise<string[]> {
  console.log(chalk.green("Uploading to S3"));
  const client = new S3({ region });
  const dateTime = new Date().toISOString();
  const randomPart = Math.floor(Math.random() * 10000000);
  const key = `${prefix}${randomPart}-${dateTime}/`;
  return await Promise.all(
    files.map(async (file) => {
      const fileName = file.includes("/")
        ? file.substring(file.lastIndexOf("/") + 1)
        : file;
      const keyName = `${key}${fileName}`;
      if (fs.lstatSync(file).isDirectory()) {
        console.log(chalk.green(`Zipping directory ${fileName}`));
        await zipDirectory(file, `${fileName}.zip`);
        console.log(
          chalk.green(`Uploading ${keyName}.zip to S3 bucket named ${bucket}`)
        );
        await client.putObject({
          ContentType: "application/zip",
          Bucket: bucket,
          Key: keyName + ".zip",
          Body: fs.readFileSync(`${fileName}.zip`),
          ServerSideEncryption: "AES256",
        });
        return keyName + ".zip";
      } else {
        console.log(
          chalk.green(`Uploading ${keyName} to S3 bucket named ${bucket}`)
        );
        await client
          .putObject({ Bucket: bucket, Key: keyName, Body: fs.readFileSync(file) });
        return keyName;
      }
    })
  );
}


