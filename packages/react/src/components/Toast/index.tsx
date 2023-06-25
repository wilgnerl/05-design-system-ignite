import { useState } from 'react'
import {
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'

import { X } from 'phosphor-react'
import { Button } from '../Button'

export interface ToastProps {
  content: string
  title: string
}

export function ToastComponent({ content, title }: ToastProps) {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <ToastProvider>
      <Button onClick={() => setOpen(true)}>Click me to open Toast</Button>
      <ToastRoot duration={40000} open={open} onOpenChange={setOpen}>
        <ToastTitle>
          {title}
          <ToastClose>
            <X size={20} />
          </ToastClose>
        </ToastTitle>
        <ToastDescription>{content}</ToastDescription>
      </ToastRoot>
      <ToastViewport />
    </ToastProvider>
  )
}

ToastComponent.displayName = 'Toast'
