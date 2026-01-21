// User types
export interface User {
  id: string
  email: string
  display_name?: string
  avatar_url?: string
  created_at: string
  updated_at: string
}

// Project types
export interface Project {
  id: string
  user_id: string
  title: string
  description?: string
  aspect_ratio: '1:1' | '4:5'
  thumbnail_url?: string
  num_slides: number
  canvas_data: CanvasData
  created_at: string
  updated_at: string
}

// Canvas data structure
export interface CanvasData {
  imageLibrary: ImageLibraryItem[]
  canvasBackgroundColor: string
  elements: CanvasElement[]
  slides: Slide[]
}

export interface ImageLibraryItem {
  id: string
  src: string
  uploadedAt: string
}

export interface Slide {
  slideNumber: number
  elementIds: string[]
}

// Canvas element types
export type CanvasElementType = 'image' | 'text' | 'shape' | 'sticker'

export interface BaseCanvasElement {
  id: string
  type: CanvasElementType
  x: number
  y: number
  width: number
  height: number
  zIndex: number
  rotation: number
}

export interface ImageElement extends BaseCanvasElement {
  type: 'image'
  src: string
}

export interface TextElement extends BaseCanvasElement {
  type: 'text'
  text: string
  font: string
  fontSize: number
  color: string
}

export interface ShapeElement extends BaseCanvasElement {
  type: 'shape'
  shapeType: 'circle' | 'rectangle' | 'star' | 'heart' | 'arrow'
  fillColor: string
  strokeColor: string
  strokeWidth: number
}

export interface StickerElement extends BaseCanvasElement {
  type: 'sticker'
  src: string
}

export type CanvasElement = ImageElement | TextElement | ShapeElement | StickerElement

// Context types
export interface AuthContextType {
  user: { id: string; email?: string } | null  // Using Supabase User type structure
  loading: boolean
  signInWithGoogle: () => Promise<void>
  signInWithEmail: (email: string, password: string) => Promise<void>
  signUpWithEmail: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
}

export interface ProjectContextType {
  project: Project | null
  loading: boolean
  saveProject: () => Promise<void>
  updateProject: (updates: Partial<Project>) => void
}

export interface CanvasContextType {
  selectedElementId: string | null
  tool: 'select' | 'text' | 'shape' | 'sticker'
  clipboard: CanvasElement | null
  addElement: (element: CanvasElement) => void
  updateElement: (id: string, updates: Partial<CanvasElement>) => void
  deleteElement: (id: string) => void
  duplicateElement: (id: string) => void
  bringToFront: (id: string) => void
  sendToBack: (id: string) => void
}

// Component prop types
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
}

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
}

export interface ProjectCardProps {
  project: Project
  onDelete: (id: string) => void
}
