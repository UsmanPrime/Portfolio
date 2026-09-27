export type PaletteValues = Record<'accent' | 'neutral' | 'surface' | 'text' | 'warning' | 'success', string>;
export type AnchorPosition = { id: string; x: number; y: number };
export interface DefenseRenderer { ready: Promise<void>; setStage(stage: number): void; dispose(): void }
export type WorkerInput =
  | { type: 'init'; canvas: OffscreenCanvas; palette: PaletteValues; pixelRatio: number; width: number; height: number }
  | { type: 'size'; width: number; height: number }
  | { type: 'visible'; value: boolean }
  | { type: 'pointer'; x: number; y: number; active: boolean }
  | { type: 'stage'; value: number }
  | { type: 'dispose' };
export type WorkerOutput = { type: 'frame'; anchors: AnchorPosition[] } | { type: 'error' } | { type: 'disposed' };
