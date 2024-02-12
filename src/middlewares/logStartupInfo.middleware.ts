// logStartupInfo.ts
import colors from "colors";
import os from "os";
import mongoose from "mongoose";

const labelsString =
  process.env.LABELS ||
  "Server running on,Environment,Process ID,System Architecture,Running on";
const labelsArray = labelsString.split(",");
const longestLabelLength = Math.max(
  ...labelsArray.map((label) => label.length)
);
const padRight = (label: string, length: number) =>
  label + " ".repeat(length - label.length);

export function logStartupInfo(port: number) {
  console.log(
    colors.blue(
      padRight("Server running on", longestLabelLength) +
        ` -> http://localhost:${port}`
    )
  );
  console.log(
    colors.blue(
      padRight("Environment", longestLabelLength) +
        ` -> ${process.env.NODE_ENV || "development"}`
    )
  );
  console.log(
    colors.blue(
      padRight("Process ID", longestLabelLength) + ` -> ${process.pid}`
    )
  );
  console.log(
    colors.blue(
      padRight("System Architecture", longestLabelLength) + ` -> ${os.arch()}`
    )
  );
  console.log(
    colors.blue(
      padRight("Running on", longestLabelLength) +
        ` -> ${os.type()} ${os.release()}`
    )
  );
}

export async function logsMongodbUtil({
  client,
  version,
}: {
  client: typeof mongoose;
  version: string;
}) {
  console.log(
    colors.magenta(
      padRight("MongoDB Connection", longestLabelLength) +
        ` -> ${mongoose.connection.host}:${mongoose.connection.port}`
    )
  );
  console.log(
    colors.magenta(
      padRight("MongoDB Server Version", longestLabelLength) + ` -> ${version}`
    )
  );
  console.log(
    colors.magenta(
      padRight("MongoDB Database Name", longestLabelLength) +
        ` -> ${mongoose.connection.name}`
    )
  );
}
