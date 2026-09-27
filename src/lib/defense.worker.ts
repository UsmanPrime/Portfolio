import { createDefenseCore, type DefenseCore } from './defenseCore';
import type { WorkerInput, WorkerOutput } from './defenseTypes';

let core: DefenseCore | undefined;
const send = (message: WorkerOutput) => self.postMessage(message);
self.onmessage = (event: MessageEvent<WorkerInput>) => {
  const data = event.data;
  try {
    switch (data.type) {
      case 'init':
        data.canvas.addEventListener('webglcontextlost', event => { event.preventDefault(); core?.setVisible(false); send({ type: 'error' }); });
        core = createDefenseCore(data.canvas, data.palette, data.pixelRatio, anchors => send({ type: 'frame', anchors }));
        core.setSize(data.width, data.height);
        void core.ready.catch(() => send({ type: 'error' }));
        break;
      case 'size': core?.setSize(data.width, data.height); break;
      case 'visible': core?.setVisible(data.value); break;
      case 'pointer': core?.setPointer(data.x, data.y, data.active); break;
      case 'stage': core?.setStage(data.value); break;
      case 'dispose':
        core?.dispose();
        // Let pending compiler polling complete before destroying its worker.
        void (core?.ready ?? Promise.resolve()).then(() => send({ type: 'disposed' }), () => send({ type: 'disposed' }));
        break;
    }
  } catch { send({ type: 'error' }); }
};
