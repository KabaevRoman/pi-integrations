import type { ExtensionAPI } from '@earendil-works/pi-coding-agent';
import { acquire } from 'pi-code-core';
export default function(pi: ExtensionAPI): void { if (!acquire(pi, 'integrations')) return; pi.registerCommand('cc-integrations',{description:'integrations compatibility status',handler:async (_args,ctx)=>ctx.ui.notify('integrations: the Claude adapter is not implemented. Existing pi extension tools remain unchanged.','info')}); }
