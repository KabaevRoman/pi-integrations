import type { ExtensionAPI } from '@earendil-works/pi-coding-agent';
export default function(pi: ExtensionAPI): void { pi.registerCommand('cc-integrations',{description:'integrations compatibility status',handler:async (_args,ctx)=>ctx.ui.notify('integrations: the Claude adapter is not implemented. Existing pi extension tools remain unchanged.','info')}); }
