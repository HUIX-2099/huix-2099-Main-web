// WebXR Type Definitions
// Extends the Navigator interface for WebXR support

interface XRSystem {
  isSessionSupported(mode: XRSessionMode): Promise<boolean>
  requestSession(mode: XRSessionMode, options?: XRSessionInit): Promise<XRSession>
}

interface XRSession extends EventTarget {
  readonly visibilityState: XRVisibilityState
  readonly renderState: XRRenderState
  readonly inputSources: XRInputSourceArray
  readonly environmentBlendMode?: XREnvironmentBlendMode
  readonly interactionMode?: XRInteractionMode
  
  updateRenderState(state?: XRRenderStateInit): void
  requestReferenceSpace(type: XRReferenceSpaceType): Promise<XRReferenceSpace>
  requestAnimationFrame(callback: XRFrameRequestCallback): number
  cancelAnimationFrame(handle: number): void
  end(): Promise<void>
  
  addEventListener(type: 'end', callback: (event: XRSessionEvent) => void): void
  addEventListener(type: 'inputsourceschange', callback: (event: XRInputSourceChangeEvent) => void): void
  addEventListener(type: 'select', callback: (event: XRInputSourceEvent) => void): void
  addEventListener(type: 'selectstart', callback: (event: XRInputSourceEvent) => void): void
  addEventListener(type: 'selectend', callback: (event: XRInputSourceEvent) => void): void
  addEventListener(type: 'squeeze', callback: (event: XRInputSourceEvent) => void): void
  addEventListener(type: 'squeezestart', callback: (event: XRInputSourceEvent) => void): void
  addEventListener(type: 'squeezeend', callback: (event: XRInputSourceEvent) => void): void
  addEventListener(type: 'visibilitychange', callback: (event: XRSessionEvent) => void): void
}

interface XRSessionInit {
  requiredFeatures?: string[]
  optionalFeatures?: string[]
  domOverlay?: { root: Element }
}

interface XRRenderState {
  readonly baseLayer?: XRWebGLLayer
  readonly depthFar: number
  readonly depthNear: number
  readonly inlineVerticalFieldOfView?: number
}

interface XRRenderStateInit {
  baseLayer?: XRWebGLLayer
  depthFar?: number
  depthNear?: number
  inlineVerticalFieldOfView?: number
  layers?: XRLayer[]
}

interface XRReferenceSpace extends XRSpace {
  getOffsetReferenceSpace(originOffset: XRRigidTransform): XRReferenceSpace
}

interface XRFrame {
  readonly session: XRSession
  getViewerPose(referenceSpace: XRReferenceSpace): XRViewerPose | null
  getPose(space: XRSpace, baseSpace: XRSpace): XRPose | null
  getHitTestResults?(hitTestSource: XRHitTestSource): XRHitTestResult[]
}

interface XRViewerPose extends XRPose {
  readonly views: readonly XRView[]
}

interface XRPose {
  readonly transform: XRRigidTransform
  readonly emulatedPosition: boolean
}

interface XRView {
  readonly eye: XREye
  readonly projectionMatrix: Float32Array
  readonly transform: XRRigidTransform
}

interface XRRigidTransform {
  readonly position: DOMPointReadOnly
  readonly orientation: DOMPointReadOnly
  readonly matrix: Float32Array
  readonly inverse: XRRigidTransform
}

interface XRInputSource {
  readonly handedness: XRHandedness
  readonly targetRayMode: XRTargetRayMode
  readonly targetRaySpace: XRSpace
  readonly gripSpace?: XRSpace
  readonly profiles: readonly string[]
  readonly gamepad?: Gamepad
  readonly hand?: XRHand
}

interface XRInputSourceArray {
  readonly length: number
  [index: number]: XRInputSource
  [Symbol.iterator](): IterableIterator<XRInputSource>
}

interface XRHitTestSource {
  cancel(): void
}

interface XRHitTestResult {
  getPose(baseSpace: XRSpace): XRPose | null
}

interface XRSpace extends EventTarget {}

interface XRWebGLLayer {
  readonly antialias: boolean
  readonly ignoreDepthValues: boolean
  readonly framebuffer: WebGLFramebuffer
  readonly framebufferWidth: number
  readonly framebufferHeight: number
  getViewport(view: XRView): XRViewport | null
}

interface XRViewport {
  readonly x: number
  readonly y: number
  readonly width: number
  readonly height: number
}

interface XRLayer {}

interface XRHand extends Map<XRHandJoint, XRJointSpace> {}

interface XRJointSpace extends XRSpace {}

interface XRSessionEvent extends Event {
  readonly session: XRSession
}

interface XRInputSourceEvent extends Event {
  readonly frame: XRFrame
  readonly inputSource: XRInputSource
}

interface XRInputSourceChangeEvent extends Event {
  readonly session: XRSession
  readonly added: readonly XRInputSource[]
  readonly removed: readonly XRInputSource[]
}

type XRSessionMode = 'inline' | 'immersive-vr' | 'immersive-ar'
type XRVisibilityState = 'visible' | 'visible-blurred' | 'hidden'
type XRReferenceSpaceType = 'viewer' | 'local' | 'local-floor' | 'bounded-floor' | 'unbounded'
type XREye = 'none' | 'left' | 'right'
type XRHandedness = 'none' | 'left' | 'right'
type XRTargetRayMode = 'gaze' | 'tracked-pointer' | 'screen'
type XREnvironmentBlendMode = 'opaque' | 'additive' | 'alpha-blend'
type XRInteractionMode = 'screen-space' | 'world-space'
type XRHandJoint = string
type XRFrameRequestCallback = (time: DOMHighResTimeStamp, frame: XRFrame) => void

declare global {
  interface Navigator {
    xr?: XRSystem
  }

  interface Window {
    XRSession?: typeof XRSession
    XRWebGLLayer?: {
      new(session: XRSession, context: WebGLRenderingContext | WebGL2RenderingContext, options?: XRWebGLLayerInit): XRWebGLLayer
    }
  }
}

interface XRWebGLLayerInit {
  antialias?: boolean
  depth?: boolean
  stencil?: boolean
  alpha?: boolean
  ignoreDepthValues?: boolean
  framebufferScaleFactor?: number
}

export {}
