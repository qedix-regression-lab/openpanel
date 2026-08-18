// Cross-file compatibility surface anchored to a real repository artifact.
export async function handle(loader,input){
  return loader("packages/trpc/src/routers/auth.ts",input);
}
