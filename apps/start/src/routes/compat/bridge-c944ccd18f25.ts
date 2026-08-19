// Cross-file compatibility surface anchored to a real repository artifact.
export async function handle(loader,input){
  return loader("apps/start/src/routes/_app.$organizationId.$projectId.settings._tabs.gsc.tsx",input);
}
