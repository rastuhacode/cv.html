export function getErrorMessage(error: unknown): string {
  const cause = error instanceof ThrownError ? error.cause : error
  return cause instanceof Error ? cause.message : 'An unexpected error occurred.'
}
