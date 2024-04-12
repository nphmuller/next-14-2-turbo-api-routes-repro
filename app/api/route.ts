import { env } from "next-runtime-env";

export async function GET(request: Request) {
  const foo = env("FOO");
  return new Response("Foo: " + foo);
}
