export function useCommonToaster() {
  const toast = useToast()

  const error = (title: string, description?: string) => (
    toast.add({
      title,
      description,
      color: 'error',
      icon: 'i-lucide-circle-alert'
    })
  )

  const success = (title: string, description?: string) => (
    toast.add({
      title,
      description,
      color: 'success',
      icon: 'i-lucide-check-circle'
    })
  )

  const info = (title: string, description?: string) => (
    toast.add({
      title,
      description,
      color: 'info',
      icon: 'i-lucide-info'
    })
  )

  return { error, success, info }
}
